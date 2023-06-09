import LocalizedStrings from "react-localization";
import localization from "./LanguageData";
import { useLanguageContext } from "./languageContext";

export default function useTranslation() {
  const { language } = useLanguageContext();
  let translation = new LocalizedStrings(localization);

  translation.setLanguage(language);
  return translation;
}
