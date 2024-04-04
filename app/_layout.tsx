import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Link, Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import HeaderLeft from "@/components/HeaderLeft";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const options: NativeStackNavigationOptions = {
  title: "",
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: Colors.background,
  },
};

function RootLayoutNav() {
  const router = useRouter();
  const headerLeftHandler = () => {
    router.back();
  };

  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="signup"
          options={{
            ...options,
            headerLeft: () => (
              <HeaderLeft headerLeftHandler={headerLeftHandler} />
            ),
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            ...options,
            headerLeft: () => (
              <HeaderLeft headerLeftHandler={headerLeftHandler} />
            ),
            headerRight: () => (
              <Link href={"/help"} asChild>
                <TouchableOpacity>
                  <Ionicons
                    name="help-circle-outline"
                    size={28}
                    color={Colors.dark}
                  />
                </TouchableOpacity>
              </Link>
            ),
          }}
        />
        <Stack.Screen
          name="help"
          options={{ title: "help", presentation: "modal" }}
        />
      </Stack>
    </>
  );
}
