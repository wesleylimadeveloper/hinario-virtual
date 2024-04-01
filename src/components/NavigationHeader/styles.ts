import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  padding: 16px 12px;
  flex-direction: row;
`;

export const Pressable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 0 6px 0 0;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
`;
