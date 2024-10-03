import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl text-center">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="text-red-500">Go to Profile</Link>
    </View>
  );
}

