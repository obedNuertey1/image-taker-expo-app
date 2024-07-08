import {Image} from "react-native";

export default function ImageView({placeholderImage}:any){
    return (
        <Image source={placeholderImage} className="w-[320px] h-[440px] rounded-[18px]" />
    );
}