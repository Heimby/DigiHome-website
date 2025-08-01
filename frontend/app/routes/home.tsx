import Navbar from "~/components/Navbar";
import { LeadGenerationForm } from "~/components/LeadGenerationForm";
import { HowItWorksSection } from "~/components/HowItWorksSection";
import { Trans, useTranslation } from "react-i18next";
import ActionButton from "~/components/ui/ActionButton";
import Overlay from "~/components/ui/Overlay";
import { useRef } from "react";
import InformationCard from "~/components/ui/InformationCard";
import HeroPicture from "~/assets/vendome-living-smoked-dark-wood-timber-oak-wall-panelling-veneer-bambo-luxury-decorative-panels.webp";
import Knøsesmauet21Picture from "~/assets/Knøsesmauet-21.jpg";
import Footer from "~/components/Footer";
import Carousel from "~/components/ui/Carousel";
import HybelLogo from "~/assets/partners/hybel-logo.png";
import GuestyLogo from "~/assets/partners/Guesty.svg";
import AirbnbLogo from "~/assets/partners/airbnb-2-logo.svg";
import BookingComLogo from "~/assets/partners/bookingcom-logo.svg";

export default function Home() {
  const leadFormRef = useRef<HTMLDivElement>(null);

  const scrollToLeadForm = () => {
    leadFormRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Navbar isTransparent />
      <HeroSection scrollToLeadForm={scrollToLeadForm} />
      <div
        className="min-h-screen mx-auto"
        style={{ width: "100%", maxWidth: "1600px" }}
      >
        <div className="grid gap-16 md:m-16">
          <span ref={leadFormRef}>
            <LeadGenerationForm />
          </span>
          <WhyRentThroughDigiHomeSection scrollToLeadForm={scrollToLeadForm} />
          <HowItWorksSection />

          <WhyNotRentPrivately />
          <FinalCallToActionSection scrollToLeadForm={scrollToLeadForm} />
          <div>
            <Carousel
              maxWidth="200"
              items={[
                {
                  image: HybelLogo,
                  altText: "Hybel.no",
                },
                {
                  altText: "Guesty",
                  image: GuestyLogo,
                },
                {
                  altText: "Airbnb",
                  image: AirbnbLogo,
                },
                {
                  altText: "Booking.com",
                  image: BookingComLogo,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export function HeroSection({
  scrollToLeadForm,
}: {
  scrollToLeadForm: () => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="h-[80vh] relative flex items-center justify-start bg-cover bg-center">
      {/* Background */}
      {/* White Text overlay center left align */}

      <img
        src={HeroPicture}
        alt="Large comfortable living room with wooden panels"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 p-8 lg:p-32">
        <h1
          className="lg:text-8xl md:text-6xl sm:text-5xl text-3xl font-bold text-white mt-6 mb-4"
          style={{
            textShadow: "6px 6px 24px black",
          }}
        >
          <Trans t={t} i18nKey="home.heroTitle" />
        </h1>
        <p
          className="md:text-2xl text-lg text-white"
          style={{
            textShadow: "2px 0px 24px black, -2px 0px 24px black",
          }}
        >
          <Trans t={t} i18nKey="home.heroSubtitle" />
        </p>
        <br />
        <br />
        <ActionButton onClick={scrollToLeadForm} height="55px">
          {t("home.heroButton")}
        </ActionButton>
      </div>
    </div>
  );
}

export const WhyRentThroughDigiHomeSection = ({
  scrollToLeadForm,
}: {
  scrollToLeadForm: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <Overlay
      backgroundImage={Knøsesmauet21Picture}
      backgroundAlt="Bergen street"
    >
      <div></div>
      <InformationCard color="neutral">
        <div></div>
        <div className="col-span-1 md:col-span-2 text-left mb-12 flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("home.whyRentThroughDigiHome.title")}
          </h2>
          <div>
            <h3 className="text-2xl font-bold">
              {t("home.whyRentThroughDigiHome.smartRenting")}
            </h3>
            <p className="text-lg  max-w-3xl mx-auto">
              {t("home.whyRentThroughDigiHome.smartRentingDescription")}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              {t("home.whyRentThroughDigiHome.neverWithoutProperty")}
            </h3>
            <p>
              {t("home.whyRentThroughDigiHome.neverWithoutPropertyDescription")}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              {t("home.whyRentThroughDigiHome.weHandleEverything")}
            </h3>
            <p>
              {t("home.whyRentThroughDigiHome.weHandleEverythingDescription")}
            </p>
          </div>
          <ActionButton onClick={scrollToLeadForm}>
            {t("home.heroButton")}
          </ActionButton>
        </div>
      </InformationCard>
    </Overlay>
  );
};

export const WhyNotRentPrivately = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("home.whyNotPrivateOrTrade.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InformationCard color="base-100">
            <h3 className="text-2xl font-bold mb-4">
              {t("home.whyNotPrivateOrTrade.statistic")}
            </h3>
            <p className="text-lg">
              {t("home.whyNotPrivateOrTrade.statisticDescription")}
            </p>
          </InformationCard>

          <InformationCard color="base-100">
            <h3 className="text-2xl font-bold mb-4">
              {t("home.whyNotPrivateOrTrade.competitiveCommission")}
            </h3>
            <p className="text-lg">
              {t("home.whyNotPrivateOrTrade.competitiveCommissionDescription")}
            </p>
          </InformationCard>

          <InformationCard color="base-100">
            <h3 className="text-2xl font-bold mb-4">
              {t("home.experienceAndInsight.weKnowMarket")}
            </h3>
            <p className="text-lg">
              {t("home.experienceAndInsight.weKnowMarketDescription")}
            </p>
          </InformationCard>
        </div>
      </div>
    </section>
  );
};

export const FinalCallToActionSection = ({
  scrollToLeadForm,
}: {
  scrollToLeadForm: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t("home.finalCta.title")}
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          {t("home.finalCta.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ActionButton onClick={() => (window.location.href = "/about")}>
            {t("home.finalCta.contactUs")}
          </ActionButton>
        </div>
      </div>
    </section>
  );
};
