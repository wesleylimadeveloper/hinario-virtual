import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Scroll = styled.ScrollView``;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
  padding: 0 ${RFValue(42)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
  font-weight: bold;
  margin-top: ${RFValue(64)}px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
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

export const ButtonWrapper = styled.View`
  margin: 8px 0;
`;

export const LinkButtonWrapper = styled.View`
  margin-bottom: 32px;
`;