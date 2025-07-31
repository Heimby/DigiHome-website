import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { type LeadCreateRequest } from "~/api-gen";
import DInput from "./ui/DInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ActionButton from "./ui/ActionButton";

export function LeadGenerationForm({ className = "" }) {
  const { t } = useTranslation();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [leadProperties, setLeadProperties] = useState<LeadCreateRequest>({
    address: null,
    name: null,
    email: null,
    phone: null,
  });
  const [formFeedback, setFormFeedback] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (leadProperties.name && leadProperties.phone && leadProperties.email) {
      try {
        setIsFormLoading(true);
        const formFeedback = t("leadForm.successMessage", {
          name: leadProperties.name,
        });
        setFormFeedback(formFeedback);
        toast.success(formFeedback);
      } catch (error: any) {
        toast.error(t("leadForm.submitError", { error: error.message }));
      } finally {
        setIsFormLoading(false);
      }
    } else {
      toast.error(t("leadForm.fillAllFields"));
    }
  }
  return (
    <div className="bg-primary">
      <form onSubmit={handleSubmit} className="p-6 min-h-[400px] grid">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          {t("leadForm.title")}
        </h1>

        {/* Compact form with side-by-side inputs */}
        <div className="grid grid-cols-2 grid-rows-auto gap-4 w-full self-end">
          <DInput
            label={t("leadForm.address")}
            labelIcon={<FontAwesomeIcon icon={faTag} />}
            value={leadProperties.address || ""}
            onChange={(e) =>
              setLeadProperties({
                ...leadProperties,
                address: e.target.value,
              })
            }
            placeholder="Kongeveien 1"
            isWide
            required
            variant="cure"
            textSize="xl"
            sizes="xl"
          />
          <DInput
            label={t("leadForm.name")}
            labelIcon={<FontAwesomeIcon icon={faUser} />}
            placeholder={t("leadForm.namePlaceholder")}
            value={leadProperties.name || ""}
            onChange={(e) =>
              setLeadProperties({
                ...leadProperties,
                name: e.target.value,
              })
            }
            required
            isWide
            variant="cure"
            sizes="xl"
          />
          <DInput
            label={t("leadForm.phone")}
            placeholder={t("leadForm.phonePlaceholder")}
            labelIcon={<FontAwesomeIcon icon={faPhone} />}
            value={leadProperties.phone || ""}
            onChange={(e) =>
              setLeadProperties({
                ...leadProperties,
                phone: e.target.value.includes("+")
                  ? e.target.value
                  : `+47 ${e.target.value}`,
              })
            }
            required
            isWide
            variant="cure"
            textSize="xl"
            sizes="xl"
          />
          <DInput
            type="email"
            label={t("auth.email")}
            placeholder={t("leadForm.emailPlaceholder")}
            labelIcon={<FontAwesomeIcon icon={faEnvelope} />}
            value={leadProperties.email || ""}
            onChange={(e) =>
              setLeadProperties({
                ...leadProperties,
                email: e.target.value,
              })
            }
            required
            isWide
            variant="cure"
            textSize="xl"
            sizes="xl"
          />
          <ActionButton
            onClick={handleSubmit}
            type="submit"
            disabled={isFormLoading}
            arrowColor="black"
            additionalClasses="self-end"
            height="84px"
          >
            {t("leadForm.getStarted")}
          </ActionButton>
          {formFeedback && (
            <div className="mt-4 text-4xl">
              <p>{formFeedback}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default LeadGenerationForm;
