// @ts-nocheck
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

interface InitialProps {
  language: string;
  changeLanguage: Function;
}

const LanguageContext = React.createContext({} as InitialProps);
export const useLanguageContext = () => useContext(LanguageContext);

type languagaProps = React.PropsWithChildren<{}>;

export default function LanguageContextProvider({ children}: languagaProps) { 
  const lang = useSelector((state:any) => state?.login?.languageData?.lang);
  const [language, changeLanguage] = useState(lang ?lang : 'en');
  localStorage.setItem("language", JSON.stringify(language));
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
