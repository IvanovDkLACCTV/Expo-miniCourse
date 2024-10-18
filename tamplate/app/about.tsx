import {Text, View, StyleSheet} from 'react-native'
import {Link} from "expo-router"

export default function AboutScreen () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
            <Link href="/">Home</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e",
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    }
})