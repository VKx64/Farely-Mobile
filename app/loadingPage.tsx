import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View, Image } from "react-native";

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    // Simulate loading time and then navigate to auth
    const timer = setTimeout(() => {
      router.replace("/(auth)/login");
    }, 2000); // 2 second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-primary_bg">
      <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
        <Image
          source={require("../assets/images/farely-logo.png")}
          className="w-20 h-20"
          resizeMode="contain"
        />
      </View>
      <Text className="text-2xl font-robotobold text-primary_text">Farely</Text>
      <Text className="text-base font-quicksand text-primary_text mt-2">
        Loading...
      </Text>
    </View>
  );
}
