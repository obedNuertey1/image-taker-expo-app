import { useState } from "react";
import {StyleSheet, FlatList, Image, Platform, Pressable} from 'react-native';

export default function EmojiList({onSelect, onCloseModal}:any){
    const emoji:any = useState([
        require('../assets/images/emoji1.png'),
        require('../assets/images/emoji2.png'),
        require('../assets/images/emoji3.png'),
        require('../assets/images/emoji4.png'),
        require('../assets/images/emoji5.png'),
        require('../assets/images/emoji6.png')
    ]);

    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web'}
            data={emoji[0]}
            contentContainerStyle={styles.listContainer}
            // className="listContainer rounded-tr-[10px] rounded-tl-[10px] pr-[20px] flex-row items-center justify-between"
            renderItem={({item, index}:any)=>(
                <Pressable
                    onPress={()=>{
                        onSelect(item);
                        onCloseModal();
                    }}
                >
                    <Image source={item} key={index} className="image w-[100px] h-[100px] mr-5" />
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})