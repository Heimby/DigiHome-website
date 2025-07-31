/**
 * Step type for HowItWorksSection
 */
export interface HowItWorksStep {
  /**
   * Step number (1-based)
   */
  number: number;
  /**
             {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-start">
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-extrabold mr-2">
                  {step.number}.
                </span>
                <h3 className="text-2xl font-bold">{step.title}</h3>
              </div>
              <div className="mb-4">{step.icon}</div>
              <p className="text-lg text-gray-900 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))} */
  title: string;
  /**
   * Step description
   */
  description: string;
  /**
   * Icon as a React node
   */
  icon: React.ReactNode;
}

import { useTranslation } from "react-i18next";
import Overlay from "./ui/Overlay";

import InformationCard from "./ui/InformationCard";
import LargeBedroomPicture from "~/assets/Kishani Perera_Point Dume Project_Photographer Anthony Barcelo.webp";

/**
 * Section explaining how Digihome works, with four steps.
 * @example
 * <HowItWorksSection />
 */
export function HowItWorksSection() {
  const { t } = useTranslation();
  const steps: HowItWorksStep[] = [
    {
      number: 1,
      title: t("home.howItWorks.delivery"),
      description: t("home.howItWorks.deliveryDescription"),
      icon: (
        <span
          className="inline-block text-2xl"
          aria-label={t("home.howItWorks.delivery")}
        >
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16a2 2 0 100-4 2 2 0 000 4z" />
            <path d="M12 8v2" />
          </svg>
        </span>
      ),
    },
    {
      number: 2,
      title: t("home.howItWorks.preparation"),
      description: t("home.howItWorks.preparationDescription"),
      icon: (
        <span
          className="inline-block text-2xl"
          aria-label={t("home.howItWorks.preparation")}
        >
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </span>
      ),
    },
    {
      number: 3,
      title: t("home.howItWorks.sale"),
      description: t("home.howItWorks.saleDescription"),
      icon: (
        <span
          className="inline-block text-2xl"
          aria-label={t("home.howItWorks.sale")}
        >
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="4" y="7" width="16" height="13" rx="2" />
            <path d="M8 7V5a4 4 0 118 0v2" />
          </svg>
        </span>
      ),
    },
    {
      number: 4,
      title: t("home.howItWorks.payout"),
      description: t("home.howItWorks.payoutDescription"),
      icon: (
        <span
          className="inline-block text-2xl"
          aria-label={t("home.howItWorks.payout")}
        >
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="7" width="20" height="13" rx="2" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M2 11h20" />
          </svg>
        </span>
      ),
    },
  ];

  return (
    <section
      className="w-full px-4 md:px-0 grid gap-8"
      aria-labelledby="how-it-works-title"
    >
      <h2
        id="how-it-works-title"
        className="text-5xl md:text-7xl font-extrabold text-gray-900"
      >
        {t("home.howItWorks.title")}
      </h2>
      <Overlay backgroundImage={LargeBedroomPicture}>
        {steps.map((step) => (
          <InformationCard
            key={step.number}
            color={step.number == 4 ? "primary" : "base-100"}
          >
            <div className="flex items-center gap-2">
              <HowItWorksNumber
                number={step.number}
                color={
                  step.number == 3
                    ? "primary"
                    : step.number == 4
                    ? "accent"
                    : "neutral"
                }
              />
              <h3 className="text-2xl font-bold">{step.title}</h3>
            </div>
            <div className="flex items-start">
              <p className="text-lg text-gray-900 leading-relaxed">
                {step.description}
              </p>
            </div>
          </InformationCard>
        ))}
      </Overlay>
    </section>
  );
}

function HowItWorksNumber({
  number,
  color = "neutral",
}: {
  number: number;
  color?: "neutral" | "primary" | "secondary" | "accent";
}) {
  return (
    <span className={`font-bold text-4xl bg-${color} rounded px-2`}>
      {number}
    </span>
  );
}

export default HowItWorksSection;
