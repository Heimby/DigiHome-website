import { useTranslation } from "react-i18next";
import Navbar from "~/components/Navbar";
import LeadGenerationForm from "~/components/LeadGenerationForm";
import InformationCard from "~/components/ui/InformationCard";

import MathiasHaugsbøBilde from "~/assets/portraits/Mathias-Haugsbø.jpg";
import SarahSleemanBilde from "~/assets/portraits/Sarah-Sleeman.jpg";
import NjålEliassonBilde from "~/assets/portraits/Njal-Eliasson.jpg";
import ErikHoffmannDahlBilde from "~/assets/portraits/Erik-Hoffmann-Dahl.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import DigiSaleSection from "~/components/DigiSaleSection";
import Footer from "~/components/Footer";

export default function About() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      fullName: "Sarah Sleeman",
      role: "Daglig leder",
      description:
        "Sarah har solid bakgrunn fra både eiendom og bank, og lang erfaring som eiendomsmegler. Hun kombinerer operativ innsikt med kommersiell teft og jobber for å gjøre eiendomsforvaltning enklere, smartere og mer lønnsom.",
      image: SarahSleemanBilde,
      phone: "",
      email: "sarah@digihome.no",
    },
    {
      fullName: "Njål Eliasson",
      role: "Analytiker & forretningsutvikler",
      description:
        "Njål er siviløkonom fra NHH og grunnla Heimby - forgjengeren til DigiHome i 2022. Han har en bred erfaring innenfor tech startups, finans, logistikk og AI. Sammen med resten av teamet bygger Njål løsninger som gjør det mer lønnsomt for utleiere, men samtidig billigere for studentene. Hvordan? Gjennom å kombinere korttidsutleie på sommermånedene med utleie til studenter i semesteret.",
      image: NjålEliassonBilde,
      phone: "",
      email: "njal@digihome.no",
    },

    {
      fullName: "Mathias Haugsbø",
      role: "Teknisk sjef",
      description:
        "Med utdanning i økonomi og IT, er Mathias en kommersiell utvikler og bygger system som gjør utleien helt autonom for deg. Mathias har vært med på å bygge opp startups og scale-ups helt fra bunn. Som gründer av DigiHome er han hjernen bak vår teknologiske plattform.",
      image: MathiasHaugsbøBilde,
      phone: "",
      email: "mathias@digihome.no",
    },
    {
      fullName: "Erik Hoffmann-Dahl",
      role: "Styreleder",
      description:
        "Erik er styreleder og har lang erfaring som advokat, og er en viktig støttespiller for DigiHome.",
      image: ErikHoffmannDahlBilde,
      phone: "",
      email: "",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar isTransparent={false} />
        <main className="py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-2 flex flex-col gap-8 mb-16">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {t("home.aboutDigiHome.title")}
              </h1>
              <InformationCard color="base-100">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("home.aboutDigiHome.mission")}
                </p>
              </InformationCard>
            </div>

            {/* TODO: Team member portraits */}

            <div className="grid grid-cols-2 gap-2">
              {teamMembers.map((member) => (
                <InformationCard color="base-100">
                  <img
                    src={member.image}
                    alt={member.fullName}
                    className="w-full aspect-[3/4] object-cover rounded-t-lg"
                  />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {member.fullName}
                  </h2>
                  <p>{member.role}</p>
                  <ul>
                    {member.phone && (
                      <li className="text-gray-600">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        <a
                          href={`tel:${member.phone}`}
                          className="text-blue-600 hover:underline"
                        >
                          {member.phone}
                        </a>
                      </li>
                    )}
                    {member.email && (
                      <li className="text-gray-600">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {member.email}
                        </a>
                      </li>
                    )}
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    {member.description}
                  </p>
                </InformationCard>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InformationCard color="base-100">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("home.aboutDigiHome.experience")}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t("home.aboutDigiHome.experienceDescription")}
                </p>
              </InformationCard>

              <InformationCard color="base-100">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("home.aboutDigiHome.smarterAlternative")}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t("home.aboutDigiHome.smarterAlternativeDescription")}
                </p>
              </InformationCard>

              <InformationCard color="base-100">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("home.aboutDigiHome.stayMobile")}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t("home.aboutDigiHome.stayMobileDescription")}
                </p>
              </InformationCard>
            </div>

            <hr className="my-8" />

            <DigiSaleSection />
            <hr className="my-8" />
            <LeadGenerationForm
              showNote={true}
              alwaysExpanded={true}
              textSize="xl"
            />
          </div>
        </main>
        <Footer width="max-w-4xl" px="px-4" />
      </div>
    </>
  );
}
