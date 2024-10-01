import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ModuleListScreen from './src/components/Screens/ModuleListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ModuleListScreen'>
        <Stack.Screen
          name='ModuleListScreen'
          component={ModuleListScreen}
          options={{ title: 'Module List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}