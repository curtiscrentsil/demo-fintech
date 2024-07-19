import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import ReferralScreen from "../screens/ReferralScreen";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{
            headerTransparent: true,
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ReferralScreen"
          component={ReferralScreen}
          options={{
            headerTransparent: true,
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
