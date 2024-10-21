import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Link href="/about" style={styles.button}>Go to About Screen</Link>
      <Link href={"/_sitemap"}> Sitemap</Link>
    </View>
  );
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
  },
  button: {
<<<<<<<< HEAD:tamplate/app/index.tsx
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  }
========
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
>>>>>>>> 69075147b7ec145a988d5f0ddd35563379254912:tamplate/app/(tabs)/index.tsx
});
