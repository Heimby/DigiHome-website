import { useState, useEffect } from "react";
import type {
  FormTemplate,
  FormTemplateSection,
  FormTemplateItem,
} from "~/api-gen/types.gen";
import { getApiFormTemplatesById } from "~/api-gen/sdk.gen";
import toast from "react-hot-toast";

interface FormTemplatePreviewProps {
  templateId: string;
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  [key: string]: string | boolean | string[];
}

export default function FormTemplatePreview({
  templateId,
  isOpen,
  onClose,
}: FormTemplatePreviewProps) {
  const [template, setTemplate] = useState<FormTemplate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({});

  useEffect(() => {
    if (isOpen && templateId) {
      fetchTemplate();
    }
  }, [isOpen, templateId]);

  async function fetchTemplate() {
    try {
      setIsLoading(true);
      const response = await getApiFormTemplatesById({
        path: { id: templateId },
      });

      if (response.error) {
        throw new Error(JSON.stringify(response.error));
      }

      if (response.data) {
        setTemplate(response.data);
        // Initialize form data with default values
        initializeFormData(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch template:", error);
      toast.error("Failed to load template preview");
    } finally {
      setIsLoading(false);
    }
  }

  function initializeFormData(template: FormTemplate) {
    const initialData: FormData = {};

    template.formTemplateSections?.forEach((section) => {
      section.formTemplateItems?.forEach((item) => {
        const fieldKey = `${section.id}_${item.id}`;

        switch (item.type) {
          case "checkbox":
            initialData[fieldKey] = false;
            break;
          case "select":
            // Set default option if specified
            const defaultOption = item.options?.find((opt) => opt.isDefault);
            initialData[fieldKey] = defaultOption?.value || "";
            break;
          default:
            initialData[fieldKey] = "";
        }
      });
    });

    setFormData(initialData);
  }

  function handleInputChange(
    fieldKey: string,
    value: string | boolean | string[]
  ) {
    setFormData((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  }

  function renderFormItem(
    section: FormTemplateSection,
    item: FormTemplateItem
  ) {
    const fieldKey = `${section.id}_${item.id}`;
    const fieldValue = formData[fieldKey];

    switch (item.type) {
      case "textarea":
        return (
          <textarea
            className="textarea textarea-bordered w-full"
            value={(fieldValue as string) || ""}
            onChange={(e) => handleInputChange(fieldKey, e.target.value)}
            placeholder={item.description || `Enter ${item.name.toLowerCase()}`}
            required={item.isRequired}
            rows={3}
          />
        );

      case "select":
        return (
          <select
            className="select select-bordered w-full"
            value={(fieldValue as string) || ""}
            onChange={(e) => handleInputChange(fieldKey, e.target.value)}
            required={item.isRequired}
          >
            <option value="">Select an option</option>
            {item.options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case "checkbox":
        return (
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="checkbox"
              checked={(fieldValue as boolean) || false}
              onChange={(e) => handleInputChange(fieldKey, e.target.checked)}
            />
            <span>{item.description || "Check this option"}</span>
          </label>
        );

      case "file":
        return (
          <input
            type="file"
            className="file-input file-input-bordered w-full"
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              handleInputChange(
                fieldKey,
                files.map((f) => f.name)
              );
            }}
            required={item.isRequired}
          />
        );

      case "text":
      case "email":
      case "tel":
      case "number":
      case "date":
        return (
          <input
            type={item.type}
            className="input input-bordered w-full"
            value={(fieldValue as string) || ""}
            onChange={(e) => handleInputChange(fieldKey, e.target.value)}
            placeholder={item.description || `Enter ${item.name.toLowerCase()}`}
            required={item.isRequired}
          />
        );
      default:
        return (
          <div className="text-gray-500 italic">
            Unsupported field type: {item.type}
          </div>
        );
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validate required fields
    const missingFields: string[] = [];
    template?.formTemplateSections?.forEach((section) => {
      section.formTemplateItems?.forEach((item) => {
        if (item.isRequired) {
          const fieldKey = `${section.id}_${item.id}`;
          const value = formData[fieldKey];

          if (!value || (typeof value === "string" && value.trim() === "")) {
            missingFields.push(item.name);
          }
        }
      });
    });

    if (missingFields.length > 0) {
      toast.error(
        `Please fill in required fields: ${missingFields.join(", ")}`
      );
      return;
    }

    toast.success("Form validation passed! (This is just a preview)");
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-xl font-bold">Form Preview</h2>
            {template && (
              <p className="text-gray-600">
                {template.name} v{template.version}
              </p>
            )}
          </div>
          <button className="btn btn-sm btn-circle btn-ghost" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <div className="loading loading-spinner loading-lg"></div>
            </div>
          ) : template ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Template Description */}
              {template.description && (
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-blue-800">{template.description}</p>
                </div>
              )}

              {/* Form Sections */}
              {template.formTemplateSections?.map((section) => (
                <div key={section.id} className="space-y-4">
                  <div className="border-b pb-2">
                    <h3 className="text-lg font-semibold">{section.name}</h3>
                    {section.description && (
                      <p className="text-gray-600 text-sm mt-1">
                        {section.description}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.formTemplateItems
                      ?.sort((a, b) => (a.order || 0) - (b.order || 0))
                      .map((item) => (
                        <div
                          key={item.id}
                          className={
                            item.type === "textarea" ? "md:col-span-2" : ""
                          }
                        >
                          <label className="block text-sm font-medium mb-2">
                            {item.name}
                            {item.isRequired && (
                              <span className="text-red-500 ml-1">*</span>
                            )}
                          </label>
                          {renderFormItem(section, item)}
                          {item.description && item.type !== "checkbox" && (
                            <p className="text-xs text-gray-500 mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ))}

              {/* No sections message */}
              {(!template.formTemplateSections ||
                template.formTemplateSections.length === 0) && (
                <div className="text-center py-8 text-gray-500">
                  This template has no sections or fields defined yet.
                </div>
              )}

              {/* Submit Button */}
              {template.formTemplateSections &&
                template.formTemplateSections.length > 0 && (
                  <div className="flex justify-end pt-4 border-t">
                    <button type="submit" className="btn btn-primary">
                      Validate Form (Preview Only)
                    </button>
                  </div>
                )}
            </form>
          ) : (
            <div className="text-center py-8 text-red-500">
              Failed to load template
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
