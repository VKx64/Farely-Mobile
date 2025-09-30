import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { Car, Users } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

const UserTypeSelection = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<
    "rider" | "passenger" | null
  >(null);

  const handleContinue = () => {
    if (selectedType) {
      // You can pass the selected user type to the register page
      router.push({
        pathname: "/register",
        params: { userType: selectedType },
      });
    }
  };

  const UserTypeCard = ({
    type,
    title,
    description,
    icon: Icon,
    isSelected,
    onPress,
  }: {
    type: "rider" | "passenger";
    title: string;
    description: string;
    icon: any;
    isSelected: boolean;
    onPress: () => void;
  }) => (
    <Pressable
      onPress={onPress}
      className={`w-full p-6 rounded-2xl border-2 mb-4 ${
        isSelected ? "border-primary bg-primary/10" : "border-gray-200 bg-white"
      }`}
    >
      <View className="items-center">
        <View
          className={`w-16 h-16 rounded-full items-center justify-center mb-3 ${
            isSelected ? "bg-primary" : "bg-gray-100"
          }`}
        >
          <Icon size={32} color={isSelected ? "white" : "#6B7280"} />
        </View>
        <Text
          className={`text-xl font-robotobold mb-2 ${
            isSelected ? "text-primary" : "text-primary_text"
          }`}
        >
          {title}
        </Text>
        <Text className="text-center font-quicksand text-gray-600 text-sm">
          {description}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View className="px-8 flex-col gap-2 flex pt-32 bg-white w-full h-full">
      {/* Title */}
      <Text className="text-4xl font-robotobold text-primary_text leading-relaxed text-center">
        Join as
      </Text>

      {/* Description */}
      <Text className="font-quicksand text-primary_text text-md text-center px-8 mt-1 mb-8">
        Choose how you want to use Farely
      </Text>

      {/* User Type Selection Cards */}
      <View className="w-full flex-col mt-5">
        <UserTypeCard
          type="rider"
          title="Rider"
          description="Offer rides and earn money by driving passengers to their destinations"
          icon={Car}
          isSelected={selectedType === "rider"}
          onPress={() => setSelectedType("rider")}
        />

        <UserTypeCard
          type="passenger"
          title="Passenger"
          description="Book rides and travel comfortably to your destination"
          icon={Users}
          isSelected={selectedType === "passenger"}
          onPress={() => setSelectedType("passenger")}
        />
      </View>

      {/* Continue Button */}
      <View className="w-full mt-8">
        <Button
          label="Continue"
          onPress={handleContinue}
          disabled={!selectedType}
        />
      </View>

      {/* Back to Login */}
      <Pressable
        onPress={() => router.back()}
        className="w-full items-center mt-4"
      >
        <Text className="font-roboto text-primary">Back to Login</Text>
      </Pressable>
    </View>
  );
};

export default UserTypeSelection;
