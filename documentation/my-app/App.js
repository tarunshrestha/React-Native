import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Cat from './components/Cat';

const App = () => {
  return (
    <ScrollView className="bg-white">
      <View className="p-4">
        <Text className="text-center text-2xl font-bold text-black">Yo Tailwind cha React Native ma!</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          className="w-48 h-48 mx-auto"
        />
      </View>
      <TextInput
        className="border p-2 my-4"
        placeholder="Enter anything..."
      />
      <Cat />
    </ScrollView>
  );
};

export default App;
