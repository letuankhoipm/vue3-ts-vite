import { createI18n } from "vue-i18n";
import { VueCookieNext } from "vue-cookie-next";
import { environment as env } from "@/environment/environment";
import messages from "../messages";
const defaultLocale: string = VueCookieNext.getCookie("locale") || "";

export const i18n = createI18n({
  locale: env.DF_LOCALE,
  legacy: false,
  fallbackLocale: "vi",
  messages,
});

export const setI18nLanguage = (locale: string): void => {
  VueCookieNext.setCookie("locale", locale, { expire: "1y" });
  document.querySelector("html")?.setAttribute("lang", locale);

  if (locale === "en") {
    i18n.global.locale = "en";
  } else {
    i18n.global.locale = "vi";
  }
};

if (defaultLocale) setI18nLanguage(defaultLocale);
