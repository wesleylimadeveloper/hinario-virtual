import { ReactNode } from "react";
import { AxiosResponse } from "axios";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

import { MusicLyricsProps } from "@/components/MusicLyrics/types";

export type RepertoireProviderProps = {
  children: ReactNode;
};

export type IRepertoireContextData = {
  addMusicToRepertoire(data: MusicLyricsProps): void;
  isSavingRepertoire: boolean;
  partBottomSheetRef: React.MutableRefObject<BottomSheetMethods>;
  repertoire: MusicLyricsProps[];
  repertoireTitle: string;
  resetStates(): void;
  saveRepertoire(title: string): Promise<AxiosResponse<any, any>>;
  setTitle(title: string): void;
};
