import MarkdownIt from 'markdown-it';

let cached: MarkdownIt | null = null;

function getRenderer() {
  if (cached) return cached;
  // Security: do not allow raw HTML in markdown.
  cached = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
    breaks: false,
  });
  return cached;
}

export function renderMarkdown(markdown: string) {
  return getRenderer().render(markdown ?? '');
}
