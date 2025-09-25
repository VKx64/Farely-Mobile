import Button from "@/components/Button";
import InputFields from "@/components/InputFields";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View, Alert } from "react-native";

// SVG Imports

const register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailOrPhone: "",
    password: "",
  });

  const handleRegister = () => {
    // Basic validation
    if (!formData.firstName.trim()) {
      Alert.alert("Error", "Please enter your first name");
      return;
    }
    if (!formData.lastName.trim()) {
      Alert.alert("Error", "Please enter your last name");
      return;
    }
    if (!formData.emailOrPhone.trim()) {
      Alert.alert("Error", "Please enter your email or phone number");
      return;
    }
    if (!formData.password.trim()) {
      Alert.alert("Error", "Please enter a password");
      return;
    }
    if (formData.password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    console.log("Registration data:", formData);
    router.navigate('/otp');
  };

  return (
    <View className="px-8 flex-col gap-2 flex pt-32 bg-white w-full h-full">
      {/* Login */}
      <Text className="text-5xl font-robotobold text-primary_text leading-relaxed text-center font-Roboto">
        Sign up
      </Text>

      {/* Description */}
      <Text className="font-quicksand text-primary_text text-md text-center px-14 mt-1">
        Create your account
      </Text>

      {/* Credential Inputs */}
      <View className="w-full flex-col mt-5 gap-4">
        <InputFields 
          placeholder="First Name" 
          value={formData.firstName}
          onChangeText={(text) => setFormData(prev => ({...prev, firstName: text}))}
          autoCapitalize="words"
        />
        <InputFields 
          placeholder="Last Name" 
          value={formData.lastName}
          onChangeText={(text) => setFormData(prev => ({...prev, lastName: text}))}
          autoCapitalize="words"
        />
        <InputFields 
          placeholder="Email or Phone Number" 
          value={formData.emailOrPhone}
          onChangeText={(text) => setFormData(prev => ({...prev, emailOrPhone: text}))}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <InputFields 
          placeholder="Password" 
          value={formData.password}
          onChangeText={(text) => setFormData(prev => ({...prev, password: text}))}
          secureTextEntry={true}
        />
      </View>

      {/* Register Button */}
      <View className="w-full mt-5">
        <Button label="Sign up" onPress={handleRegister} />
      </View>

      {/* Already Have an Account? */}
      <View className="w-full flex-row justify-center gap-1 my-2">
        <Text className="font-roboto">Already have an account?</Text>
        <Link href={"/login"}>
          <Text className="text-primary underline font-roboto">
            Sign in here
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default register;
