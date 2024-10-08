import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import ModuleListScreen from "./src/components/Screen/ModuleListScreen";
import ModuleAddScreen from "./src/components/Screen/ModuleAddScreen";
import ModuleViewScreen from "./src/components/Screen/ModuleViewScreen";
import ModuleModifyScreen from "./src/components/Screen/ModuleModifyScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ModuleListScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { color: "white" },
        }}
      >
        <Stack.Screen
          name="ModuleListScreen"
          component={ModuleListScreen}
          options={{ title: "List Modules" }}
        />
        <Stack.Screen
          name="ModuleAddScreen"
          component={ModuleAddScreen}
          options={{ title: "Add Module" }}
        />
        <Stack.Screen
          name="ModuleViewScreen"
          component={ModuleViewScreen}
          options={{ title: "View Module" }}
        />
        <Stack.Screen
          name="ModuleModifyScreen"
          component={ModuleModifyScreen}
          options={{ title: "Modify Module" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
