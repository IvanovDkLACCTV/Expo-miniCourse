//outer components
import { useState } from "react";
import { FlatList, StyleSheet, Platform, Pressable } from "react-native";
import { Image } from "expo-image";

type Props = {
    onSelect: (image: string) => void;
    onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
    const [emoji] = useState([
        require("../assets/images/emoji-2.png"),
        require("../assets/images/emoji-1.png"),
        require("../assets/images/emoji-3.png"),
        require("../assets/images/emoji-4.png"),
        require("../assets/images/emoji-5.png"),
        require("../assets/images/emoji-6.png"),
    ])

    return (
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={Platform.OS === "web" }
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => (
                <Pressable
                    onPress={() => {
                        onSelect(item)
                        onCloseModal()
                    }}
                >
                    <Image source={item} key={index} style={styles.image} />
                </Pressable>
            )}
            numColumns={3}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
})