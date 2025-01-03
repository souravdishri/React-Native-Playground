import { Stack } from "expo-router";
//we can use this to make sure our app is not hidden by the notch on some devices
import { SafeAreaProvider } from "react-native-safe-area-context";  

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}