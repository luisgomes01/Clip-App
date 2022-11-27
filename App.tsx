import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { ThemeContext } from "./src/contexts/ThemeContext";
import Application from "./src/index";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    "montserrat-regular": require("./src/assets/Montserrat-Regular.ttf"),
    "montserrat-medium": require("./src/assets/Montserrat-Medium.ttf"),
    "montserrat-semibold": require("./src/assets/Montserrat-SemiBold.ttf"),
    "montserrat-bold": require("./src/assets/Montserrat-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeContext>
        <Application />
      </ThemeContext>
    </SafeAreaView>
  );
};

export default App;
