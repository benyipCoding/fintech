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
import { Link } from "expo-router";
import clsx from "clsx";

const Signup = () => {
  const [contryCode, setContryCode] = useState("+49");
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;

  const onSignup = async () => {};

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Let's get started!</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number. We will send you a confirmation code there
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
        {/* Link */}
        <Link href={"/login"} asChild replace>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>
              Already have an account? Log in.
            </Text>
          </TouchableOpacity>
        </Link>

        <View className="flex-1"></View>

        {/* Submit btn */}
        <TouchableOpacity
          className={clsx(
            "mt-5 bg-gray-300",
            phoneNumber !== "" && `bg-slate-800`
          )}
          style={[defaultStyles.pillButton]}
          onPress={onSignup}
        >
          <Text style={defaultStyles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
