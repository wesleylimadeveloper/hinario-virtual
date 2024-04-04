import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 12px;
`;

export const MusicInfo = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  margin-bottom: 8px;
`;
