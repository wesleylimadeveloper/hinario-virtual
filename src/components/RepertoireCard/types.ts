import { GetRepertoiresResponse } from "@/services/repertoires/types";

export type Data = {
  id: string;
};

export type RepertoireCardNavigationProps = {
  navigate(screen: string, data: Data): void;
};

export type RepertoireCardProps = GetRepertoiresResponse & {
  onRefresh(): Promise<void>;
};
