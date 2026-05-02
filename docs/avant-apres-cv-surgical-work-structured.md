# CV Surgical Work Structured Extraction (Pages 149+)

Source: `/home/dlight/Downloads/CV en anglais.pdf`

## Taxonomy Draft

- `abdominoplastie`
- `post-bariatrique`
- `mommy-makeover`
- `chirurgie-mammaire`
- `lifting-visage`
- `blepharoplastie`
- `profiloplastie`
- `rhinoplastie`
- `chirurgie-homme`

## Cases (Normalized)

```json
[
  {
    "family": "abdominoplastie",
    "cases": [
      {
        "case_number": 1,
        "age": 54,
        "sex": "female",
        "weight_kg": 90,
        "smoking_status": "non_smoker",
        "pregnancies_count": 4,
        "procedures": ["abdominoplastie", "cure de diastasis", "liposuccion 4.5L"],
        "result_delay_label": "3 mois"
      },
      {
        "case_number": 2,
        "age": 44,
        "sex": "female",
        "weight_kg": 130,
        "smoking_status": "non_smoker",
        "pregnancies_count": 2,
        "procedures": ["abdominoplastie", "cure de diastasis", "liposuccion 6L"],
        "result_delay_label": "4 mois"
      },
      {
        "case_number": 3,
        "age": 36,
        "sex": "female",
        "weight_kg": 60,
        "smoking_status": "non_smoker",
        "pregnancies_count": 1,
        "history_notes": "grossesse gemellaire",
        "procedures": ["abdominoplastie", "cure de diastasis", "liposuccion 2L"],
        "result_delay_label": "3 mois"
      },
      {
        "case_number": 4,
        "age": 28,
        "sex": "female",
        "weight_kg": 110,
        "smoking_status": "smoker",
        "pregnancies_count": 1,
        "procedures": ["abdominoplastie", "cure de diastasis", "liposuccion 7L"],
        "result_delay_label": "2 jours"
      },
      {
        "case_number": 5,
        "age": 52,
        "sex": "female",
        "weight_kg": 65,
        "smoking_status": "non_smoker",
        "pregnancies_count": 2,
        "history_notes": "antecedent cancer du colon opere + radiotherapie + cicatrice cheloide",
        "procedures": [
          "abdominoplastie fleur-de-lys",
          "cure de diastasis",
          "liposuccion flancs 2L"
        ],
        "result_delay_label": "3 et 6 semaines",
        "tags": ["cheloide", "antecedent-oncologique"]
      }
    ]
  },
  {
    "family": "post-bariatrique",
    "cases": [
      {
        "case_number": 1,
        "age": 56,
        "sex": "female",
        "weight_kg": 47,
        "smoking_status": "smoker",
        "post_bariatric": true,
        "history_notes": "sleeve, perte 60kg",
        "procedures": ["bodylift", "cure diastasis", "lifting mammaire", "lifting bras"],
        "result_delay_label": "multi-etapes"
      },
      {
        "case_number": 2,
        "age": 29,
        "sex": "female",
        "weight_kg": 78,
        "smoking_status": "smoker",
        "post_bariatric": true,
        "history_notes": "bypass, perte 40kg",
        "procedures": ["abdominoplastie fleur-de-lys", "lifting mammaire", "lifting bras", "BBL"],
        "result_delay_label": "multi-etapes"
      },
      {
        "case_number": 3,
        "age": 53,
        "sex": "female",
        "weight_kg": 60,
        "smoking_status": "non_smoker",
        "post_bariatric": true,
        "history_notes": "sleeve, perte 37kg, laparotomie 2024",
        "procedures": ["abdominoplastie", "exerese cicatrice de laparotomie"],
        "result_delay_label": "7 mois"
      },
      {
        "case_number": 4,
        "age": 54,
        "sex": "female",
        "weight_kg": 68,
        "smoking_status": "non_smoker",
        "post_bariatric": true,
        "history_notes": "sleeve 2023, implants mammaires 2006",
        "procedures": [
          "abdominoplastie",
          "lifting pubien",
          "liposuccion",
          "echange implants",
          "lifting mammaire"
        ],
        "result_delay_label": "3 semaines"
      }
    ]
  },
  {
    "family": "chirurgie-mammaire",
    "cases": [
      {
        "case_number": 1,
        "age": 29,
        "sex": "female",
        "weight_kg": 80,
        "smoking_status": "smoker",
        "procedures": ["reduction mammaire"],
        "result_delay_label": "3 mois"
      },
      {
        "case_number": 2,
        "age": 33,
        "sex": "female",
        "weight_kg": 87,
        "smoking_status": "non_smoker",
        "procedures": ["reduction mammaire"],
        "result_delay_label": "6 mois"
      },
      {
        "case_number": 3,
        "age": 28,
        "sex": "female",
        "weight_kg": 92,
        "smoking_status": "non_smoker",
        "procedures": ["reduction mammaire", "tummy tuck", "liposuccion"],
        "result_delay_label": "4 mois et 2 ans"
      },
      {
        "case_number": 4,
        "age": 31,
        "sex": "female",
        "weight_kg": 65,
        "smoking_status": "non_smoker",
        "procedures": ["augmentation mammaire"],
        "technique_notes": "implants 400cc, high profile, dual plane",
        "result_delay_label": "3 mois"
      },
      {
        "case_number": 5,
        "age": 34,
        "sex": "female",
        "weight_kg": 68,
        "smoking_status": "non_smoker",
        "procedures": ["augmentation mammaire", "correction asymetrie", "mastopexie"],
        "history_notes": "sein tubereux + asymetrie",
        "tags": ["sein-tubereux", "asymetrie"]
      }
    ]
  },
  {
    "family": "lifting-visage",
    "cases": [
      {
        "case_number": 1,
        "age": 43,
        "sex": "female",
        "weight_kg": 63,
        "smoking_status": "smoker",
        "procedures": [
          "liposuccion double menton",
          "deep plane neck lift",
          "vertical SMAS facelift"
        ],
        "result_delay_label": "3 semaines"
      },
      {
        "case_number": 2,
        "age": 51,
        "sex": "female",
        "weight_kg": 64,
        "smoking_status": "non_smoker",
        "procedures": ["deep plane face and neck lift", "lipofilling menton"],
        "result_delay_label": "2 jours"
      },
      {
        "case_number": 3,
        "age": 54,
        "sex": "female",
        "weight_kg": 64,
        "smoking_status": "non_smoker",
        "procedures": [
          "liposuccion",
          "deep plane face and neck lift",
          "blepharoplastie superieure",
          "blepharoplastie inferieure"
        ],
        "result_delay_label": "7 mois"
      },
      {
        "case_number": 4,
        "age": 48,
        "sex": "female",
        "weight_kg": 60,
        "smoking_status": "non_smoker",
        "procedures": ["liposuccion", "deep plane face and neck lift"],
        "result_delay_label": "2 jours"
      },
      {
        "case_number": 5,
        "age": 55,
        "sex": "female",
        "weight_kg": 61,
        "smoking_status": "smoker",
        "procedures": ["vertical SMAS face and neck lift", "liposuccion"],
        "result_delay_label": "6 mois"
      },
      {
        "case_number": 6,
        "age": 48,
        "sex": "female",
        "weight_kg": 55,
        "smoking_status": "smoker",
        "procedures": [
          "ponytail face and neck lift",
          "central midface lift",
          "lip lift",
          "upper/lower blepharoplasty",
          "fat grafting",
          "temporal brow lift"
        ],
        "result_delay_label": "8 mois"
      }
    ]
  },
  {
    "family": "rhinoplastie",
    "cases": [
      {
        "case_number": 1,
        "age": 22,
        "sex": "female",
        "weight_kg": 59,
        "smoking_status": "smoker",
        "procedures": ["hybrid preservation rhinoplasty"],
        "result_delay_label": "10 jours"
      },
      {
        "case_number": 2,
        "age": 29,
        "sex": "female",
        "weight_kg": 64,
        "smoking_status": "non_smoker",
        "procedures": ["rhinoplastie reconstructrice"],
        "technique_notes": "greffe cartilage costal + alar batten + columellar strut"
      },
      {
        "case_number": 3,
        "age": 25,
        "sex": "female",
        "weight_kg": 54,
        "smoking_status": "non_smoker",
        "procedures": ["septorhinoplastie"],
        "technique_notes": "correction deviation septale + osteotomies laterales + septal extension graft"
      }
    ]
  },
  {
    "family": "chirurgie-homme",
    "cases": [
      {
        "case_number": 1,
        "age": 27,
        "sex": "male",
        "weight_kg": 72,
        "smoking_status": "non_smoker",
        "procedures": ["liposuccion", "mastectomie gynecomastie"],
        "result_delay_label": "3 semaines"
      },
      {
        "case_number": 2,
        "age": 32,
        "sex": "male",
        "weight_kg": 75,
        "smoking_status": "non_smoker",
        "procedures": ["liposuccion", "mastectomie gynecomastie"],
        "technique_notes": "round block",
        "result_delay_label": "4 semaines"
      },
      {
        "case_number": 3,
        "age": 47,
        "sex": "male",
        "weight_kg": 73,
        "smoking_status": "non_smoker",
        "procedures": ["liposuccion abdomen et flancs"],
        "result_delay_label": "3 ans"
      }
    ]
  }
]
```

## Import Guidance

- Set first media set as `is_cover=true`.
- Keep `result_delay_label` human-readable for UI chips.
- Use `procedures[0]` as primary when not explicitly defined.
- Normalize tags to lowercase slug format.
