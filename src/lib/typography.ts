export function formatFrenchPunctuation(value: string) {
  return value.replace(/\s+([:;!?»])/g, '\u202F$1');
}
