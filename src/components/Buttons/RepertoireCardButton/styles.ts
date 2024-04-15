import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  justify-content: center;
  padding: 8px 16px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.smaller}px;
  letter-spacing: 1px;
  text-align: center;
`;
