import { Plate, usePlateEditor } from "platejs/react";
import {
  Editor,
  EditorContainer,
  editorVariants,
} from "~/components/ui/platejs/editor";
import { BasicBlocksKit } from "~/components/ui/platejs/basic-blocks-kit";
import { AutoformatKit } from "~/components/ui/platejs/autoformat-kit";
import type { VariantProps } from "class-variance-authority";

type BlogEditorProps = {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
} & VariantProps<typeof editorVariants>;

/**
 * Reusable PlateJS editor component for blog content.
 * Can be used in both read-only and editable modes.
 */
export default function BlogEditor({
  value,
  onChange,
  readOnly = false,
  placeholder = "Type your amazing content here...",
  variant = "default",
}: BlogEditorProps) {
  const editor = usePlateEditor({
    plugins: [...BasicBlocksKit, ...AutoformatKit],
    value: () => JSON.parse(value),
  });

  return (
    <Plate
      editor={editor}
      onChange={({ value }) => onChange?.(JSON.stringify(value))}
      readOnly={readOnly}
    >
      <EditorContainer>
        <Editor placeholder={placeholder} variant={variant} />
      </EditorContainer>
    </Plate>
  );
}
