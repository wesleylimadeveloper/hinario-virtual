import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  margin-top: 32px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
  margin-top: 8px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
  margin-bottom: 8px;
  text-align: center;
`;

export const Player = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  border-width: 2px;
  padding: 32px 8px;
  width: 90%;
`;

export const MinutesInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;
