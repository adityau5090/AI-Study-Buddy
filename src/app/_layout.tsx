import { Stack } from "expo-router";
import '../global.css'
import * as SplashScreen from "expo-splash-screen";
import {Uniwind} from "uniwind"
import { useEffect } from "react";
import * as SystemUI from "expo-system-ui"
import { ThemeProvider } from "@react-navigation/native";
import { navigationTheme } from "@/lib/theme";

const BACKGROUND = '#101010';

SplashScreen.preventAutoHideAsync();

Uniwind.setTheme("dark")

export const unstable_settings = {
  anchor: "(app)",
};

export default function RootLayout() {

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(BACKGROUND);
  }, [])

  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  return (
    <ThemeProvider value={navigationTheme}>
      <Stack 
        screenOptions={{ 
          headerShown: false,
          contentStyle: { backgroundColor: BACKGROUND }
        }}
      >
        <Stack.Screen name="(app)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </ThemeProvider>
  )
}
