import styled from "styled-components/native";

import { ButtonProps } from "../types";

export const Container = styled.TouchableOpacity<ButtonProps>`
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

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  font-weight: bold;
  text-align: center;
`;
