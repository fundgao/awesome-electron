import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from '@/i18n-ns.ts'
import { detectLanguage } from '@/utils'

const namespaces = Object.keys(resources.us || {})
const defaultNS = namespaces[0] || 'home'

i18n.use(initReactI18next).init({
  resources,
  lng: detectLanguage(),
  fallbackLng: 'us',
  ns: namespaces,
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
  react: {
    transSupportBasicHtmlNodes: true, // 支持简单 HTML 如 <strong style="color: red;">
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'a'], // 允许的标签
  },
  returnObjects: true,
})

export default i18n
