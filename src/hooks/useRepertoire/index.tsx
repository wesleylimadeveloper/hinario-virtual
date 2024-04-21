import { createContext, useContext, useRef, useState } from "react";
import { AxiosResponse } from "axios";
import BottomSheet from "@gorhom/bottom-sheet";

import { MusicLyricsProps } from "@/components/MusicLyrics/types";

import { createRepertoire } from "@/services/repertoires";
import {
  CreateRepertoireRequest,
  RepertoireCelebrationPartMusic,
} from "@/services/repertoires/types";

import { RepertoireProviderProps, IRepertoireContextData } from "./types";

const RepertoireContext = createContext({} as IRepertoireContextData);

export function RepertoireProvider({ children }: RepertoireProviderProps) {
  const [repertoire, setRepertoire] = useState<MusicLyricsProps[]>([]);
  const [repertoireCelebrationPartMusic, setRepertoireCelebrationPartMusic] =
    useState<RepertoireCelebrationPartMusic[]>([]);
  const [repertoireTitle, setRepertoireTitle] = useState("");
  const [isSavingRepertoire, setIsSavingRepertoire] = useState(false);

  const partBottomSheetRef = useRef<BottomSheet>(null);

  function addMusicToRepertoire(data: MusicLyricsProps) {
    const repertoireUpdated = [...repertoire];
    const repertoireCelebrationPartMusicUpdated: RepertoireCelebrationPartMusic[] =
      [];

    data.music.celebrationPartMusic;

    const index = repertoireUpdated.findIndex(
      (music) => music.celebrationPartId === data.celebrationPartId
    );

    if (index !== -1) {
      repertoireUpdated[index] = data;
    } else {
      repertoireUpdated.push(data);
    }

    repertoireUpdated.forEach((music) =>
      repertoireCelebrationPartMusicUpdated.push({
        celebrationPartMusicId: music.id,
      })
    );

    setRepertoire(repertoireUpdated);
    setRepertoireCelebrationPartMusic(repertoireCelebrationPartMusicUpdated);
    partBottomSheetRef.current?.expand();
  }

  function resetStates() {
    setRepertoire([]);
    setRepertoireCelebrationPartMusic([]);
    setRepertoireTitle("");
    setIsSavingRepertoire(false);
  }

  function setTitle(title: string) {
    setRepertoireTitle(title);
  }

  async function saveRepertoire(
    title: string
  ): Promise<AxiosResponse<any, any>> {
    try {
      setIsSavingRepertoire(true);

      const request: CreateRepertoireRequest = {
        title,
        repertoireCelebrationPartMusic,
      };

      const response = await createRepertoire(request);

      setIsSavingRepertoire(false);

      return response;
    } catch (error) {
      setIsSavingRepertoire(false);
      throw new Error(error);
    }
  }

  return (
    <RepertoireContext.Provider
      value={{
        addMusicToRepertoire,
        isSavingRepertoire,
        partBottomSheetRef,
        repertoire,
        repertoireTitle,
        resetStates,
        saveRepertoire,
        setTitle,
      }}
    >
      {children}
    </RepertoireContext.Provider>
  );
}

export function useRepertoire() {
  const context = useContext(RepertoireContext);
  return context;
}
