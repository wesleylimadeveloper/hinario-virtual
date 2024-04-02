import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
  margin-top: 16px;
`;

export const TitleMessage = styled.Text`
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

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  margin: 16px 0;
`;

export const Quotation = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium_italic};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  margin-bottom: 32px;
`;
