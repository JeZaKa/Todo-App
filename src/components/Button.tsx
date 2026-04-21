import { TouchableOpacity, Text, ViewStyle } from "react-native";

interface IButton {
  title: string;
  onPress: () => void;
  variant?: "primary" | "danger";
  style?: ViewStyle;
}

export const Button = ({
  title,
  onPress,
  variant = "primary",
}: IButton) => {
  const baseStyle = "px-4 py-2 rounded-xl items-center justify-center";

  const variants = {
    primary: "bg-blue-500",
    danger: "bg-red-500",
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${baseStyle} ${variants[variant]}`}
      activeOpacity={0.8}
    >
      <Text className="text-white font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};
