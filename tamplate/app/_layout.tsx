import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index-2" options={{ headerTitle: "Home" }} />
      <Stack.Screen name="about" />
    </Stack>
  );
}
