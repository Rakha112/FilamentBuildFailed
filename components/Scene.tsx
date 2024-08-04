import { StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  Camera,
  DefaultLight,
  FilamentView,
  Model,
  useCameraManipulator,
} from "react-native-filament";
import MyModel from "../assets/models/rocket.glb";

const Scene = () => {
  const { height } = useWindowDimensions();

  const cameraManipulator = useCameraManipulator({
    orbitHomePosition: [0, 0, 10], // "Camera location"
    targetPosition: [0, 1.5, 0], // "Looking at"
    orbitSpeed: [0.003, 0.003],
  });

  const panGesture = Gesture.Pan()
    .onBegin((event) => {
      const yCorrected = height - event.translationY;
      cameraManipulator?.grabBegin(event.translationX, yCorrected, false);
    })
    .onUpdate((event) => {
      const yCorrected = height - event.translationY;
      cameraManipulator?.grabUpdate(event.translationX, yCorrected);
    })
    .onEnd(() => {
      cameraManipulator?.grabEnd();
    });

  return (
    <GestureDetector gesture={panGesture}>
      <FilamentView style={{ flex: 1 }}>
        <Camera cameraManipulator={cameraManipulator} />
        <DefaultLight />
        <Model source={MyModel} />
      </FilamentView>
    </GestureDetector>
  );
};

export default Scene;

const styles = StyleSheet.create({});
