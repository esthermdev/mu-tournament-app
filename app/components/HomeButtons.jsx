import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const HomeButtons = ({ title, handlePress, containerStyles, isLoading }) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.8}
        className={`bg-primary rounded-md justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
    >
      <Text className='text-black font-interbold text-xl'>{title}</Text>
    </TouchableOpacity>
  )
}

export default HomeButtons;