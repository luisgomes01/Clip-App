import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Switch } from "react-native";
import { useTheme } from "styled-components";
import { useClip } from "../contexts/ClipContext";
import CreateBill from "../pages/createBill";
import CreateGroup from "../pages/createGroup";
import GroupDetails from "../pages/groupDetails";
import Search from "../pages/search";

export type RootNavigatorProps = {
  Search: {};
  CreateGroup: {};
  GroupDetails: { id: any };
  CreateBill: { groupId: any };
};

const Stack = createNativeStackNavigator<RootNavigatorProps>();

const Router = () => {
  const theme = useTheme();
  const { toggleDarkTheme, isDarkTheme } = useClip();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.primary,
        },
        headerTitle: "Clip",
        headerTitleStyle: {
          color: theme.background,
          fontFamily: "montserrat-bold",
          fontSize: 32,
        },
        headerTintColor: theme.background,
      }}
    >
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerRight: () => (
            <Switch
              value={isDarkTheme}
              onChange={() => toggleDarkTheme()}
              trackColor={{ false: theme.placeholder, true: theme.placeholder }}
              thumbColor={theme.background}
            />
          ),
        }}
      />
      <Stack.Screen name="CreateGroup" component={CreateGroup} />
      <Stack.Screen name="GroupDetails" component={GroupDetails} />
      <Stack.Screen name="CreateBill" component={CreateBill} />
    </Stack.Navigator>
  );
};

export default Router;
