import {View, Image} from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';


export default function EmojiSticker({imageSize, stickerSource}:any){
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const drag = Gesture.Pan().onChange((event)=>{
        translateX.value += event?.changeX;
        translateY.value += event?.changeY;
    })
    
    const containerStyle = useAnimatedStyle(():any=>{
        return {
            transform: [
                {
                    translateX: translateX.value
                },
                {
                    translateY: translateY.value
                }
            ]
        }
    })
    
    const scaleImage = useSharedValue(imageSize);
    const doubleTap = Gesture.Tap()
    .numberOfTaps(2).onStart(()=>{
        if(scaleImage.value !== imageSize * 2){
            scaleImage.value = scaleImage.value * 2;
        }
    })

    const imageStyle = useAnimatedStyle(()=>{
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value)
        }
    })
    return (
        <GestureDetector gesture={drag}>
            <Animated.View style={containerStyle} className='-top-[350px]'>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image 
                        source={stickerSource}
                        resizeMode='cover'
                        style={[imageStyle, {width: imageSize, height: imageSize}]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    );
}