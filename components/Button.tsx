import {View, Pressable, Text} from 'react-native';

export default function({label}:any){
    return (
        <View className='w-80 h-[68px] '>
            <Pressable className='rounded-[10px] w-[100%] itemx-center justify-center flex flex-row'
            onPress={()=>alert('You pressed a button.')}
            >
                <Text className='text-white text-[16px] mx-5 items-center justify-center p-[3px]'>{label}</Text>
            </Pressable>
        </View>
    );
}