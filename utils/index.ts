export function truncateString(str: string, maxLength: number) {
  if (String(str).length <= maxLength) return str;
  return str.slice(0, maxLength).trim() + '...';
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function replaceWords(
  text: string,
  wordMap: Map<string, string>
): string {
  const pattern = Array.from(wordMap.keys())
    .map(key => escapeRegExp(key))
    .join('|')

  const regex = new RegExp(`\\b(${pattern})\\b`, 'gi')

  return text.replace(regex, match =>
    wordMap.get(match.toLowerCase()) || match
  )
}