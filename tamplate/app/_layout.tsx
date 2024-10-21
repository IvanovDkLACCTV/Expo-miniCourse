import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
<<<<<<< HEAD
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Sticker Smash" }} />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
    </Stack>
=======
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </>
>>>>>>> 69075147b7ec145a988d5f0ddd35563379254912
  );
}
