// import { LOCAL_LANGUAGE_MAP } from '@/constants'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function detectLanguage(): Language {
  if (typeof window !== 'undefined') {
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)
    const urlLang = params.get('lang')
    if (urlLang) {
      return urlLang as Language
    }
    const storedLanguage = localStorage.getItem('lang')
    if (storedLanguage) {
      return storedLanguage as Language
    }
    const browserLang = (
      navigator.language || navigator.userLanguage
    ).toLowerCase()
    if (browserLang.startsWith('zh')) {
      if (
        browserLang.includes('tw') ||
        browserLang.includes('hk') ||
        browserLang.includes('mo') ||
        browserLang.includes('hant')
      ) {
        return 'hk'
      }
      return 'cn'
    }
    if (browserLang.startsWith('ja')) {
      return 'jp'
    }
    if (browserLang.startsWith('ko')) {
      return 'kr'
    }
    return 'us'
  }
  return 'us'
}
