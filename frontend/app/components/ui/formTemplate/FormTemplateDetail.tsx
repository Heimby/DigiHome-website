import { useState } from "react";
import type {
  FormTemplate,
  FormTemplateSection,
  FormTemplateItem,
  FormTemplateItemSelectOption,
  FormTemplateWriteModel,
  FormTemplateSectionWriteModel,
  FormTemplateItemWriteModel,
} from "~/api-gen/types.gen";
import { putApiFormTemplatesById } from "~/api-gen/sdk.gen";
import toast from "react-hot-toast";
import FormTemplatePreview from "~/components/ui/formTemplate/FormTemplatePreview";
import Card from "../Card";
import DInput from "../DInput";
import DButton from "../DButton";

interface FormTemplateDetailProps {
  template: FormTemplate;
  onSave: (updatedTemplate: FormTemplate) => void;
  onCancel: () => void;
}

const FORM_ITEM_TYPES = [
  { value: "text", label: "Text Input" },
  { value: "number", label: "Number Input" },
  { value: "date", label: "Date Input" },
  { value: "select", label: "Select Dropdown" },
  { value: "checkbox", label: "Checkbox" },
  { value: "file", label: "File Upload" },
  { value: "textarea", label: "Text Area" },
  { value: "email", label: "Email Input" },
  { value: "tel", label: "Phone Input" },
];

export default function FormTemplateDetail({
  template,
  onSave,
  onCancel,
}: FormTemplateDetailProps) {
  const [editedTemplate, setEditedTemplate] = useState<FormTemplate>({
    ...template,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  async function handleSave() {
    try {
      setIsSaving(true);

      // Clean up the template before saving - only send necessary data
      const cleanedTemplate: FormTemplateWriteModel = {
        name: editedTemplate.name,
        version: editedTemplate.version,
        description: editedTemplate.description,
        isActive: editedTemplate.isActive,
        formTemplateSections: editedTemplate.formTemplateSections?.map(
          (section): FormTemplateSectionWriteModel => ({
            id: section.id || null, // Keep existing ID or null for new sections
            name: section.name,
            description: section.description,
            formTemplateItems: section.formTemplateItems?.map(
              (item): FormTemplateItemWriteModel => ({
                id: item.id || null, // Keep existing ID or null for new items
                name: item.name,
                description: item.description,
                type: item.type,
                options: item.options,
                isRequired: item.isRequired,
                order: item.order || 0,
              })
            ),
          })
        ),
      };

      const response = await putApiFormTemplatesById({
        path: { id: editedTemplate.id! },
        body: cleanedTemplate,
      });

      if (response.error) {
        throw new Error(JSON.stringify(response.error));
      }

      if (response.data) {
        // Update the local state with the saved template data
        setEditedTemplate(response.data);
        setSaveSuccess(true);
        onSave(response.data);

        // Hide success message after 3 seconds
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Failed to save template:", error);
      toast.error("Failed to save template. Please try again.");
    } finally {
      setIsSaving(false);
    }
  }

  function addSection() {
    const newSection: FormTemplateSection = {
      name: "New Section",
      description: "",
      formTemplateItems: [],
      formTemplateId: editedTemplate.id!,
    };

    setEditedTemplate({
      ...editedTemplate,
      formTemplateSections: [
        ...(editedTemplate.formTemplateSections || []),
        newSection,
      ],
    });
  }

  function removeSection(sectionIndex: number) {
    const sections = editedTemplate.formTemplateSections || [];
    const updatedSections = sections.filter(
      (_, index) => index !== sectionIndex
    );
    setEditedTemplate({
      ...editedTemplate,
      formTemplateSections: updatedSections,
    });
  }

  function cloneSection(sectionIndex: number) {
    const sections = editedTemplate.formTemplateSections || [];
    const sectionToClone = sections[sectionIndex];

    if (sectionToClone) {
      const clonedSection: FormTemplateSection = {
        ...sectionToClone,
        id: undefined, // Remove ID so it gets a new one when saved
        name: `${sectionToClone.name} (Copy)`,
        formTemplateItems:
          sectionToClone.formTemplateItems?.map((item) => ({
            ...item,
            id: undefined, // Remove ID so it gets a new one when saved
            formTemplateSectionId: "", // This will be handled by the backend
          })) || [],
      };

      const updatedSections = [
        ...sections.slice(0, sectionIndex + 1),
        clonedSection,
        ...sections.slice(sectionIndex + 1),
      ];

      setEditedTemplate({
        ...editedTemplate,
        formTemplateSections: updatedSections,
      });
    }
  }

  function updateSection(
    sectionIndex: number,
    updates: Partial<FormTemplateSection>
  ) {
    const sections = editedTemplate.formTemplateSections || [];
    const updatedSections = sections.map((section, index) =>
      index === sectionIndex ? { ...section, ...updates } : section
    );
    setEditedTemplate({
      ...editedTemplate,
      formTemplateSections: updatedSections,
    });
  }

  function addFormItem(sectionIndex: number) {
    const sections = editedTemplate.formTemplateSections || [];
    const section = sections[sectionIndex];
    const existingItems = section?.formTemplateItems || [];
    const nextOrder =
      existingItems.length > 0
        ? Math.max(...existingItems.map((item) => item.order || 0)) + 1
        : 0;

    const newItem: FormTemplateItem = {
      name: "New Field",
      description: "",
      type: "text",
      isRequired: false,
      options: null,
      order: nextOrder,
      formTemplateSectionId: "", // This will be handled by the backend
    };

    const updatedSections = sections.map((sectionItem, index) => {
      if (index === sectionIndex) {
        return {
          ...sectionItem,
          formTemplateItems: [
            ...(sectionItem.formTemplateItems || []),
            newItem,
          ],
        };
      }
      return sectionItem;
    });

    setEditedTemplate({
      ...editedTemplate,
      formTemplateSections: updatedSections,
    });
  }

  function removeFormItem(sectionIndex: number, itemIndex: number) {
    const sections = editedTemplate.formTemplateSections || [];
    const updatedSections = sections.map((section, index) => {
      if (index === sectionIndex) {
        const items = section.formTemplateItems || [];
        return {
          ...section,
          formTemplateItems: items.filter((_, i) => i !== itemIndex),
        };
      }
      return section;
    });

    setEditedTemplate({
      ...editedTemplate,
      formTemplateSections: updatedSections,
    });
  }

  function cloneFormItem(sectionIndex: number, itemIndex: number) {
    const sections = editedTemplate.formTemplateSections || [];
    const section = sections[sectionIndex];
    const items = section?.formTemplateItems || [];
    const itemToClone = items[itemIndex];

    if (itemToClone) {
      const allItems = items || [];
      const nextOrder =
        allItems.length > 0
          ? Math.max(...allItems.map((item) => item.order || 0)) + 1
          : 0;

      const clonedItem: FormTemplateItem = {
        ...itemToClone,
        id: undefined, // Remove ID so it gets a new one when saved
        name: `${itemToClone.name} (Copy)`,
        order: nextOrder,
        formTemplateSectionId: "", // This will be handled by the backend
        options: itemToClone.options
          ? itemToClone.options.map((option) => ({ ...option }))
          : null,
      };

      const updatedSections = sections.map((section, index) => {
        if (index === sectionIndex) {
          const updatedItems = [
            ...items.slice(0, itemIndex + 1),
            clonedItem,
            ...items.slice(itemIndex + 1),
          ];
          return {
            ...section,
            formTemplateItems: updatedItems,
          };
        }
        return section;
      });

      setEditedTemplate({
        ...editedTemplate,
        formTemplateSections: updatedSections,
      });
    }
  }

  function updateFormItem(
    sectionIndex: number,
    itemIndex: number,
    updates: Partial<FormTemplateItem>
  ) {
    const sections = editedTemplate.formTemplateSections || [];
    const updatedSections = sections.map((section, index) => {
      if (index === sectionIndex) {
        const items = section.formTemplateItems || [];
        const updatedItems = items.map((item, i) =>
          i === itemIndex ? { ...item, ...updates } : item
        );
        return {
          ...section,
          formTemplateItems: updatedItems,
        };
      }
      return section;
    });

    setEditedTemplate({
      ...editedTemplate,
      formTemplateSections: updatedSections,
    });
  }

  function addSelectOption(sectionIndex: number, itemIndex: number) {
    const newOption: FormTemplateItemSelectOption = {
      value: "",
      label: "",
      isDefault: false,
    };

    const sections = editedTemplate.formTemplateSections || [];
    const section = sections[sectionIndex];
    const items = section?.formTemplateItems || [];
    const item = items[itemIndex];

    if (item) {
      const updatedOptions = [...(item.options || []), newOption];
      updateFormItem(sectionIndex, itemIndex, { options: updatedOptions });
    }
  }

  function updateSelectOption(
    sectionIndex: number,
    itemIndex: number,
    optionIndex: number,
    updates: Partial<FormTemplateItemSelectOption>
  ) {
    const sections = editedTemplate.formTemplateSections || [];
    const section = sections[sectionIndex];
    const items = section?.formTemplateItems || [];
    const item = items[itemIndex];

    if (item && item.options) {
      const updatedOptions = item.options.map((option, i) =>
        i === optionIndex ? { ...option, ...updates } : option
      );
      updateFormItem(sectionIndex, itemIndex, { options: updatedOptions });
    }
  }

  function removeSelectOption(
    sectionIndex: number,
    itemIndex: number,
    optionIndex: number
  ) {
    const sections = editedTemplate.formTemplateSections || [];
    const section = sections[sectionIndex];
    const items = section?.formTemplateItems || [];
    const item = items[itemIndex];

    if (item && item.options) {
      const updatedOptions = item.options.filter((_, i) => i !== optionIndex);
      updateFormItem(sectionIndex, itemIndex, { options: updatedOptions });
    }
  }

  function moveFormItem(
    sectionIndex: number,
    itemIndex: number,
    direction: "up" | "down"
  ) {
    const sections = editedTemplate.formTemplateSections || [];
    const section = sections[sectionIndex];
    const items = section?.formTemplateItems || [];

    // The items are sorted for display, so we need to sort them here to get the correct item
    const sortedItems = [...items].sort(
      (a, b) => (a.order || 0) - (b.order || 0)
    );

    const targetItemIndex = direction === "up" ? itemIndex - 1 : itemIndex + 1;

    if (targetItemIndex < 0 || targetItemIndex >= sortedItems.length) {
      return; // Can't move outside of bounds
    }

    const currentItem = sortedItems[itemIndex];
    const targetItem = sortedItems[targetItemIndex];

    if (currentItem && targetItem) {
      // Swap order values
      const newOrder = targetItem.order;

      const updatedItems = items.map((item) => {
        if (item === currentItem) {
          return { ...item, order: newOrder };
        }
        if (item === targetItem) {
          return { ...item, order: newOrder + (direction === "up" ? +1 : -1) };
        }
        return item;
      });

      updateSection(sectionIndex, { formTemplateItems: updatedItems });
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Edit Form Template</h1>
        <div className="flex gap-2">
          <DButton className="btn btn-outline" onClick={onCancel}>
            Cancel
          </DButton>
          <DButton
            className="btn btn-info btn-outline"
            onClick={() => setShowPreview(true)}
            disabled={!editedTemplate.id}
          >
            Preview Form
          </DButton>
          <DButton
            className="btn btn-primary"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving && (
              <span className="loading loading-spinner loading-sm"></span>
            )}
            Save Changes
          </DButton>
        </div>
      </div>

      {saveSuccess && (
        <div className="alert alert-success mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Template saved successfully!</span>
        </div>
      )}

      <div className="space-y-6">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Template Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <DInput
                  type="text"
                  className="input input-bordered w-full"
                  value={editedTemplate.name}
                  onChange={(e) =>
                    setEditedTemplate({
                      ...editedTemplate,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Version
                </label>
                <DInput
                  type="text"
                  className="input input-bordered w-full"
                  value={editedTemplate.version}
                  onChange={(e) =>
                    setEditedTemplate({
                      ...editedTemplate,
                      version: e.target.value,
                    })
                  }
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  value={editedTemplate.description || ""}
                  onChange={(e) =>
                    setEditedTemplate({
                      ...editedTemplate,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="flex items-center gap-2">
                  <DInput
                    type="checkbox"
                    className="checkbox"
                    checked={editedTemplate.isActive}
                    onChange={(e) =>
                      setEditedTemplate({
                        ...editedTemplate,
                        isActive: e.target.checked,
                      })
                    }
                  />
                  <span className="text-sm font-medium">Active</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Sections</h2>
            <DButton className="btn btn-primary btn-sm" onClick={addSection}>
              Add Section
            </DButton>
          </div>

          {editedTemplate.formTemplateSections?.map((section, sectionIndex) => (
            <Card
              key={sectionIndex}
              title={section.name}
              isExpandable={true}
              headerRight={
                <div className="flex gap-2 ml-4">
                  <DButton
                    variant="neutral"
                    sizes="sm"
                    onClick={() => cloneSection(sectionIndex)}
                  >
                    Clone
                  </DButton>
                  <DButton
                    variant="error"
                    sizes="sm"
                    onClick={() => removeSection(sectionIndex)}
                  >
                    Remove
                  </DButton>
                </div>
              }
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1 space-y-4">
                  <DInput
                    type="text"
                    isWide
                    label="Section Name"
                    value={section.name}
                    onChange={(e) =>
                      updateSection(sectionIndex, { name: e.target.value })
                    }
                  />
                  <DInput
                    type="textarea"
                    label="Description"
                    isWide
                    value={section.description || ""}
                    onChange={(e) =>
                      updateSection(sectionIndex, {
                        description: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="divider">Form Fields</div>

              <div className="space-y-3">
                {section.formTemplateItems
                  ?.sort((a, b) => (a.order || 0) - (b.order || 0))
                  .map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      title={item.name || "New Field"}
                      headerRight={
                        <div className="flex gap-2">
                          <DButton
                            onClick={() =>
                              moveFormItem(sectionIndex, itemIndex, "up")
                            }
                            disabled={itemIndex === 0}
                            title="Move up"
                            sizes="xs"
                          >
                            ↑
                          </DButton>
                          <DButton
                            onClick={() =>
                              moveFormItem(sectionIndex, itemIndex, "down")
                            }
                            disabled={
                              itemIndex ===
                              (section.formTemplateItems?.length || 1) - 1
                            }
                            title="Move down"
                            sizes="xs"
                          >
                            ↓
                          </DButton>
                          <DButton
                            onClick={() =>
                              cloneFormItem(sectionIndex, itemIndex)
                            }
                            sizes="xs"
                          >
                            Clone
                          </DButton>
                          <DButton
                            variant="error"
                            onClick={() =>
                              removeFormItem(sectionIndex, itemIndex)
                            }
                            sizes="xs"
                          >
                            Remove
                          </DButton>
                        </div>
                      }
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <DInput
                            label="Field Name"
                            type="text"
                            isWide
                            value={item.name}
                            onChange={(e) =>
                              updateFormItem(sectionIndex, itemIndex, {
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Field Type
                          </label>
                          <select
                            className="select select-bordered select-sm w-full"
                            value={item.type}
                            onChange={(e) =>
                              updateFormItem(sectionIndex, itemIndex, {
                                type: e.target.value,
                              })
                            }
                          >
                            {FORM_ITEM_TYPES.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <DInput
                            label="Description"
                            type="text"
                            isWide
                            value={item.description || ""}
                            onChange={(e) =>
                              updateFormItem(sectionIndex, itemIndex, {
                                description: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <DInput
                            type="checkbox"
                            className="checkbox checkbox-sm"
                            label="required"
                            checked={item.isRequired}
                            onChange={(e) =>
                              updateFormItem(sectionIndex, itemIndex, {
                                isRequired: e.target.checked,
                              })
                            }
                          />
                        </div>
                      </div>

                      {item.type === "select" && (
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium">
                              Select Options
                            </label>
                            <DButton
                              className="btn btn-primary btn-xs"
                              onClick={() =>
                                addSelectOption(sectionIndex, itemIndex)
                              }
                            >
                              Add Option
                            </DButton>
                          </div>
                          <div className="space-y-2">
                            {item.options?.map((option, optionIndex) => (
                              <div
                                key={optionIndex}
                                className="flex gap-2 items-center"
                              >
                                <DInput
                                  type="text"
                                  placeholder="Value"
                                  className="input input-bordered input-xs flex-1"
                                  value={option.value}
                                  onChange={(e) =>
                                    updateSelectOption(
                                      sectionIndex,
                                      itemIndex,
                                      optionIndex,
                                      { value: e.target.value }
                                    )
                                  }
                                />
                                <DInput
                                  type="text"
                                  placeholder="Label"
                                  className="input input-bordered input-xs flex-1"
                                  value={option.label}
                                  onChange={(e) =>
                                    updateSelectOption(
                                      sectionIndex,
                                      itemIndex,
                                      optionIndex,
                                      { label: e.target.value }
                                    )
                                  }
                                />
                                <label className="flex items-center gap-1">
                                  <DInput
                                    type="checkbox"
                                    className="checkbox checkbox-xs"
                                    checked={option.isDefault}
                                    onChange={(e) =>
                                      updateSelectOption(
                                        sectionIndex,
                                        itemIndex,
                                        optionIndex,
                                        { isDefault: e.target.checked }
                                      )
                                    }
                                  />
                                  <span className="text-xs">Default</span>
                                </label>
                                <DButton
                                  variant="error"
                                  sizes="xs"
                                  onClick={() =>
                                    removeSelectOption(
                                      sectionIndex,
                                      itemIndex,
                                      optionIndex
                                    )
                                  }
                                >
                                  ×
                                </DButton>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}

                <DButton
                  className="btn btn-outline btn-sm w-full"
                  onClick={() => addFormItem(sectionIndex)}
                >
                  Add Form Field
                </DButton>
              </div>
            </Card>
          ))}

          {(!editedTemplate.formTemplateSections ||
            editedTemplate.formTemplateSections.length === 0) && (
            <div className="text-center py-8 text-gray-500">
              No sections yet. Click "Add Section" to get started.
            </div>
          )}
        </div>
      </div>

      {/* Form Template Preview Modal */}
      <FormTemplatePreview
        templateId={editedTemplate.id || ""}
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
      />
    </div>
  );
}
