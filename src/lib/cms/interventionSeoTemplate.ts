import type { SeoInterventionPageData } from '@/lib/interventions/seoPages';

export type InterventionTemplateKind = 'seo_v2' | 'seo_v1' | 'legacy_blocks';

const SECTION_KEYS = ['01', '02', '03', '04', '05', '06', '07', '08', '09'] as const;

function asString(value: unknown) {
  return typeof value === 'string' ? value : '';
}

function asStringList(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.map((x) => String(x ?? '').trim()).filter(Boolean);
}

export type SeoCalloutTone = 'info' | 'warning';

export type SeoV2Callout = {
  tone: SeoCalloutTone;
  text: string;
};

export type SeoV2Section = {
  key: (typeof SECTION_KEYS)[number];
  heading: string;
  paragraphs: string[];
  bullets: string[];
  rows: { label: string; text: string }[];
  steps: { phase: string; text: string }[];
  callout: SeoV2Callout | null;
  generalRisks: string[];
  specificRisks: string[];
};

export type SeoInterventionTemplateV2 = {
  breadcrumb: string;
  categoryLabel: string;
  h1: string;
  intro: string;
  hero: { imageSrc: string; imageAlt: string };
  quickFacts: { value: string; label: string }[];
  sections: SeoV2Section[];
  faq: { question: string; answer: string }[];
};

export function defaultSeoTemplateData(): SeoInterventionPageData {
  return {
    breadcrumb: 'Interventions',
    categoryLabel: '',
    h1: '',
    intro: '',
    quickFacts: [
      { value: '', label: '' },
      { value: '', label: '' },
      { value: '', label: '' },
      { value: '', label: '' },
    ],
    sections: SECTION_KEYS.map((key) => ({ key, heading: '', paragraphs: [], bullets: [] })),
    faq: [{ question: '', answer: '' }],
  };
}

function parseLabeledRows(items: string[]) {
  return items
    .map((item) => {
      const idx = item.indexOf(' : ');
      if (idx <= 0) return null;
      return { label: item.slice(0, idx).trim(), text: item.slice(idx + 3).trim() };
    })
    .filter(Boolean) as { label: string; text: string }[];
}

function parseSteps(items: string[]) {
  return items
    .map((item) => {
      const idx = item.indexOf(' : ');
      if (idx <= 0) return null;
      return { phase: item.slice(0, idx).trim(), text: item.slice(idx + 3).trim() };
    })
    .filter(Boolean) as { phase: string; text: string }[];
}

function parseRisks(items: string[]) {
  return {
    generalRisks: items
      .filter((item) => item.startsWith('RISQUES GÉNÉRAUX :'))
      .map((item) => item.replace('RISQUES GÉNÉRAUX :', '').trim()),
    specificRisks: items
      .filter((item) => item.startsWith('RISQUES SPÉCIFIQUES :'))
      .map((item) => item.replace('RISQUES SPÉCIFIQUES :', '').trim()),
  };
}

function extractCallout(paragraphs: string[], bullets: string[], key: string) {
  const source = [...paragraphs, ...bullets];
  const tagged = source.find((x) => x.startsWith('NOTE :') || x.startsWith('ALERTE :'));
  if (tagged) {
    return tagged.startsWith('ALERTE :')
      ? { tone: 'warning' as const, text: tagged.replace('ALERTE :', '').trim() }
      : { tone: 'info' as const, text: tagged.replace('NOTE :', '').trim() };
  }
  return key === '02' ? null : null;
}

export function coerceSeoTemplateV2Data(
  value: unknown,
  opts?: { hero_image_src?: string | null; hero_image_alt?: string | null },
): SeoInterventionTemplateV2 | null {
  const v1 = coerceSeoTemplateData(value);
  if (!v1) return null;

  const raw = value as any;
  const rawSections = Array.isArray(raw?.sections) ? raw.sections : [];
  const byKey = new Map<string, any>();
  rawSections.forEach((s: any) => byKey.set(asString(s?.key).trim(), s));

  const sections: SeoV2Section[] = SECTION_KEYS.map((key) => {
    const base = v1.sections.find((s) => s.key === key) ?? {
      key,
      heading: '',
      paragraphs: [],
      bullets: [],
    };
    const source = byKey.get(key) ?? {};
    const paragraphs = asStringList(base.paragraphs);
    const bullets = asStringList(base.bullets);
    const rows = Array.isArray(source.rows)
      ? source.rows
          .map((r: any) => ({ label: asString(r?.label).trim(), text: asString(r?.text).trim() }))
          .filter((r: any) => r.label || r.text)
      : key === '04'
        ? parseLabeledRows(bullets)
        : [];
    const steps = Array.isArray(source.steps)
      ? source.steps
          .map((r: any) => ({ phase: asString(r?.phase).trim(), text: asString(r?.text).trim() }))
          .filter((r: any) => r.phase || r.text)
      : key === '07'
        ? parseSteps(bullets)
        : [];
    const risks =
      Array.isArray(source.generalRisks) || Array.isArray(source.specificRisks)
        ? {
            generalRisks: asStringList(source.generalRisks),
            specificRisks: asStringList(source.specificRisks),
          }
        : key === '09'
          ? parseRisks(bullets)
          : { generalRisks: [], specificRisks: [] };
    const callout: SeoV2Callout | null =
      source.callout && typeof source.callout === 'object'
        ? {
            tone: source.callout.tone === 'warning' ? ('warning' as const) : ('info' as const),
            text: asString(source.callout.text).trim(),
          }
        : extractCallout(paragraphs, bullets, key);

    return {
      key,
      heading: asString(base.heading),
      paragraphs,
      bullets,
      rows,
      steps,
      callout: callout && callout.text ? callout : null,
      generalRisks: risks.generalRisks,
      specificRisks: risks.specificRisks,
    };
  });

  return {
    breadcrumb: v1.breadcrumb,
    categoryLabel: v1.categoryLabel,
    h1: v1.h1,
    intro: v1.intro,
    hero: {
      imageSrc: asString(raw?.hero?.imageSrc || opts?.hero_image_src || '').trim(),
      imageAlt: asString(raw?.hero?.imageAlt || opts?.hero_image_alt || '').trim(),
    },
    quickFacts: v1.quickFacts,
    sections,
    faq: v1.faq,
  };
}

export function coerceSeoTemplateData(value: unknown): SeoInterventionPageData | null {
  if (!value || typeof value !== 'object') return null;
  const raw = value as any;

  const quickFacts = Array.isArray(raw.quickFacts)
    ? raw.quickFacts
        .slice(0, 4)
        .map((f: any) => ({ value: asString(f?.value).trim(), label: asString(f?.label).trim() }))
    : [];

  while (quickFacts.length < 4) quickFacts.push({ value: '', label: '' });

  const sectionMap = new Map<string, any>();
  if (Array.isArray(raw.sections)) {
    for (const s of raw.sections) {
      const key = asString(s?.key).trim();
      if (!SECTION_KEYS.includes(key as any)) continue;
      sectionMap.set(key, s);
    }
  }

  const sections = SECTION_KEYS.map((key) => {
    const s = sectionMap.get(key) ?? {};
    return {
      key,
      heading: asString(s.heading).trim(),
      paragraphs: asStringList(s.paragraphs),
      bullets: asStringList(s.bullets),
    };
  });

  const faq = Array.isArray(raw.faq)
    ? raw.faq
        .map((i: any) => ({
          question: asString(i?.question).trim(),
          answer: asString(i?.answer).trim(),
        }))
        .filter((i: any) => i.question || i.answer)
    : [];

  return {
    breadcrumb: asString(raw.breadcrumb).trim(),
    categoryLabel: asString(raw.categoryLabel).trim(),
    h1: asString(raw.h1).trim(),
    intro: asString(raw.intro).trim(),
    quickFacts,
    sections,
    faq,
  };
}
