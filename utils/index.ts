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

export function removeAtSymbol(str: string): string {
  return str.startsWith('@') ? str.slice(1) : str
}

export function validateSteamUsername(text: string): boolean {
  if (text.length > 64) {
    return false
  }

  // Проверка допустимых символов
  const validPattern = /^[a-zA-Z0-9_]*$/;
  if (!validPattern.test(text)) {
    return false
  }

  // Проверка на запрещённые последовательности
  // const forbiddenPatterns = [
  //   { pattern: /\.{2,}/},
  //   { pattern: /_{2,}/ },
  //   { pattern: /^\./ },
  //   { pattern: /\.$/ },
  //   { pattern: /^_/ },
  //   { pattern: /_$/ }
  // ];

  // for (const { pattern } of forbiddenPatterns) {
  //   if (pattern.test(text)) {
  //     return false
  //   }
  // }

  return true
}