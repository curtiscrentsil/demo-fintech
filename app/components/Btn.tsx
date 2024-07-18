import React, { CSSProperties } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import P from "./P";

interface PProps {
  icon?: string;
  text?: string;
  styles?: CSSProperties;
}

const { width, height } = Dimensions.get("window");
export default function ({ text, icon }: PProps) {
  return (
    // @ts-ignore
    <TouchableOpacity style={[styles.btn, styles]}>
      {icon && <SvgXml xml={icon} style={{ marginRight: 8 }} />}
      {text && <P style={styles.btnText}>{text}</P>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    height: (6.5 * height) / 100,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "rgba(165, 161, 161, 1)",
    fontSize: 12,
    lineHeight: 18,
  },
});
