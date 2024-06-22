import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, buttonStyles, isLoading }) => {
  	return (
		<TouchableOpacity 
			onPress={handlePress}
			activeOpacity={0.7}
			className={`justify-center items-center ${buttonStyles} ${isLoading ? 'opacity-50' : ''}`}
			disabled={isLoading}
		>
			<Text className={`text-primary font-outfitsemibold text-xl`}>{title}</Text>
		</TouchableOpacity>
	)
}

export default CustomButton;