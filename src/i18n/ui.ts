import { en } from "./en";
import { es } from "./es";

export type Lang = "en" | "es";
export type UIStrings = typeof en;

const ui: Record<Lang, UIStrings> = { en, es };

export function getLang(url: URL): Lang {
  return url.pathname.startsWith("/es") ? "es" : "en";
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof UIStrings): string {
    return ui[lang][key];
  };
}

export function getAlternatePath(url: URL): string {
  if (url.pathname.startsWith("/es")) {
    return url.pathname.replace(/^\/es/, "") || "/";
  }
  return "/es" + url.pathname;
}
