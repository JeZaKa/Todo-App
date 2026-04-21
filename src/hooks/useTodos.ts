import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Todo } from "../types/todo";
import { nanoid } from "nanoid/non-secure";
const STORAGE_KEY = "todos";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        if (data) {
          setTodos(JSON.parse(data));
        }
      } catch (e) {
        console.log("Load error", e);
      }
    };

    loadTodos();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos((prev) => [
      ...prev,
      { id: nanoid(), text, completed: false },
    ]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return { todos, addTodo, removeTodo, toggleTodo, clearTodos };
};