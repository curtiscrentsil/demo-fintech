import React, { CSSProperties } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { fonts } from "../config/Fonts";
import P from "./P";
import { svg } from "../config/Svg";
import { SvgXml } from "react-native-svg";

interface PProps {
  text?: string;
  icon?: string;
  onPress?: any;
  style?: CSSProperties;
}

export default function MicroBtn({ text, icon, onPress, style }: PProps) {
  return (
    // @ts-ignore
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      {icon && <SvgXml xml={icon} />}
      {text && <P style={styles.p}>{text}</P>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
  },
  p: {
    marginTop: 8,
    fontSize: 12,
  },
});
