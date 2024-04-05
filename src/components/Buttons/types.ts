import { TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  color?: string;
  textColor?: string;
  disable?: boolean;
  inactive?: boolean;
};

export type ButtonPropsStyle = {
  color?: string;
  textColor?: string;
  inactive?: boolean;
};
