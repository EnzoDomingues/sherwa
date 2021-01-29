import * as RNLocalize from 'react-native-localize'

import I18n from 'i18n-js'

import { II18nParameter } from '~/@types/application/I18nApplication.types'
import enUS from '~/lib/i18n/locales/en-US.json'
import es from '~/lib/i18n/locales/es.json'
import ptBR from '~/lib/i18n/locales/pt-BR.json'

const locales = RNLocalize.getLocales()

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag
}

I18n.defaultLocale = 'pt-BR'
I18n.fallbacks = true
I18n.translations = {
  'en-US': enUS,
  es,
  'pt-BR': ptBR,
}

const translate = (key: string, parameter?: II18nParameter) =>
  I18n.t(key, parameter)

export default translate
