import { useTranslation } from "react-i18next";
import InformationCard from "./ui/InformationCard";

export default function DigiSaleSection() {
  const { t } = useTranslation();

  return (
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
              {t("digisale.products.DigiHome.name")}
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {t("digisale.products.DigiHome.description")}
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
  );
}
