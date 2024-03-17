import { TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  title?: string;
  disable?: boolean;
  inactive?: boolean;
};

export type StyleButtonProps = {
  inactive?: boolean;
};
