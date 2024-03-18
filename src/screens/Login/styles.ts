import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
  justify-content: center;
  padding: 0 ${RFValue(42)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
  font-weight: bold;
  text-align: center;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  margin-bottom: ${RFValue(32)}px;
  text-align: center;
`;

export const Form = styled.View`
  margin-bottom: 16px;
`;

export const InputWrapper = styled.View`
  margin-bottom: 16px;
`;

export const LinkButtonWrapper = styled.View`
  margin-bottom: 48px;
`;

export const Footer = styled.View`
  margin-bottom: 32px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  text-align: center;
`;
