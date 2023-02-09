

// 提示信息仅在开发环境生效
import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'

import { configStore } from '../store/modules/config'


const files: Record<string, any> = import.meta.glob('./modules/*.ts', { eager: true })

let messages: LocaleMessages<VueMessageType> = {}
Object.keys(files).forEach((c: string) => {

    const module = files[c].default
    const moduleName: string = c.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2')
    messages[moduleName] = module
})

const locale = configStore.getLocale.value || 'zh-cn' // 初次进入，采用浏览器当前设置的语言，默认采用中文
/** 国际化主函数，调用vue-i18n插件生成 */
const i18n = createI18n({
    __VUE_I18N_LEGACY_API__: false,
    __VUE_I18N_FULL_INSTALL__: false,
    locale: locale,
    legacy: false,
    globalInjection: true,
    allowComposition: true,
    messages: messages
})

// document.getElementsByTagName('html')[0].setAttribute('lang', locale)

export default i18n