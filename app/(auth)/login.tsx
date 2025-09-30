import AuthIcon from "@/components/AuthIcon";
import Button from "@/components/Button";
import InputFields from "@/components/InputFields";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";
import { ArrowDownUp, EyeOff, LockKeyhole, Mail } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

// SVG Imports
import FacebookIcon from "@/assets/icons/facebook.svg";
import GoogleIcon from "@/assets/icons/google.svg";

const login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Login button pressed");
  };

  return (
    <View className="px-8 flex-col gap-2 flex pt-32 bg-white w-full h-full">
      {/* Login */}
      <Text className="text-5xl font-robotobold text-primary_text leading-relaxed text-center font-Roboto">
        Log in
      </Text>

      {/* Description */}
      <Text className="font-quicksand text-primary_text text-md text-center px-14 mt-1">
        Enter your email and password to securely access your account
      </Text>

      {/* Credential Inputs */}
      <View className="w-full flex-col mt-5 gap-4">
        <InputFields icon={Mail} placeholder="Email" endIcon={ArrowDownUp} />
        <InputFields
          icon={LockKeyhole}
          placeholder="Password"
          endIcon={EyeOff}
        />
      </View>

      {/* Quicklinks */}
      {/* Accessibility: clicking the entire view will tick the checkbox */}
      <View className="w-full h-fit flex-row mt-1">
        <Pressable
          onPress={() => setRememberMe(!rememberMe)}
          className="flex-row flex-1 gap-2 items-center"
        >
          <Checkbox
            value={rememberMe}
            onValueChange={setRememberMe}
            color={"#4067AD"}
            style={{ width: 16, height: 16 }}
          />
          <Text className="text-md text-primary font-roboto">Remember Me</Text>
        </Pressable>
        <Text className="text-md text-primary font-roboto">
          Forgot Password?
        </Text>
      </View>

      {/* Login Button */}
      <View className="w-full mt-5">
        <Button label="Log in" onPress={handleLogin} />
      </View>

      {/* Dont Have an Account? */}
      <View className="w-full flex-row justify-center gap-1 my-2">
        <Text className="font-roboto">Don't have an account?</Text>
        <Link href={"/userTypeSelection"}>
          <Text className="text-primary underline font-roboto">
            Sign up here
          </Text>
        </Link>
      </View>

      {/* Divider */}
      <View className="flex-row items-center my-2">
        <View className="flex-1 h-[0.8px] bg-primary" />
      </View>

      {/* Or Continue With Account */}
      <Text className="text-center font-roboto">or continue with account</Text>

      {/* Auth Icons */}
      <View className="flex-row justify-center gap-5 mt-6">
        {/* Facebook */}
        <AuthIcon onPress={() => console.log("Facebook login pressed")}>
          <FacebookIcon width={48} height={48} />
        </AuthIcon>
        {/* Google */}
        <AuthIcon onPress={() => console.log("Google login pressed")}>
          <GoogleIcon width={48} height={48} />
        </AuthIcon>
      </View>
    </View>
  );
};

export default login;
