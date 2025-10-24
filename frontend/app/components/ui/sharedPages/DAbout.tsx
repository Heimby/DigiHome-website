import { Trans, useTranslation } from "react-i18next";
import DigiSaleSection from "~/components/DigiSaleSection";
import InformationCard from "../InformationCard";
import DTeamMemberCard, { type TeamMember } from "../DTeamMemberCard";

export default function DAbout({
  teamMembers,
  TeamPhotoPicture,
  leadGenerationForm,
}: {
  teamMembers: TeamMember[];
  TeamPhotoPicture: string;
  leadGenerationForm: React.ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <main className="py-4 max-w-6xl mx-auto px-4 sm:px-2 flex flex-col gap-8 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-48">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            <Trans t={t} i18nKey="home.aboutProduct.title" />
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("home.aboutProduct.mission")}
          </p>
        </div>
        <img
          src={TeamPhotoPicture}
          alt="Team Photo"
          className="w-full aspect-[3/4] object-cover rounded-xl"
        />
      </div>

      <h2 className="text-[55px]">Møt teamet</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <DTeamMemberCard key={member.fullName} member={member} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InformationCard color="base-100">
          <h2 className="text-2xl font-bold text-gray-900">
            {t("home.aboutProduct.experience")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("home.aboutProduct.experienceDescription")}
          </p>
        </InformationCard>

        <InformationCard color="base-100">
          <h2 className="text-2xl font-bold text-gray-900">
            {t("home.aboutProduct.smarterAlternative")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("home.aboutProduct.smarterAlternativeDescription")}
          </p>
        </InformationCard>

        <InformationCard color="base-100">
          <h2 className="text-2xl font-bold text-gray-900">
            {t("home.aboutProduct.stayMobile")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("home.aboutProduct.stayMobileDescription")}
          </p>
        </InformationCard>
      </div>

      <hr className="my-8" />

      <DigiSaleSection />
      <hr className="my-8" />
      {leadGenerationForm}
    </main>
  );
}
