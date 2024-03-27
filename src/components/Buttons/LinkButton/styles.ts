import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  border-bottom-color: ${({ theme }) => theme.colors.primary};
  border-bottom-width: 1px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  letter-spacing: 1px;
  text-align: center;
`;
