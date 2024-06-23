import { TouchableOpacity, Text, View, Image } from 'react-native';
// import { Icon } from '@rneui/base';

const HomeButtons = ({ handlePress, buttonColor, icon, title }) => {

  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.6}
        className={`${buttonColor} w-[157px] h-[145px] p-5 rounded-[22px] flex-col justify-between items-start inline-flex`}
    >
      <Image className='w-[25] h-[25]' resizeMode='contain' source={icon}/>
      <Text className='font-outfitbold text-white text-lg'>{title}</Text>
    </TouchableOpacity>
  )
}

export default HomeButtons;