export type AlertProps = {
  title: string;
  message: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?(): void;
  onCancel?(): void;
};
