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
  celebrationPartMusic?: CelebrationPartMusic[];
};

export type CelebrationPartMusic = {
  id: string;
  celebrationPartId: string;
  musicId: string;
  required: boolean;
  order: number;
  music?: Music;
  celebrationPart?: CelebrationPart;
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

export type CelebrationPart = {
  id: string;
  dioceseId: string;
  yearId: string;
  cycleId: string;
  celebrationId: string;
  partId: string;
  year?: {
    id: string;
    description: string;
    createdAt: string;
  };
  cycle?: {
    id: string;
    createdAt: string;
    description: string;
  };
  celebration?: {
    id: string;
    description: string;
    createdAt: string;
  };
  part?: {
    id: string;
    description: string;
    createdAt: string;
  };
};

export type Pagination = {
  total: number;
};

export type GetMusicsResponse = {
  pagination: Pagination;
  data: Music[];
};

export type Note = {
  key: string;
  note: string;
  musicId: string;
  position: number;
  createdAt: Date;
  updatedAt: Date;
};

export type GetMusicByIDResponse = {
  id: string;
  title: string;
  lyrics: string;
  author: string;
  audio: string;
  audioLength: number;
  tablatura: string;
  createdAt: Date;
  updatedAt: Date;
  notes: Note[];
  audioURL: string;
};
