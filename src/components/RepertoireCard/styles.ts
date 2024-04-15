import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_light};
  border-color: ${({ theme }) => theme.colors.primary_light};
  border-radius: 6px;
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 12px;
`;

export const MusicInfo = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
  margin-bottom: 12px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;

export const Musics = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 12px;
`;

export const MusicTitle = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;
