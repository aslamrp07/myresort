import { TemplateRef } from '@angular/core';

export interface ConfirmationDialog {
  title: string;
  content: any;
  disableActionButtons?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
}
