export type SessionsRequest = {
  email: string;
  password: string;
};

export type SessionsResponse = {
  user: User;
  token: string;
  refreshToken: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  dioceseId: string;
  parishId: string;
  emailActive: boolean;
  lastLogin: Date;
  numberAccess: number;
  isAdmin: boolean;
  createdAt: Date;
};
