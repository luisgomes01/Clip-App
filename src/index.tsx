import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";

import Router from "./router";

export const Application = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
    >
      <StatusBar backgroundColor={theme.primary} style={theme.name} />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </View>
  );
};

export default Application;
