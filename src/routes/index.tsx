import { NavigationContainer } from "@react-navigation/native";

import { Auth } from "./auth";

export function Routes() {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}
