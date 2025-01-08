import { useTranslation } from "react-i18next";

interface TextProps {
  text: string;
}

const Text: React.FC<TextProps> = ({ text }) => {
  const { t } = useTranslation();

  return <h1>{t(text)}</h1>;
};

export default Text;
