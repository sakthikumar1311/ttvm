import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { HorizontalPager } from './src/navigation/HorizontalPager';

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <HorizontalPager />
      <StatusBar style="dark" />
    </GestureHandlerRootView>
  );
}
