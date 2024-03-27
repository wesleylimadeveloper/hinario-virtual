import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
  justify-content: center;
  padding: 0 ${RFValue(42)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Form = styled.View`
  margin-bottom: 16px;
`;

export const InputWrapper = styled.View`
  margin-bottom: 16px;
`;

export const LinkButtonWrapper = styled.View`
  margin-top: 16px;
`;
