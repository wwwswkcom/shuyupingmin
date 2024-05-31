import defaultSettings from '@/settings'

const title = defaultSettings.title || '欢迎使用漱玉平民SAP业务协作平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
