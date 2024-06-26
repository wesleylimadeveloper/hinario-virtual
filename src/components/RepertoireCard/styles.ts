import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_light};
  border-color: ${({ theme }) => theme.colors.primary_light};
  border-radius: 6px;
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const MusicInfo = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;

export const Musics = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 12px 0;
`;

export const MusicTitle = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
`;
