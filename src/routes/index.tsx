import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "@/hooks/useAuth";
import { Loading } from "@/screens/Loading";

import { Auth } from "./auth";
import { Dashboard } from "./dashboard";

export function Routes() {
  const { isAppLoading, user } = useAuth();

  if (isAppLoading) return <Loading />;

  return (
    <NavigationContainer>
      {user?.id ? <Dashboard /> : <Auth />}
    </NavigationContainer>
  );
}
