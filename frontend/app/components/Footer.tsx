import { useTranslation } from "react-i18next";
import DigihomeLogoFullPurpleBrand from "./DigihomeLogoFullPurpleBrand";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="text-white" style={{ backgroundColor: "#031718" }}>
      <div className="max-w-7xl mx-auto py-8 flex flex-col gap-4">
        <DigihomeLogoFullPurpleBrand fontColor="white" />
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-start gap-2">
            <p>Digihome AS</p>
            <p>Org. nr. 935746930</p>
            <p>Kokstadvegen 46, 5257 Bergen</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p>{t("footer.contactUs")}</p>
            <a href="mailto:post@digihome.no">post@digihome.no</a>
          </div>
        </div>
        <p className="text-gray-400 text-center">
          © 2025 Digihome. Alle rettigheter reservert. Et selskap i DigiSale.
        </p>
      </div>
    </footer>
  );
}
