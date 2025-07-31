import { useTranslation } from "react-i18next";
import DButton from "./ui/DButton";
import { useScreenSize } from "~/hooks/useScreenSize";

const languages = [
  { code: "en", name: "English" },
  { code: "no", name: "Norsk" },
];

export default function LanguageSelector() {
  const { isMobile } = useScreenSize();
  const { i18n } = useTranslation();

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className="dropdown dropdown-end">
      <DButton tabIndex={0} variant="neutral">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        {!isMobile &&
          (languages.find((lang) => lang.code === i18n.language)?.name || "EN")}
      </DButton>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-white rounded-box z-[1] w-32 p-2 shadow"
      >
        {languages.map((language) => (
          <li key={language.code}>
            <button
              onClick={() => changeLanguage(language.code)}
              className={i18n.language === language.code ? "active" : ""}
            >
              {language.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
