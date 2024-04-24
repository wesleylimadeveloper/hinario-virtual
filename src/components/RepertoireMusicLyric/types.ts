import { CelebrationPartMusic, Music } from "@/services/musics/types";

export type RepertoireLyricProps = CelebrationPartMusic;

export type Data = {
  music: Music;
};

export type MusicLyricsButtonStyleProps = {
  required?: boolean;
};

export type RepertoireLyricsNavigationProps = {
  navigate(screen: string, data: Data): void;
};
