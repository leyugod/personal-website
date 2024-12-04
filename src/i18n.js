import en from './locales/en'
import zh from './locales/zh'

class I18n {
    constructor() {
        this.translations = { en, zh }
        this.currentLocale = localStorage.getItem('locale') || 
            (navigator.language.startsWith('zh') ? 'zh' : 'en')
        
        this.listeners = new Set()
    }

    t(key) {
        const keys = key.split('.')
        let value = this.translations[this.currentLocale]
        
        for (const k of keys) {
            value = value?.[k]
            if (value === undefined) return key
        }
        
        return value
    }

    setLocale(locale) {
        if (this.translations[locale]) {
            this.currentLocale = locale
            localStorage.setItem('locale', locale)
            document.documentElement.setAttribute('lang', locale)
            this.notifyListeners()
        }
    }

    toggleLocale() {
        this.setLocale(this.currentLocale === 'en' ? 'zh' : 'en')
    }

    subscribe(callback) {
        this.listeners.add(callback)
        return () => this.listeners.delete(callback)
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback())
    }
}

export const i18n = new I18n()

// Initialize language
document.documentElement.setAttribute('lang', i18n.currentLocale)

// Add global helper
window.t = key => i18n.t(key)
