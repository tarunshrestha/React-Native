import {  Text, View } from 'react-native'
import { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'


SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  
  return (
    <Stack>
        <Stack.Screen name ="index" options={{headerShown:true}}/>
    </Stack>
  )
}

export default RootLayout
