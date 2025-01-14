import { NavigationContainer } from "@react-navigation/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
