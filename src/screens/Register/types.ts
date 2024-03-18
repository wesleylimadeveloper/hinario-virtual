export type LoginNavigationProps = {
  navigate(screen: string): void;
};

export type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  parishCode: string;
};
