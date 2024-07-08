import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
// @ts-ignore
import PlaceHolderImage from "./assets/images/background-image.png";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import "./styles/tailwind.css"

export default function App(){
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, quality: 1
    })

    console.log("Hello World")
    if(!result.canceled){
      console.log(result);
    }else{
      alert('You did not select any image.')
    }
  };

  
  return (
    <View className="flex-[1] bg-[#25292e] items-center justify-center">
      <View className="flex-[1] pt-[58px]">
        <ImageViewer placeholderImage={PlaceHolderImage} />
      </View>
      <View className={`flex-[1/3] flex-col items-center justify-center`}>
        <Button onPress={pickImageAsync} theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="light" />
    </View>
  );
}