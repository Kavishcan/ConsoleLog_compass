import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AntDesign from '@expo/vector-icons/AntDesign';

interface EventProps {
  title: string;
  description: string;
}

const Event: React.FC<EventProps> = ({ title, description }) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ padding: 16, borderRadius: 20, marginBottom: 16, borderWidth: 1 }} className='border-[#A7A7A7]'>
        <View className='flex flex-row justify-between items-center mb-2'>
        <Text style={{ fontSize: 25, fontWeight: 'bold'}} className='text-white'>{title}</Text>
        <AntDesign name="arrowright" size={24} color="#FFBE29" />
        </View>
        <Text style={{ fontSize: 14, color: 'gray'}}>{description}</Text>
      </View>
    </View>
  );
};

export default Event;