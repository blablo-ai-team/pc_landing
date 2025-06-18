import { promises as fs } from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'

export type Locale = 'en' | 'vi'

export const defaultLocale: Locale = 'en'
export const locales: Locale[] = ['en', 'vi']

export async function getTranslation(locale: Locale) {
  try {
    const filePath = path.join(process.cwd(), 'locales', locale, 'common.json')
    const fileContents = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error(`Error loading translation for locale ${locale}:`, error)
    // Fallback to default locale
    if (locale !== defaultLocale) {
      return getTranslation(defaultLocale)
    }
    throw error
  }
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path
}

export function t(translations: any, key: string, fallback?: string): string {
  const value = getNestedValue(translations, key)
  return value || fallback || key
}
