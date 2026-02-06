#!/usr/bin/env python3

import argparse
import json
import os
import sys
from typing import Any, Dict, Optional


def load_router_config(path: str) -> Dict[str, Any]:
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def match_rule(rule_when: Dict[str, str], task_type: str, risk: str) -> bool:
    for k, v in rule_when.items():
        if k == "taskType" and v != task_type:
            return False
        if k == "risk" and v != risk:
            return False
    return True


def route(config: Dict[str, Any], task_type: str, risk: str) -> Dict[str, str]:
    rules = config.get("routing", {}).get("rules", [])
    models = config.get("models", {})

    for r in rules:
        when = r.get("when", {})
        if match_rule(when, task_type=task_type, risk=risk):
            key = r.get("use")
            model = models.get(key, models.get("general", "openai/gpt-5.2"))
            return {
                "key": key,
                "model": model,
                "reason": r.get("reason", "matched rule"),
            }

    default_key = config.get("routing", {}).get("defaults", {}).get("taskType", "general")
    model = models.get(default_key, models.get("general", "openai/gpt-5.2"))
    return {
        "key": default_key,
        "model": model,
        "reason": "default routing",
    }


def main(argv: Optional[list] = None) -> int:
    p = argparse.ArgumentParser(
        description="Recommend a model (Codex vs GPT-5.2) for a task."
    )
    p.add_argument("task", help="Freeform task description")
    p.add_argument(
        "--type",
        dest="task_type",
        choices=["code", "copy", "seo", "design", "general"],
        default="general",
        help="Task category",
    )
    p.add_argument(
        "--risk",
        choices=["normal", "compliance", "security"],
        default="normal",
        help="Risk level (compliance forces GPT-5.2)",
    )
    p.add_argument(
        "--config",
        default=os.path.join("agentic", "router.json"),
        help="Path to router config JSON",
    )
    args = p.parse_args(argv)

    try:
        config = load_router_config(args.config)
    except FileNotFoundError:
        print(f"ERROR: router config not found: {args.config}", file=sys.stderr)
        return 2
    except json.JSONDecodeError as e:
        print(f"ERROR: invalid JSON in {args.config}: {e}", file=sys.stderr)
        return 2

    result = route(config, task_type=args.task_type, risk=args.risk)

    print("Recommended model:")
    print(f"- model: {result['model']}")
    print(f"- reason: {result['reason']}")
    print("\nRouting hints:")
    if args.risk == "compliance":
        print("- Keep medical/legal claims conservative; avoid promises; include disclaimers.")
    if args.task_type == "code":
        print("- Prefer minimal diffs; follow existing conventions; add tests if present.")
    if args.task_type in ("copy", "seo"):
        print("- Write in French; optimize titles/meta; keep tone medical and calm.")
    print("\nTask:")
    print(f"- {args.task}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
