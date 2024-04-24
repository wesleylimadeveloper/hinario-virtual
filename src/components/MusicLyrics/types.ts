import { CelebrationPartMusic, Music } from "@/services/musics/types";

export type Data = {
  music: Music;
};

export type MusicLyricsButtonStyleProps = {
  required?: boolean;
};

export type MusicLyricsNavigationProps = {
  navigate(screen: string, data: Data): void;
};

export type MusicLyricsProps = CelebrationPartMusic;
