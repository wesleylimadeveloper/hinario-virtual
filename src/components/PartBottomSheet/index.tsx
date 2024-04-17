import React, { forwardRef } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { RFValue } from "react-native-responsive-fontsize";

import { PartBottomSheetProps } from "./types";
import { Container, Header, Title, Content, Text } from "./styles";

export const PartBottomSheet = forwardRef<BottomSheet, PartBottomSheetProps>(
  ({ title, text, onClose }, ref) => {
    const THEME = useTheme();

    return (
      <BottomSheet
        backgroundStyle={{
          backgroundColor: THEME.colors.primary_light,
        }}
        handleIndicatorStyle={{
          backgroundColor: THEME.colors.light,
        }}
        index={0}
        ref={ref}
        snapPoints={[0.1, "100%"]}
      >
        <Container>
          <Header>
            <Title>{title}</Title>

            <FontAwesome
              onPress={onClose}
              color={THEME.colors.light}
              name="close"
              size={RFValue(24)}
            />
          </Header>

          <BottomSheetScrollView
            contentContainerStyle={{
              paddingHorizontal: 16,
            }}
          >
            <Content>
              <Text>{text}</Text>
            </Content>
          </BottomSheetScrollView>
        </Container>
      </BottomSheet>
    );
  }
);
