import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface ButtonProps extends PressableProps {
  label: string;
  className?: string;
  textClassName?: string;
  disabled?: boolean;
}

const Button = ({
  label,
  onPress,
  className,
  textClassName,
  disabled,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      className={`w-full items-center justify-center py-4 rounded-md ${
        disabled ? "bg-gray-300 opacity-50" : "bg-primary active:opacity-80"
      }`}
    >
      <Text
        className={`font-roboto text-xl ${
          disabled ? "text-gray-500" : "text-white"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
