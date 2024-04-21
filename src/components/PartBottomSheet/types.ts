import { GetPartsResponse } from "@/services/musics/types";

export type PartBottomSheetNavigationProps = {
  navigate(screen: string): void;
};

export type PartBottomSheetProps = {
  parts: GetPartsResponse[];
  onClose?(): void;
};
