import { View, Text, TouchableOpacity } from "react-native";

interface ICheckbox {
  checked: boolean;
  onToggle: () => void;
}

export const Checkbox = ({ checked, onToggle }: ICheckbox) => {
  return (
    <TouchableOpacity onPress={onToggle}>
      <View
        className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
          checked
            ? "bg-green-500 border-green-500"
            : "border-gray-400"
        }`}
      >
        {checked && (
          <Text className="text-white text-xs font-bold">✓</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};