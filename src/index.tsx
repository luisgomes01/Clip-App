import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { Theme } from "./contexts/ThemeContext";

export const Application = () => {
  const theme = useTheme() as Theme;

  return (
    <View>
      <StatusBar backgroundColor={theme.primary} style={theme.name} />
    </View>
  );
};

export default Application;
