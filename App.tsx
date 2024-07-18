import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen1 from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BillPaymentScreen from "./app/screens/BillPaymentScreen";
import SettingScreen from "./app/screens/SettingsScreen";
import BottomTabNavigator from "./app/navigation/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [fontsLoaded] = useFonts({
    "poppins-bold": require("./app/assets/fonts/Poppins-Bold.ttf"),
    "poppins-semibold": require("./app/assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-medium": require("./app/assets/fonts/Poppins-Medium.ttf"),
    "poppins-regular": require("./app/assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (appReady) {
      SplashScreen1.hideAsync();
    }
  }, [appReady]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen1.hideAsync();
    }
  }, [fontsLoaded]);

  if (!appReady) {
    SplashScreen1.preventAutoHideAsync();
  }
  if (!fontsLoaded) {
    console.log("not done");
    return null;
  }
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
