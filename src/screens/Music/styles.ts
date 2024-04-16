import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
  justify-content: center;
`;

export const IconContainer = styled.View`
  align-items: flex-end;
  padding: 0 ${RFValue(48)}px;
`;

export const Pressable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;

export const List = styled.FlatList`` as typeof FlatList;

export const EmptyComponent = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  margin-top: 16px;
  text-align: center;
`;

export const ButtonWrapper = styled.View`
  margin-top: 16px;
  width: 100%;
`;
