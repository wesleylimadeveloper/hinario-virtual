import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding: 0 ${RFValue(32)}px ${RFValue(48)}px ${RFValue(32)}px;
`;

export const Buttons = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const PreviousButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 8px;
`;

export const PreviousButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  letter-spacing: 1px;
  margin-left: 6px;
`;

export const NextButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 8px;
`;

export const NextButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
  letter-spacing: 1px;
  margin-right: 6px;
`;
