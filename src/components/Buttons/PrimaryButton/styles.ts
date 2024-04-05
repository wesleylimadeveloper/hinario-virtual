import styled from "styled-components/native";

import { ButtonPropsStyle } from "../types";

export const Container = styled.TouchableOpacity<ButtonPropsStyle>`
  align-items: center;
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  border-width: 1px;
  justify-content: center;
  padding: 12px 16px;
  width: 100%;
`;

export const Text = styled.Text<ButtonPropsStyle>`
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  letter-spacing: 1px;
  text-align: center;
`;
