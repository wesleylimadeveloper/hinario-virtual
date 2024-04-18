import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary_light};
  flex: 1;
`;

export const Header = styled.View`
  align-items: flex-end;
  justify-content: space-between;
  margin: 8px 0;
  padding: 0 16px;
`;

export const Content = styled.View`
  align-items: center;
`;

export const CelebrationInfo = styled.View`
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  text-align: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
  text-align: center;
`;

export const ButtonWrapper = styled.View`
  margin-top: 48px;
`;
