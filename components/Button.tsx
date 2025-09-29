import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface ButtonProps extends PressableProps {
  label: string;
  className?: string;
  textClassName?: string;
}

const Button = ({ label, onPress, className, textClassName, ...props }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`w-full bg-primary items-center justify-center py-4 rounded-md active:opacity-80 ${className || ''}`}
      {...props}
    >
      <Text className={`text-white font-roboto text-xl ${textClassName || ''}`}>
        {label}
      </Text>
    </Pressable>
  )
}

export default Button