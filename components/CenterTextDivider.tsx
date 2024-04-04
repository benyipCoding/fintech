import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

interface CenterTextDividerProps {
  text: string;
  textStyle: string;
}

const CenterTextDivider: React.FC<CenterTextDividerProps> = ({
  textStyle,
  text,
}) => {
  return (
    <View className="flex-row items-center gap-4 mt-0">
      <View
        className="flex-1"
        style={{
          height: StyleSheet.hairlineWidth,
          backgroundColor: Colors.dark,
        }}
      />
      <Text className={textStyle}>{text}</Text>
      <View
        className="flex-1"
        style={{
          height: StyleSheet.hairlineWidth,
          backgroundColor: Colors.dark,
        }}
      />
    </View>
  );
};

export default CenterTextDivider;
