import { Music } from "@/services/musics/types";

export type Data = {
  id: string;
};

export type MusicCardNavigationProps = {
  navigate(screen: string, data?: Data): void;
};

export type MusicCardProps = Music;
