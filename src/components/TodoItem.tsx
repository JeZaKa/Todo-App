import { View, Text, TouchableOpacity } from "react-native";
import { Todo } from "../types/todo";
import { Checkbox } from "./Checkbox";

interface ITodoItem {
  todo: Todo;
  onToggle: () => void;
  onRemove: () => void;
}

export const TodoItem = ({ todo, onToggle, onRemove }: ITodoItem) => {
  return (
    <View className="flex-row items-center justify-between p-3 border-b border-gray-200">
      <Checkbox checked={todo.completed} onToggle={onToggle} />
      <TouchableOpacity onPress={onToggle} className="flex-1 ml-3">
        <Text
          className={`text-base ${
            todo.completed ? "line-through text-gray-400" : "text-black"
          }`}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onRemove}>
        <Text className="text-red-500 ml-3 text-lg">✕</Text>
      </TouchableOpacity>
    </View>
  );
};