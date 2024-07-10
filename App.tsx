import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
// @ts-ignore
import PlaceHolderImage from "./assets/images/background-image.png";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import "./styles/tailwind.css"
import { useEffect, useRef, useState } from "react";
import CircleButton from "./components/CircleButton";
import IconButton from "./components/IconButton";
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from "./components/EmojiList";
import EmojiSticker from "./components/EmojiSticker";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import {captureRef} from 'react-native-view-shot';
import DomToImage from "dom-to-image";


export default function App(){
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<any>();
  const [pickedEmoji, setPickedEmoji] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  if(status === null){
    requestPermission();
  }



  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, quality: 1
    })

    console.log("Hello World")
    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    }else{
      alert('You did not select any image.')
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  const onSaveImageAsync = async () => {
    // Will be implemented later
    if(Platform.OS !== 'web'){
      try{
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
  
        await MediaLibrary.saveToLibraryAsync(localUri);
        if(localUri){
          alert("Saved!");
        }
      }catch(e){
        console.log(e);
      }
    }else{
      try{
        const dataUrl = await DomToImage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440
        })

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      }catch(e){
        console.log(e);
      }
    }
    }

  useEffect(()=>{
    console.log("Hi there");
  }, []);
  return (
    <GestureHandlerRootView className="flex-[1] bg-[#25292e] items-center">
      <View className="flex-[1] bg-[#25292e] items-center justify-center">
        {/* @ts-ignore */}
        <View ref={imageRef} collapsable={false} className="flex-[1] pt-[58px]">
          <ImageViewer
            ref={imageRef}
            placeholderImage={PlaceHolderImage} 
            selectedImage={selectedImage}
          />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
        {showAppOptions ? (
          <View className="optionsContainer absolute bottom-20">
            <View className="optionsRow items-center flex-row">
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker}  />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        ): (
          <View className={`flex-[1/3] flex-col items-center justify-center`}>
            <Button onPress={pickImageAsync} theme="primary" label="Choose a photo" />
            <Button label="Use this photo" onPress={()=>setShowAppOptions(true)} />
          </View>  
        )}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} >
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
        <StatusBar style="light" />
      </View>
    </GestureHandlerRootView>
  );
}