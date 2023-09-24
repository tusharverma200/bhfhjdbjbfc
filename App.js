
import { StyleSheet, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { StatusBar, View,SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTab from './Components/BottomTab';
import Sidebar from './screens/Sidebar';
import Header from './Components/Header';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home"  options={{ headerShown: false }}  component={BottomTab} />
      
        {/* Other screens and navigators can be added here */}
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containerL: {
    flex: 1,
    backgroundColor: 'white', // Set the background color to black
    alignItems: 'center',
    justifyContent: 'center',
  },
  blackBackground: {
    flex: 1,
    backgroundColor: 'white', // Set the background color to black
  },
});
