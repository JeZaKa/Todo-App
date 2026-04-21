import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import TodoScreen from './src/screens/TodoScreen';
import "./global.css";

export default function App() {
  return (
    <>
      <TodoScreen />
      <StatusBar style="auto" />
    </>
  );
}

