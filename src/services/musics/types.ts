export type Music = {
  id: string;
  title: string;
  lyrics: string;
  author: string;
  audio: string;
  audioLength: string;
  tablatura: string;
  createdAt: string;
  updatedAt?: string;
};

export type CelebrationPartMusic = {
  id: string;
  celebrationPartId: string;
  musicId: string;
  required: boolean;
  order: number;
  music: Music;
};

export type GetPartsResponse = {
  id: string;
  dioceseId: string;
  yearId: string;
  cycleId: string;
  celebrationId: string;
  partId: string;
  year: {
    id: string;
    description: string;
    createdAt: string;
  };
  cycle: {
    id: string;
    createdAt: string;
    description: string;
  };
  celebration: {
    id: string;
    description: string;
    createdAt: string;
  };
  part: {
    id: string;
    description: string;
    createdAt: string;
  };
  celebrationPartMusic: CelebrationPartMusic[];
};
