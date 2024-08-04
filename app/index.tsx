import React from "react";
import { FilamentScene } from "react-native-filament";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Scene from "@/components/Scene";

const Index = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FilamentScene>
        <Scene />
      </FilamentScene>
    </GestureHandlerRootView>
  );
};

export default Index;
