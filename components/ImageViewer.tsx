import {Image} from "react-native";

export default function ImageView({placeholderImage, selectedImage}:any){
    const imageSource = selectedImage ? { uri: selectedImage } : placeholderImage;
    return (
        <Image source={imageSource} className="w-[320px] h-[440px] rounded-[18px]" />
    );
}