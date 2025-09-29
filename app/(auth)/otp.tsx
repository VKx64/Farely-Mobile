import Button from "@/components/Button";
import OtpInput from "@/components/OtpInput";
import React, { useState } from "react";
import { Text, View, Alert } from "react-native";

const otp = () => {
  const [otpCode, setOtpCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = () => {
    if (otpCode.length !== 6) {
      Alert.alert("Error", "Please enter the complete 6-digit OTP code");
      return;
    }
    
    setIsLoading(true);
    console.log("OTP Code:", otpCode);
    // TODO: Implement OTP verification API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to next step or home screen
    }, 2000);
  };

  const handleResendOTP = () => {
    console.log("Resending OTP...");
    // TODO: Implement resend OTP API call
  };

  return (
    <View className="px-8 flex-col gap-2 flex pt-32 bg-white w-full h-full">
      {/* OTP */}
      <Text className="text-4xl font-robotobold text-primary_text leading-relaxed text-center font-Roboto">
        One-Time Password
      </Text>

      {/* Description */}
      <Text className="font-quicksand text-primary_text text-md text-center px-14 mt-1">
        Enter your OTP code to{"\n"}continue
      </Text>

      {/* OTP Input */}
      <View className="w-full mt-5">
        <OtpInput 
          onTextChange={(code) => {
            setOtpCode(code);
            console.log("OTP Code:", code);
          }} 
        />
      </View>

      {/* Dont Have an Account? */}
      <View className="w-full flex-row justify-center gap-1 my-2">
        <Text className="font-roboto">Didn't get the code?</Text>
        <Text 
          className="text-primary underline font-roboto"
          onPress={handleResendOTP}
        >
          Resend it
        </Text>
      </View>

      {/* Login Button */}
      <View className="w-full mt-5">
        <Button 
          label={isLoading ? "Verifying..." : "Continue"} 
          onPress={handleContinue}
          className={isLoading ? "opacity-70" : ""}
        />
      </View>
    </View>
  );
};

export default otp;
