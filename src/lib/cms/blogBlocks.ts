export type BlogBlock =
  | {
      type: 'section';
      heading: string;
      text: string;
      points?: string[];
    }
  | {
      type: 'bullets';
      heading: string;
      items: string[];
    }
  | {
      type: 'callout';
      tone: BlogCalloutTone;
      title?: string;
      text: string;
      points?: string[];
    }
  | {
      type: 'faq';
      heading: string;
      items: { question: string; answer: string }[];
    }
  | {
      type: 'image';
      heading?: string;
      url: string;
      alt: string;
      caption?: string;
      layout?: 'full' | 'card' | 'left' | 'right';
    }
  | {
      type: 'sources';
      heading?: string;
      items: { title: string; url: string; publisher?: string; year?: string }[];
    }
  | {
      type: 'cta';
      heading: string;
      text: string;
      button_label: string;
      button_href: string;
    };

export function defaultBlogBlocks(): BlogBlock[] {
  return [
    {
      type: 'section',
      heading: 'À retenir',
      text: 'Cet article est une information générale. Il ne remplace pas une consultation. Les indications et les suites varient selon les patients.',
    },
    {
      type: 'callout',
      tone: 'securite',
      title: 'Quand recontacter ?',
      text: 'Après un acte, recontactez le cabinet si vous avez un symptôme inhabituel ou une douleur importante.',
    },
    {
      type: 'sources',
      heading: 'Références',
      items: [],
    },
  ];
}

export function coerceBlogBlocks(value: unknown): BlogBlock[] | null {
  if (value === null || value === undefined) return null;
  if (!Array.isArray(value)) return null;
  const out: BlogBlock[] = [];
  for (const raw of value as any[]) {
    if (!raw || typeof raw !== 'object') continue;
    const type = String(raw.type ?? '').trim();

    if (type === 'section') {
      const heading = String(raw.heading ?? '').trim();
      const text = String(raw.text ?? raw.body ?? '');
      const points = Array.isArray(raw.points)
        ? raw.points.map((x: any) => String(x ?? '')).filter((x: string) => x.trim())
        : undefined;
      if (!heading) continue;
      out.push({ type: 'section', heading, text, points });
      continue;
    }

    if (type === 'bullets') {
      const heading = String(raw.heading ?? '').trim();
      const items = Array.isArray(raw.items)
        ? raw.items.map((x: any) => String(x ?? '')).filter((x: string) => x.trim())
        : [];
      if (!heading) continue;
      out.push({ type: 'bullets', heading, items });
      continue;
    }

    if (type === 'callout') {
      const tone = String(raw.tone ?? '').trim();
      const safeTone: BlogCalloutTone =
        tone === 'conseil' || tone === 'securite' || tone === 'a-retenir' || tone === 'mythe-vrai'
          ? (tone as any)
          : 'conseil';
      const title = typeof raw.title === 'string' ? raw.title.trim() || undefined : undefined;
      const text = String(raw.text ?? '');
      const points = Array.isArray(raw.points)
        ? raw.points.map((x: any) => String(x ?? '')).filter((x: string) => x.trim())
        : undefined;
      out.push({ type: 'callout', tone: safeTone, title, text, points });
      continue;
    }

    if (type === 'faq') {
      const heading = String(raw.heading ?? '').trim() || 'Questions fréquentes';
      const items = Array.isArray(raw.items) ? raw.items : [];
      const normalized = items
        .map((i: any) => ({
          question: String(i?.question ?? '').trim(),
          answer: String(i?.answer ?? ''),
        }))
        .filter((i: any) => i.question);
      out.push({ type: 'faq', heading, items: normalized });
      continue;
    }

    if (type === 'image') {
      const heading = typeof raw.heading === 'string' ? raw.heading.trim() || undefined : undefined;
      const url = String(raw.url ?? '').trim();
      const alt = String(raw.alt ?? '').trim();
      const caption = typeof raw.caption === 'string' ? raw.caption : undefined;
      const layout = raw.layout;
      const safeLayout =
        layout === 'card' || layout === 'left' || layout === 'right' || layout === 'full'
          ? layout
          : undefined;
      if (!url || !alt) continue;
      out.push({ type: 'image', heading, url, alt, caption, layout: safeLayout });
      continue;
    }

    if (type === 'sources') {
      const heading = typeof raw.heading === 'string' ? raw.heading.trim() || undefined : undefined;
      const items = Array.isArray(raw.items) ? raw.items : [];
      const normalized = items
        .map((i: any) => ({
          title: String(i?.title ?? '').trim(),
          url: String(i?.url ?? '').trim(),
          publisher: typeof i?.publisher === 'string' ? i.publisher.trim() || undefined : undefined,
          year: typeof i?.year === 'string' ? i.year.trim() || undefined : undefined,
        }))
        .filter((i: any) => i.title && i.url);
      out.push({ type: 'sources', heading, items: normalized });
      continue;
    }

    if (type === 'cta') {
      const heading = String(raw.heading ?? '').trim();
      const text = String(raw.text ?? raw.body ?? '');
      const button_label = String(raw.button_label ?? '').trim();
      const button_href = String(raw.button_href ?? '').trim();
      if (!heading || !button_label || !button_href) continue;
      out.push({ type: 'cta', heading, text, button_label, button_href });
      continue;
    }
  }
  return out;
}

export type BlogCalloutTone = 'conseil' | 'securite' | 'a-retenir' | 'mythe-vrai';
