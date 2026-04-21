import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { TodoItem } from '../components/TodoItem';
import { useTodos } from '../hooks/useTodos';
import { Button } from '../components/Button';

const TodoScreen = () => {
  const { todos, addTodo, removeTodo, toggleTodo, clearTodos } = useTodos();

  const allTodos = todos.length;
  const completedTodos = todos.filter((item) => item.completed).length;

  return (
    <View className="flex-1 bg-gray-100 px-4 pt-14">
      <Text className="text-3xl font-bold text-gray-900 mb-6">To-Do</Text>
      <AddTodo onAdd={addTodo} />
      <View className="flex-row justify-between items-center mt-4 mb-2">
        <View className="flex-row items-center gap-2">
          <Text className="text-gray-500">Усього: {allTodos}</Text>
          <Text className="text-gray-500">Виконано: {completedTodos}</Text>
        </View>
        <Button title="Видалити все" variant="danger" onPress={clearTodos} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
        ItemSeparatorComponent={() => <View className="h-2" />}
        renderItem={({ item }) => (
          <View className="bg-white rounded-xl shadow-sm">
            <TodoItem
              todo={item}
              onToggle={() => toggleTodo(item.id)}
              onRemove={() => removeTodo(item.id)}
            />
          </View>
        )}
        ListEmptyComponent={
          <View className="mt-20 items-center">
            <Text className="text-gray-400 text-base">Тут поки порожньо</Text>
            <Text className="text-gray-300 text-sm mt-1">Створи своє перше завдання ✍️</Text>
          </View>
        }
      />
    </View>
  );
};

export default TodoScreen;
