import { useTranslation } from "react-i18next";
import DigiHomeLogoFullPurpleBrand from "./DigiHomeLogoFullPurpleBrand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const config = {
    orgNr: "935 74 6930",
    address: "Kokstadvegen 46, 5257 Bergen",
    email: "post@DigiHome.no",
    companyName: "DigiHome AS",
    links: [
      { icon: faLinkedin, url: "https://www.linkedin.com/company/DigiHome-as" },
      { icon: faInstagram, url: "https://www.instagram.com/DigiHome.no/" },
      {
        icon: faFacebook,
        url: "https://www.facebook.com/profile.php?id=61578844503645",
      },
    ],
  };
  const { t } = useTranslation();
  return (
    <footer className="text-white" style={{ backgroundColor: "#031718" }}>
      <div className="max-w-4xl mx-auto py-8 flex flex-col gap-4 align-middle justify-center">
        <DigiHomeLogoFullPurpleBrand fontColor="white" />
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-start gap-2">
            <p>{config.companyName}</p>
            <p>Org.nr. {config.orgNr}</p>
            <p>{config.address}</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p>{t("footer.contactUs")}</p>
            <a href={`mailto:${config.email}`}>{config.email}</a>
            <div className="flex gap-2">
              {config.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  className="text-white text-2xl"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-center">
          © 2025 {config.companyName}. Alle rettigheter reservert. Et selskap i
          DigiSalegruppen.
        </p>
      </div>
    </footer>
  );
}
