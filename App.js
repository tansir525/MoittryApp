import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import SingleProductScreen from "./src/Screens/SingleProductScreen";
export default function App() {
  return (
    <NativeBaseProvider>
      <SingleProductScreen />
    </NativeBaseProvider>
  );
}
