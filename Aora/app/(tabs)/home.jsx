import { View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text className="text-center text-3xl font-pblack py-2 mt-2">Aora</Text>
      {/* <Text className="text-center text-sm"></Text> */}
      <View className="bg-black-200 py-5 mt-2">
        <Text className="text-white text-center">Welcome Admin!</Text>
      </View>
    </View>
  )
}

export default Home