import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import clsx from "clsx";
import CenterTextDivider from "@/components/CenterTextDivider";
import { Ionicons } from "@expo/vector-icons";

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Signin = () => {
  const [contryCode, setContryCode] = useState("+49");
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;

  const onSignIn = async (type: SignInType) => {
    if (type === SignInType.Phone) {
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcom back!</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number associated with your account
        </Text>
        {/* Input container */}
        <View className="my-10 flex-row">
          <TextInput
            className="bg-gray-200 p-5 rounded-2xl text-xl mr-3 leading-6"
            placeholder="Contry code"
            keyboardType="numeric"
            value={contryCode}
          />
          <TextInput
            className="flex-1 bg-gray-200 p-5 rounded-2xl text-xl leading-6"
            placeholder="Mobile number"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={(value) => setPhoneNumber(value)}
          />
        </View>
        {/* Submit btn */}
        <TouchableOpacity
          className={clsx(
            "mt-0 bg-gray-300",
            phoneNumber !== "" && `bg-slate-800`
          )}
          style={[defaultStyles.pillButton]}
          onPress={() => onSignIn(SignInType.Phone)}
        >
          <Text style={defaultStyles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <CenterTextDivider textStyle="text-gray-500 text-xl" text="or" />

        <TouchableOpacity
          className="bg-white flex-row mt-5 shadow-sm"
          style={defaultStyles.pillButton}
          onPress={() => onSignIn(SignInType.Email)}
        >
          <Ionicons name="mail" size={24} color={"#000"} />
          <Text
            className="text-black font-medium text-lg ml-4"
            // style={[defaultStyles.buttonText]}
          >
            Continue with email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-white flex-row mt-5 shadow-sm"
          style={defaultStyles.pillButton}
          onPress={() => onSignIn(SignInType.Email)}
        >
          <Ionicons name="logo-google" size={24} color={"#000"} />
          <Text
            className="text-black font-medium text-lg ml-4"
            // style={[defaultStyles.buttonText]}
          >
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-white flex-row mt-5 shadow-sm"
          style={defaultStyles.pillButton}
          onPress={() => onSignIn(SignInType.Email)}
        >
          <Ionicons name="logo-apple" size={24} color={"#000"} />
          <Text
            className="text-black font-medium text-lg ml-4"
            // style={[defaultStyles.buttonText]}
          >
            Continue with Apple
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signin;
