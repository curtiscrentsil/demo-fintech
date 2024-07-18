import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import P from "./P";
import { SvgXml } from "react-native-svg";
import { svg } from "../config/Svg";

const { width, height } = Dimensions.get("window");

interface PProps {
  showBorder?: Boolean;
  text?: string;
  icon?: string;
  onPress?: any;
}

export default function ListItemBtn({
  showBorder = true,
  text,
  icon,
  onPress,
}: PProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnCont, { borderBottomWidth: showBorder ? 1 : 0 }]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {icon && <SvgXml xml={icon} />}
        {text && <P style={{ fontSize: 12, marginLeft: 8 }}>{text}</P>}
      </View>
      <SvgXml xml={svg.arroveRight} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnCont: {
    width: "90%",
    // height: 52,
    height: 52,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "rgba(240, 239, 239, 1)",
  },
});
