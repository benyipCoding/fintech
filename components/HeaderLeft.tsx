import { TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface HeaderLeftProps {
  headerLeftHandler: () => void;
}

const HeaderLeft: React.FC<HeaderLeftProps> = ({ headerLeftHandler }) => {
  return (
    <TouchableOpacity onPress={headerLeftHandler}>
      <Ionicons name="arrow-back" size={34} color={Colors.dark} />
    </TouchableOpacity>
  );
};

export default HeaderLeft;
