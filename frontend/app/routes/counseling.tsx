import Navbar from "~/components/Navbar";
import { LeadGenerationForm } from "~/components/LeadGenerationForm";
import Footer from "~/components/Footer";
import InformationCard from "~/components/ui/InformationCard";
import { useRef } from "react";
import ActionButton from "~/components/ui/ActionButton";
import SarahSleemanBilde from "~/assets/portraits/Sarah-Sleeman.jpg";
import { useTranslation } from "react-i18next";

export default function Counseling() {
  const leadFormRef = useRef<HTMLDivElement>(null);

  const scrollToLeadForm = () => {
    leadFormRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar isTransparent={false} />
        <main className="min-h-screen mx-auto w-full max-w-[1600px]">
          <div className="grid gap-16 md:m-16">
            <CounselingHeroSection scrollToLeadForm={scrollToLeadForm} />
            <CounselingContentSection scrollToLeadForm={scrollToLeadForm} />
            <span ref={leadFormRef}>
              <LeadGenerationForm alwaysExpanded={true} showNote={true} />
            </span>
          </div>
        </main>
        <Footer width="max-w-4xl" px="px-4" />
      </div>
    </>
  );
}

function CounselingHeroSection({
  scrollToLeadForm,
}: {
  scrollToLeadForm: () => void;
}) {
  const { t } = useTranslation();

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t("counseling.title")}
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          {t("counseling.heroSubtitle")}
        </p>
      </div>
    </section>
  );
}

function CounselingContentSection({
  scrollToLeadForm,
}: {
  scrollToLeadForm: () => void;
}) {
  const { t } = useTranslation();

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <InformationCard color="base-100">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                {t("counseling.processTitle")}
              </h2>
              <p className="text-lg leading-relaxed">
                {t("counseling.processDescription")}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">
                {t("counseling.preparationTitle")}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t("counseling.preparationDescription")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                <li>{t("counseling.question1")}</li>
                <li>{t("counseling.question2")}</li>
                <li>{t("counseling.question3")}</li>
              </ul>
            </div>

            <div>
              <p className="text-lg leading-relaxed">
                {t("counseling.inspectionDescription")}
              </p>
            </div>

            <div className="pt-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={SarahSleemanBilde}
                  alt="Sarah Sleeman"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold">
                    {t("counseling.contactSarah")}
                  </p>
                  <a
                    href="mailto:sarah@digihome.no"
                    className="text-blue-600 hover:underline"
                  >
                    sarah@digihome.no
                  </a>
                  <p className="text-gray-600">+47 412 79 878</p>
                </div>
              </div>
              <ActionButton onClick={scrollToLeadForm}>
                {t("counseling.contactUs")}
              </ActionButton>
            </div>
          </div>
        </InformationCard>
      </div>
    </section>
  );
}
