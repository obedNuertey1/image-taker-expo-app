import {Modal, View, Text, Pressable} from 'react-native';4
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function EmojiPicker({isVisible, children, onClose}:any){
    return (
        <Modal animationType='slide' transparent={true} visible={isVisible} >
            <View className='modalContent h-1/4 w-full bg-[#25292e] rounded-tr-[18px] rounded-tl-[18px] absolute bottom-0'>
                <View className='titleContainer h-1/6 bg-[#464C55] rounded-tr-[10px] rounded-tl-[10px] pr-[20px] flex-row items-center justify-between'>
                    <Text className='title ml-5 text-white text-base'>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color={"#fff"} size={22} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    );
}