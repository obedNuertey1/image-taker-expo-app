import { StatusBar } from "expo-status-bar";
import { Platform, View, LogBox } from "react-native";
// @ts-ignore
import PlaceHolderImage from "./assets/images/background-image.png";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import "./styles/tailwind.css"
import { useEffect, useState } from "react";

LogBox.ignoreLogs(['Warning: ...']);

export default function App(){
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
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

  useEffect(()=>{
    console.log("Hi there");
  }, []);
  return (
    <View className="flex-[1] bg-[#25292e] items-center justify-center">
      <View className="flex-[1] pt-[58px]">
        <ImageViewer 
          placeholderImage={PlaceHolderImage} 
          selectedImage={selectedImage}
        />
      </View>
      {showAppOptions ? (
        <View />
      ): (
        <View className={`flex-[1/3] flex-col items-center justify-center`}>
          <Button onPress={pickImageAsync} theme="primary" label="Choose a photo" />
          <Button label="Use this photo" onPress={()=>setShowAppOptions(true)} />
        </View>  
      )}
      <StatusBar style="light" />
    </View>
  );
}