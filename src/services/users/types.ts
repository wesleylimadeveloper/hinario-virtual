export type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
  phone: string;
  parish: string;
};

export type CreateUserResponse = {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  dioceseId: string;
  parishId: string;
  emailActive: false;
  lastLogin: Date;
  numberAccess: number;
  refreshToken: string;
  isAdmin: boolean;
  createdAt: Date;
};
