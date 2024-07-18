import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../config/Fonts";
import { SvgXml } from "react-native-svg";
import { svg } from "../config/Svg";
import SettingsScreen from "../screens/SettingsScreen";
import P from "../components/P";
import ReferralScreen from "../screens/ReferralScreen";

// Adjust the component and file names to match
const BottomTabNavigator = () => {
  const { width, height } = Dimensions.get("window");
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          height: 96,
          paddingBottom: 45,
          paddingTop: 8,
          backgroundColor: "#fff",
          elevation: 1,
          borderTopWidth: 1,
          borderTopColor: "rgba(255, 255, 255, 1)",
        },
        tabBarLabelStyle: {
          fontFamily: fonts.poppinsMedium,
          fontSize: 11,
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={SettingsScreen} // Ensure this matches the screen component name
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml xml={svg.homeActive} />
            ) : (
              <SvgXml xml={svg.home} />
            ),
          tabBarLabel: ({ focused }) => (
            <P
              style={{
                color: focused
                  ? "rgba(139, 82, 255, 1)"
                  : "rgba(165, 161, 161, 1)",
                fontFamily: fonts.poppinsMedium,
                fontSize: 12,
                marginTop: 4,
              }}
            >
              Home
            </P>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={SettingsScreen} // Ensure this matches the screen component name
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml xml={svg.settingsActive} />
            ) : (
              <SvgXml xml={svg.wallet} />
            ),
          tabBarLabel: ({ focused }) => (
            <P
              style={{
                color: focused
                  ? "rgba(139, 82, 255, 1)"
                  : "rgba(165, 161, 161, 1)",
                fontFamily: fonts.poppinsMedium,
                fontSize: 12,
                marginTop: 4,
              }}
            >
              Wallet
            </P>
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={ReferralScreen} // Ensure this matches the screen component name
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml xml={svg.settingsActive} />
            ) : (
              <SvgXml xml={svg.transaction} />
            ),
          tabBarLabel: ({ focused }) => (
            <P
              style={{
                color: focused
                  ? "rgba(139, 82, 255, 1)"
                  : "rgba(165, 161, 161, 1)",
                fontFamily: fonts.poppinsMedium,
                fontSize: 12,
                marginTop: 4,
              }}
            >
              Transaction
            </P>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen} // Ensure this matches the screen component name
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml xml={svg.settingsActive} />
            ) : (
              <SvgXml xml={svg.settings} />
            ),
          tabBarLabel: ({ focused }) => (
            <P
              style={{
                color: focused
                  ? "rgba(139, 82, 255, 1)"
                  : "rgba(165, 161, 161, 1)",
                fontFamily: fonts.poppinsMedium,
                fontSize: 12,
                marginTop: 4,
              }}
            >
              Settings
            </P>
          ),
        }}
      />
      {/* Add other Tab.Screen components here */}
      {/* Example:
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen} // Ensure this matches the screen component name
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml xml={svg.transactionFill} />
            ) : (
              <SvgXml xml={svg.transactionIcon} />
            ),
          tabBarLabel: ({ focused }) => (
            <P
              style={{
                color: focused
                  ? "rgba(139, 82, 255, 1)"
                  : "rgba(165, 161, 161, 1)",
                fontFamily: fonts.poppinsMedium,
                fontSize: 11,
                marginTop: 4,
              }}
            >
              Transactions
            </P>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomTabNavigator;
