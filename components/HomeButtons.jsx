import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const HomeButtons = ({ title, handlePress, isLoading }) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.6}
        className={`bg-white rounded-3xl justify-center items-center shadow-xl shadow-neutral-300 w-[155] h-[155] ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
    >
      <Text className='text-black font-interbold text-xl'>{title}</Text>
    </TouchableOpacity>
  )
}

export default HomeButtons;