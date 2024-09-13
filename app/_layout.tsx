import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    SFProRoundedBlack: require("../assets/fonts/SF-Pro-Fonts/SF-Pro-Rounded-Black.otf"),
    SFProRoundedRegular: require("../assets/fonts/SF-Pro-Fonts/SF-Pro-Rounded-Regular.otf"),
    SFProRoundedMedium: require("../assets/fonts/SF-Pro-Fonts/SF-Pro-Rounded-Medium.otf"),
    SFProRoundedSemiBold: require("../assets/fonts/SF-Pro-Fonts/SF-Pro-Rounded-Semibold.otf"),
    SFProRoundedLight: require("../assets/fonts/SF-Pro-Fonts/SF-Pro-Rounded-Light.otf"),
    SFProRoundedThin: require("../assets/fonts/SF-Pro-Fonts/SF-Pro-Rounded-Thin.otf"),
    SFProRoundedBold: require("../assets/fonts/SF-Pro-Fonts/SF-Pro-Rounded-Bold.otf"),
    SFProRoundedHeavy: require("../assets/fonts/SF-Pro-Fonts/SF-Pro-Rounded-Heavy.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
