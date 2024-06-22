import { TouchableOpacity, Text } from 'react-native';
import { Icon } from '@rneui/base';
import React from 'react';

const HomeButtons = ({ handlePress, buttonColor, iconType, iconName, title }) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.6}
        className={`${buttonColor} w-[157px] h-[145px] p-5 rounded-[22px] flex-col justify-between items-start inline-flex`}
    >
      <Icon type={iconType} name={iconName} color='white' />
      <Text className='font-outfitbold text-white text-lg'>{title}</Text>
    </TouchableOpacity>
  )
}

export default HomeButtons;