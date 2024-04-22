import React, { forwardRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import MaskInput, { MaskInputProps } from "react-native-mask-input";

import THEME from "@/global/styles/theme";

interface InputProps extends MaskInputProps {
  editable?: boolean;
  searchable?: boolean;
  secureTextEntry?: boolean;
  error?: string;
}

const InputForwardRef = forwardRef<TextInput, InputProps>(function Input(
  { editable = true, searchable, secureTextEntry, error, ...rest },
  ref
) {
  const [isFocused, setIsFocused] = useState(false);
  const [passwordHidden, setPasswordHidden] = useState(secureTextEntry);

  return (
    <>
      <View
        style={[
          styles.input,
          {
            borderColor: editable
              ? isFocused
                ? THEME.colors.primary
                : THEME.colors.gray_dark
              : THEME.colors.gray,
            borderWidth: isFocused ? 2 : 1,
          },
        ]}
      >
        {searchable && (
          <FontAwesome
            name="search"
            size={18}
            color={editable ? THEME.colors.primary : THEME.colors.gray}
          />
        )}

        <MaskInput
          style={[
            styles.field,
            {
              color: editable ? THEME.colors.primary : THEME.colors.gray,
              paddingLeft: searchable ? 8 : 0,
            },
          ]}
          editable={editable}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          placeholderTextColor={
            editable ? THEME.colors.gray_dark : THEME.colors.gray
          }
          secureTextEntry={passwordHidden}
          {...rest}
          ref={ref}
          {...rest}
        />
        {secureTextEntry && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setPasswordHidden(!passwordHidden)}
          >
            <MaterialCommunityIcons
              style={styles.eyeIcon}
              name={passwordHidden ? "eye-off" : "eye"}
              size={24}
              color={editable ? THEME.colors.primary : THEME.colors.gray}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
});

const styles = StyleSheet.create({
  input: {
    alignItems: "center",
    backgroundColor: THEME.colors.light,
    borderRadius: 8,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  field: {
    flex: 1,
    fontFamily: THEME.fonts.medium,
    fontSize: THEME.fontSize.normal,
  },
  eyeIcon: {
    marginLeft: 16,
  },
  errorText: {
    color: THEME.colors.danger,
    fontFamily: THEME.fonts.medium,
    fontSize: THEME.fontSize.smallest,
    marginLeft: 8,
    marginTop: 4,
  },
});

export default InputForwardRef;
