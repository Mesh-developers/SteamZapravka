/* eslint-disable @typescript-eslint/ban-ts-comment */
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

  return true
}

export function validateZeroStart(text: string): boolean {
  if (text.startsWith('0')) {
    return false;
  }
  return true;
}

// @ts-ignore
export function getDataOrLoader(data: any, postfix="") {
  if (isNaN(data) || data === undefined || data === "" || data === 0)
    return <span className="loader mt-2"></span>
  else
    return data + postfix
}

export function getRegionOnLatin(region: string) {
  switch (region) {
    case "Любой":
      return "Any"
    case "Европа":
      return "Europe"
    case "США":
      return "America"
    case "Азия":
      return "Asia"
    default:
      return region
  }
}