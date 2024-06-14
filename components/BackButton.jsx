import { TouchableOpacity, Text, View } from 'react-native'
import { Icon } from '@rneui/base';
import React from 'react'

const BackButton = ({ backTitle, handlePress, backButtonHidden }) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.5}
    >
      <View className={`flex-row items-center mb-7 ${backButtonHidden}`}>
        <Icon name='arrow-back-outline' type='ionicon' size={18} iconStyle={{ color: 'white', paddingRight: 5 }} />
        <Text className='text-primary font-interbold'>
          {backTitle}
        </Text>
      </View>
      
    </TouchableOpacity>
  )
}

export default BackButton;