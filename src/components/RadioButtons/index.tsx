import React from "react";
import { useTheme } from "styled-components/native";
import RadioGroup, { RadioGroupProps } from "react-native-radio-buttons-group";

export function RadioButtons({ ...rest }: RadioGroupProps) {
  const THEME = useTheme();

  return (
    <RadioGroup
      containerStyle={{
        alignItems: "flex-start",
      }}
      labelStyle={{
        color: THEME.colors.gray_light,
        fontFamily: THEME.fonts.medium,
        fontSize: THEME.fontSize.normal,
      }}
      {...rest}
    />
  );
}
