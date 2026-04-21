import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Button } from "./Button";

interface IAddTodo {
  onAdd: (text: string) => void;
};

export const AddTodo = ({ onAdd }: IAddTodo) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <View className="flex-row mb-4">
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Нове завдання..."
        className="flex-1 border border-gray-300 rounded-xl px-3 py-2 mr-2"
      />

      <Button onPress={handleAdd} title="Додати"/>
    </View>
  );
};