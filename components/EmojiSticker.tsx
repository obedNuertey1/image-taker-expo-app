import {View, Image} from 'react-native';

export default function EmojiSticker({imageSize, stickerSource}:any){
    return (
        <View className='-top-[350px]'>
            <Image 
                source={stickerSource}
                resizeMode='cover'
                style={{width: imageSize, height: imageSize}}
            />
        </View>
    );
}