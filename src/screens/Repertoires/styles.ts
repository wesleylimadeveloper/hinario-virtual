import { FlatList } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
`;

export const Header = styled.View`
  margin-bottom: 16px;
  padding: 0 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
  margin-top: 16px;
`;

export const TitleMessage = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
  margin-bottom: 16px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})`` as typeof FlatList;

export const ListSeparator = styled.View`
  margin: 8px 0;
`;
