import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  flex: 1;
  justify-content: center;
`;

export const AlertBox = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  width: 80%;
  padding: 32px 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.dark_dark};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
  margin-bottom: 8px;
  text-align: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.dark_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Buttons = styled.View`
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
`;
