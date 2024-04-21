import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  padding: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
  margin-bottom: 24px;
  text-align: center;
`;

export const Buttons = styled.View`
  flex-direction: row;
  gap: 8px;
  margin: 24px 0;
`;

export const ButtonsWrapper = styled.View`
  flex: 1;
`;
