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
import type { DComponentBaseProps } from "./ui/DComponentStandardProps";

export function LeadGenerationForm({
  title = "",
  className = "",
  showNote = false,
  alwaysExpanded = false,
  textSize = "xl",
}: {
  title?: string;
  className?: string;
  showNote?: boolean;
  alwaysExpanded?: boolean;
  textSize?: DComponentBaseProps["sizes"];
}) {
  const { t } = useTranslation();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [leadProperties, setLeadProperties] = useState<LeadCreateRequest>({
    address: null,
    name: null,
    email: null,
    phone: null,
    note: null,
  });
  const [formFeedback, setFormFeedback] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (leadProperties.name && leadProperties.phone && leadProperties.email) {
      try {
        setIsFormLoading(true);

        const res = await fetch(
          "https://n8n.digihome.no/webhook/digihome-lead",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(leadProperties),
          }
        );

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Unknown error");
        }

        const formFeedback = t("leadForm.successMessage", {
          name: leadProperties.name,
        });
        setFormFeedback(formFeedback);
        toast.success(formFeedback);
      } catch (error: any) {
        toast.error(t("leadForm.submitError", { error: error.message }), {
          duration: 10_000,
        });
        setFormFeedback(t("leadForm.submitError", { error: error.message }));
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
          {title ?? t("leadForm.title")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full self-end">
          <DInput
            label={t("leadForm.address")}
            labelIcon={<FontAwesomeIcon icon={faTag} />}
            value={leadProperties.address || ""}
            onChange={(e) => {
              setLeadProperties({
                ...leadProperties,
                address: e.target.value,
              });
              if (e.target.value.length > 2) setIsExpanded(true);
            }}
            placeholder="Kongeveien 1"
            isWide
            required
            variant="cure"
            textSize={textSize}
            sizes="xl"
          />
          {(isExpanded || alwaysExpanded) && (
            <>
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
                type="tel"
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
                textSize={textSize}
                sizes="xl"
              />
              <DInput
                type="email"
                name="email"
                label={t("leadForm.email")}
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
                textSize={textSize}
                sizes="xl"
              />
              {showNote && (
                <span className="col-span-1 md:col-span-2">
                  <DInput
                    label={t("leadForm.note")}
                    type="textarea"
                    placeholder={t("leadForm.notePlaceholder")}
                    labelIcon={<FontAwesomeIcon icon={faTag} />}
                    value={leadProperties.note || ""}
                    onChange={(e) =>
                      setLeadProperties({
                        ...leadProperties,
                        note: e.target.value,
                      })
                    }
                    isWide
                    variant="cure"
                    textSize={textSize}
                    sizes="xl"
                  />
                </span>
              )}
            </>
          )}
          <ActionButton
            type="submit"
            disabled={isFormLoading}
            arrowColor="black"
            additionalClasses="self-end"
            height="84px"
          >
            {t("leadForm.getStarted")}
          </ActionButton>
        </div>
        {formFeedback && (
          <div className="mt-4 text-4xl">
            <p>{formFeedback}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default LeadGenerationForm;
