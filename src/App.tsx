import { useState } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import Text from "./components/Text";
import { HOME_PAGE_T } from "./language/translationKeys/homePage";

function App() {
  const [lang, setLang] = useState("en");
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };

  return (
    <>
      <div>
        <Text text={HOME_PAGE_T.TITLE} />
        <Text text={HOME_PAGE_T.SUB_TITLE} />
        <Text text={HOME_PAGE_T.COMPANY} />
        <Text text={HOME_PAGE_T.ADDRESS} />
      </div>
      <button onClick={() => handleLanguageChange("en")}>Select En</button>
      <button onClick={() => handleLanguageChange("es")}>Select Es</button>
      <p>{lang}</p>
    </>
  );
}

export default App;
