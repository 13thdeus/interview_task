import i18n, { TFuncKey } from "i18next";
import { getI18n, initReactI18next } from "react-i18next";
import { findBestAvailableLanguage } from "react-native-localize";
import { I18nManager } from "react-native";
import { setDateLocale } from "./dateFormatter";
import type { en } from "./translations/en";
import type { ru } from "./translations/ru";
import { LanguageEnum } from "../api/common/LanguageEnum";

// export enum LanguageEnum {
//   En = "en",
//   Ru = "ru"
// }

export const languages = [
  { languageTag: LanguageEnum.En, isRTL: false, name: "English" },
  { languageTag: LanguageEnum.Ru, isRTL: false, name: "Русский" },
] as const;

export const fallbackLng = languages[0].languageTag;

export type Languages = typeof languages[number];
export const languagesTags = languages.map(el => el.languageTag);
export const languagesNames = languages.map(el => el.name);
const getLanguageByTag = (tag?: string) => languages.find(el => el.languageTag == tag);

export type LanguageResource = typeof en | typeof ru;
export type TFuncKeyApp<TPrefix = undefined> = TFuncKey<"translation", TPrefix, LanguageResource>;

const translationGetters: { [key: string]: (() => { [key: string]: LanguageResource }) | undefined } = {
  en: () => require("./translations/en"),
  ru: () => require("./translations/ru"),
};

export const intlInitPromise = i18n
  .use(initReactI18next)
  .init({
    resources: {},
    fallbackLng,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

export const getLanguage = () => getLanguageByTag(getInterfaceLanguage()?.languageTag) || languages[0];
export const getInterfaceLanguage = () => findBestAvailableLanguage(languagesTags);

export async function setLanguage(inputLanguage?: Languages): Promise<void> {
  await intlInitPromise;
  const language = inputLanguage || getLanguage();
  i18n.addResourceBundle(
    language.languageTag,
    "translation",
    translationGetters[language.languageTag]?.()[language.languageTag]["translation"],
    true,
    false,
  );

  I18nManager.forceRTL(language.isRTL);
  setDateLocale(language.languageTag);
  await i18n.changeLanguage(language.languageTag);
}

export const i18next = getI18n();

function localeTypeCheck() {
  // @ts-ignore
  const testRu: typeof en = ({} as any);
  // @ts-ignore
  const testEn: typeof ru = {
    translation: testRu.translation,
  };
  testRu.translation = testEn.translation;
}

if (__DEV__) {
  localeTypeCheck();
}
