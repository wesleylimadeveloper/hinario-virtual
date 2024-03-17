import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  border-width: 1px;
  justify-content: center;
  padding: 12px 16px;
  width: 100%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  font-weight: bold;
  text-align: center;
`;
