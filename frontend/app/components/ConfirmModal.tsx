import DModal from "~/components/ui/DModal";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDestructive?: boolean;
}

/**
 * ConfirmModal component for displaying confirmation dialogs
 */
export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  isDestructive = false,
}: ConfirmModalProps) {
  function handleConfirm() {
    onConfirm();
  }

  function handleCancel() {
    onCancel();
  }

  return (
    <DModal
      isOpen={isOpen}
      onClose={handleCancel}
      title={title}
      showCloseButton={false}
      size="sm"
    >
      <p className="py-4">{message}</p>
      <div className="flex justify-end space-x-2">
        <button className="btn" onClick={handleCancel}>
          {cancelText}
        </button>
        <button
          className={`btn ${isDestructive ? "btn-error" : "btn-primary"}`}
          onClick={handleConfirm}
        >
          {confirmText}
        </button>
      </div>
    </DModal>
  );
}