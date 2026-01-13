export function truncateString(str: string, maxLength: number) {
  if (String(str).length <= maxLength) return str;
  return str.slice(0, maxLength).trim() + '...';
}