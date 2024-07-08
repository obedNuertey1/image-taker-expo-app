import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
// @ts-ignore
import PlaceHolderImage from "./assets/images/background-image.png";
import ImageViewer from "./components/ImageViewer";

export default function App(){
  return (
    <View className="flex flex-1 bg-[#25292e] items-center justify-center">
      <View className="flex flex-1 pt-[58px]">
        <ImageViewer placeholderImage={PlaceHolderImage} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}