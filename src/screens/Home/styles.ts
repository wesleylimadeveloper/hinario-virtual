import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px ${RFValue(32)}px;
`;

export const Pressable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const Info = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 ${RFValue(42)}px;
`;

export const Logo = styled.Image`
  height: ${RFValue(128)}px;
  margin-bottom: 36px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.extraLarge}px;
  text-align: center;
`;

export const Cursive = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.cursive};
  font-size: ${RFValue(48)}px;
  margin-top: -36px;
  text-align: center;
`;

export const MessageWrapper = styled.View`
  align-items: center;
  align-self: center;
  justify-content: center;
  margin-top: 8px;
  width: 70%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.gray_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  text-align: center;
`;

export const ButtonWrapper = styled.View`
  align-self: center;
  margin-bottom: 64px;
  width: 70%;
`;
