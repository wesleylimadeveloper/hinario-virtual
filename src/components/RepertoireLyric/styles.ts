import styled from "styled-components/native";

export const ButtonWrapper = styled.View`
  margin: 8px 0;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  border-width: 1px;
  justify-content: center;
  padding: 12px 16px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  letter-spacing: 1px;
`;

export const Content = styled.View`
  border-radius: 8px;
  border-width: 1px;
  margin: 16px 0;
  padding: 0 8px;
`;

export const ContentHeader = styled.View`
  justify-content: space-between;
  padding: 4px;
`;

export const ContentHeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
  margin-right: 8px;
`;

export const SoundPressable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  margin-bottom: 8px;
`;
