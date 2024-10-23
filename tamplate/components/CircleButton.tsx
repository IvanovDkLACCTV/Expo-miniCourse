import { View, StyleSheet, Pressable } from "react-native";
import  MaterialIcons  from "@expo/vector-icons/MaterialIcons";

type Props = {
    onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
    return (
        <View style={styles.circleButtonContainer}>
            <Pressable
                style={styles.circleButton}
                onPress={onPress}
            >
                <MaterialIcons
                    name="add"
                    size={38}
                    color="#25292e"
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
    },
    circleButton: {
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#009688",
    },
});