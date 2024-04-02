import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: ${RFValue(96)}px;
  padding: 0 ${RFValue(42)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
  letter-spacing: 2px;
`;

export const Pressable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 16px;
  position: absolute;
  right: 32px;
  top: 32px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  letter-spacing: 2px;
  margin-bottom: 32px;
`;
