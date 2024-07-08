import {View as RnView, Pressable as RnPressable, Text as RnText} from 'react-native';
import { styled } from 'nativewind';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const [View, Pressable, Text] = [styled(RnView), styled(RnPressable), styled(RnText)]

export default function({label, theme, onPress}:any){
    if(theme === "primary"){
        return (
            <View className='border-4 border-[#ffd33d] rounded-[18px] w-80 h-[68px] mx-5 items-center justify-center p-[3px]'>
                <Pressable className='bg-white rounded-[10px] w-full h-full items-center justify-center flex-row'
                    onPress={onPress}
                >
                    <View className='pr-[8px] inline'>
                        <FontAwesome name="picture-o" size={18} color={"#25292e"}/>
                    </View>
                    <Text
                        className='text-[#25292e] text-base'
                    >{label}</Text>
                </Pressable>
            </View>
        );
    }
    return (
        <View className='w-80 h-[68px] mx-5 items-center justify-center p-[3px]'>
            <Pressable className='rounded-[10px] w-full h-[100%] items-center justify-center flex-row'
            onPress={()=>alert('You pressed a button.')}
            >
                <Text className='text-white text-base'>{label}</Text>
            </Pressable>
        </View>
    );
}