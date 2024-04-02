import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin-bottom: 4px;
  padding: 8px 12px;
`;

export const MessageWrapper = styled.View`
  margin: 0 8px;
`;

export const Logo = styled.Image`
  height: ${RFValue(128)}px;
  width: 100%;
`;

export const Greeting = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
`;

export const DrawerFooter = styled.View`
  border-top-color: ${({ theme }) => theme.colors.light};
  border-top-width: 0.2px;
  padding: 8px 32px;
`;

export const Version = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.smaller}px;
`;
