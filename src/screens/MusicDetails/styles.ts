import { FlatList } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
`;

export const Carousel = styled.FlatList.attrs({
  contentContainerStyle: {
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  max-height: ${RFPercentage(10)}px;
  margin-bottom: 16px;
  min-height: ${RFPercentage(10)}px;
` as typeof FlatList;

export const Scroll = styled.ScrollView``;

export const Content = styled.View`
  padding: 0 16px 8px 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
  margin-bottom: 16px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;
