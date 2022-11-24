import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useTheme } from "styled-components";
import Button from "./components/button/Button";

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
      <View
        style={{
          marginTop: 50,
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <Button type="primary">Salvar</Button>
        <Button type="secondary">Voltar</Button>
      </View>
    </View>
  );
};

export default Application;
