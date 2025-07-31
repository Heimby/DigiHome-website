import { useTranslation } from "react-i18next";
import Navbar from "~/components/Navbar";
import { Footer } from "~/routes/home";
import TeamPhotoPicture from "~/assets/portraits/Teambilde.webp";
import LeadGenerationForm from "~/components/LeadGenerationForm";
import InformationCard from "~/components/ui/InformationCard";

import MathiasHaugsbøBilde from "~/assets/portraits/Mathias-Haugsbø.jpg";
import SarahSleemanBilde from "~/assets/portraits/Sarah-Sleeman.jpg";
import NjålEliassonBilde from "~/assets/portraits/Njal-Eliasson.jpg";
import ErikHoffmannDahlBilde from "~/assets/portraits/Erik-Hoffmann-Dahl.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      fullName: "Mathias Haugsbø",
      role: "Teknisk sjef",
      description:
        "Med lang erfaring fra IT-bransjen og som gründer av Digihome, Mathias er hjernen bak vår teknologiske plattform.",
      image: MathiasHaugsbøBilde,
      phone: "",
      email: "mathias@digihome.no",
    },
    {
      fullName: "Njål Eliasson",
      role: "",
      description:
        "Som gründer av Heimby, tar Njål med seg lang erfaring fra utleie på korttid og langtid.",
      image: NjålEliassonBilde,
      phone: "",
      email: "njal@digihome.no",
    },
    {
      fullName: "Sarah Sleeman",
      role: "",
      description:
        "Sarah tar med seg lang erfaring som eiendomsmegler og har vært med på å utvikle Digihome fra starten.",
      image: SarahSleemanBilde,
      phone: "",
      email: "sarah@digihome.no",
    },
    {
      fullName: "Erik Hoffmann-Dahl",
      role: "Styreleder",
      description:
        "Med lang erfaring som advokat er Erik en viktig støttespiller for Digihome.",
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
                {t("home.aboutDigihome.title")}
              </h1>
              <InformationCard color="base-100">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("home.aboutDigihome.mission")}
                </p>
              </InformationCard>
              <img
                src={TeamPhotoPicture}
                alt="Team Photo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TODO: Team member portraits */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
                  {t("home.aboutDigihome.experience")}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t("home.aboutDigihome.experienceDescription")}
                </p>
              </InformationCard>

              <InformationCard color="base-100">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("home.aboutDigihome.smarterAlternative")}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t("home.aboutDigihome.smarterAlternativeDescription")}
                </p>
              </InformationCard>

              <InformationCard color="base-100">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("home.aboutDigihome.stayMobile")}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t("home.aboutDigihome.stayMobileDescription")}
                </p>
              </InformationCard>
            </div>

            <hr className="my-8" />

            {/* DigiSale Section */}
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t("digisale.partOfDigisale.title")}
              </h2>

              <InformationCard color="primary">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("digisale.partOfDigisale.description")}
                </p>
              </InformationCard>

              <InformationCard color="base-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("digisale.vision.title")}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t("digisale.vision.description")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <span>{t("digisale.vision.features.microteams")}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <span>{t("digisale.vision.features.disruption")}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <span>{t("digisale.vision.features.agile")}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <span>{t("digisale.vision.features.datadriven")}</span>
                  </div>
                </div>
              </InformationCard>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("digisale.products.title")}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InformationCard color="neutral">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {t("digisale.products.digihome.name")}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t("digisale.products.digihome.description")}
                    </p>
                  </InformationCard>

                  <InformationCard color="neutral">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {t("digisale.products.digicar.name")}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t("digisale.products.digicar.description")}
                    </p>
                  </InformationCard>

                  <InformationCard color="neutral">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {t("digisale.products.more.name")}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {t("digisale.products.more.description")}
                    </p>
                  </InformationCard>
                </div>
              </div>
            </div>
            <hr className="my-8" />
            <LeadGenerationForm />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
