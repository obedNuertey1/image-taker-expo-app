import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
// @ts-ignore
import PlaceHolderImage from "./assets/images/background-image.png";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

export default function App(){
  return (
    <View className="flex-[1] bg-[#25292e] items-center justify-center">
      <View className="flex-[1] pt-[58px]">
        <ImageViewer placeholderImage={PlaceHolderImage} />
      </View>
      <View className="flex-[1/3] flex-col h-1/3 items-center justify-center">
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="light" />
    </View>
  );
}