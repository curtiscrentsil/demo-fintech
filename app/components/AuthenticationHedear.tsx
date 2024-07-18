import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { CSSProperties } from "react";
import { Feather } from "@expo/vector-icons";
import P from "./P";
import { fonts } from "../config/Fonts";
import { SvgXml } from "react-native-svg";
import { svg } from "../config/Svg";
const { width, height } = Dimensions.get("window");

interface PProps {
  navigation?: any;
  text?: string;
  iconComp?: any;
  contStyle?: CSSProperties;
  navStyle?: CSSProperties;
  showBorder?: boolean;
}

export default function AuthenticationHedear({
  navigation,
  text,
  iconComp,
  contStyle,
  navStyle,
  showBorder,
}: PProps) {
  return (
    // @ts-ignore
    <View style={[styles.navCont, contStyle, showBorder && styles.navBorder]}>
      {/* @ts-ignore */}
      <View style={[styles.nav, navStyle]}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
        >
          <SvgXml xml={svg.goBackIcon} />
        </TouchableOpacity>
        <P style={styles.navText}>{text}</P>
        <P style={styles.navText}> </P>
        {iconComp}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navCont: {
    width,
    height: 24,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
    // backgroundColor:"green",
  },
  nav: {
    width: "90%",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    // justifyContent: "space-between",
    paddingTop: 2,
  },
  navText: {
    // fontSize: (4.5 * width) / 100,
    color: "#000",
    fontFamily: fonts.poppinsMedium,
    marginLeft: 12,
  },
  navBorder: {
    borderBottomWidth: 1,
    borderColor: "#313030",
  },
});
