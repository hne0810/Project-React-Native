import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/screens/HomeScreen';
import Menu from './src/component/screens/MenuSreen';
import Memory from './src/component/route/Memory';
import Setting from './src/component/screens/setting'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Memory" component={Memory} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
