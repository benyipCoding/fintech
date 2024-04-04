import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { Video, ResizeMode } from "expo-av";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

  return (
    <View className="flex-1 justify-between">
      {assets && (
        <Video
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          className="w-full h-full absolute z-0"
          resizeMode={ResizeMode.COVER}
        />
      )}
      <View className="mt-20 p-5">
        <Text className="text-white text-4xl font-extrabold uppercase">
          Ready to change the way you money?
        </Text>
      </View>

      <View className="flex-row justify-center gap-5 mb-14">
        <Link
          href={"/login"}
          asChild
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
        >
          <TouchableOpacity>
            <Text className="text-white font-semibold text-2xl">Login in</Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={"/signup"}
          asChild
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: "white" },
          ]}
        >
          <TouchableOpacity>
            <Text className="text-black font-semibold text-2xl">Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Page;
