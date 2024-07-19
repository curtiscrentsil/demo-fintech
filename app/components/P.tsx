import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { CSSProperties } from "react";
import { fonts } from "../config/Fonts";
const { width, height } = Dimensions.get("window");

interface PProps {
  children: any;
  style?: CSSProperties;
}

export default function P({ children, style }: PProps) {
  return (
    <Text
      style={[
        {
          fontFamily: fonts.poppinsMedium,
          fontSize: 16,
          color: "rgba(22, 24, 23, 1)",
          lineHeight: 18,
          letterSpacing: 0,
        },
        // @ts-ignore
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});
