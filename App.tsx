import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Newfeed from './src/screens/HomeScreen';
import CommentBox from './src/screens/CmtScreen';
import Profile from './src/screens/Profile';
import STT,{ Update} from './src/screens/Profile/comSTT'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="facebook" component={Newfeed} />
        <Stack.Screen name="Bình luận" component={CommentBox} />
        <Stack.Screen name="Nguyễn Mạnh Hùng" component={Profile} />
        <Stack.Screen name="Bạn đang nghĩ gì" component={STT}  options={{ headerShown: false }} />
        <Stack.Screen name="Tạo bài viết" component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})