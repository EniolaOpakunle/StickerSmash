import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View, Text} from "react-native";
// import React from 'react';

function _layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  )
}

export default _layout