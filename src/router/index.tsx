import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";
import CreateBill from "../pages/createBill";
import CreateGroup from "../pages/createGroup";
import GroupDetails from "../pages/groupDetails";
import Search from "../pages/search";

const Stack = createNativeStackNavigator();

const Router = () => {
  const theme = useTheme();
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
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="CreateGroup" component={CreateGroup} />
      <Stack.Screen name="GroupDetails" component={GroupDetails} />
      <Stack.Screen name="CreateBill" component={CreateBill} />
    </Stack.Navigator>
  );
};

export default Router;
