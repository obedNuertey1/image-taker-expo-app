import {Pressable, StyleSheet, Text} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function IconButton({icon, label, onPress}:any){
    return (
        <Pressable className='iconButton justify-center items-center' onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#fff" />
            <Text className='iconButtonLabel text-white mt-3'>{label}</Text>
        </Pressable>
    );
}