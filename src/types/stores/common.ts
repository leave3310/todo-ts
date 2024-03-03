import { AlertType } from "@/types/enum/stores/common";

export type AlertContent = {
  isShowAlert: boolean;
  type: AlertType;
  content: string;
};
