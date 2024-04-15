export type MusicNote = {
  key: string;
  note: string;
  musicId: string;
  position: number;
  createdAt: string;
  updatedAt: string;
};

export type Music = {
  id: string;
  title: string;
  lyrics: string;
  author: string;
  audio: string;
  audioLength: string;
  tablatura: string;
  createdAt: string;
  updatedAt: string;
  notes: MusicNote[];
};

export type CelebrationPart = {
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
};

export type CelebrationPartMusic = {
  id: string;
  celebrationPartId: string;
  musicId: string;
  required: boolean;
  order: number;
  music: Music;
  celebrationPart: CelebrationPart;
};

export type RepertoireUser = {
  repertoireId: string;
  userId: string;
};

export type GetRepertoiresResponse = {
  id: string;
  title: string;
  createdAt: string;
  createdBy: string;
  createdByUser?: {
    id: string;
    name: string;
    email: string;
  };
  updatedAt: string;
  updatedBy: string;
  repertoireCelebrationPartMusic: {
    repertoireId: string;
    celebrationPartMusicId: string;
    celebrationPartMusic: CelebrationPartMusic;
  }[];
  repertoireUsers: RepertoireUser[];
};
