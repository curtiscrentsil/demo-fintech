import React, { CSSProperties } from "react";
import { View, StyleSheet, Image } from "react-native";
import P from "./P";
import MicroBtn from "./MicroBtn";
import { svg } from "../config/Svg";
import { fonts } from "../config/Fonts";

interface PProps {
  showStatus?: Boolean;
  text1?: string;
  showName?: string;
  text1Style?: CSSProperties;
  icon1?: any;
  icon2?: any;
}
export default function UserHeader({
  showStatus = true,
  text1 = "Martins Chidume",
  showName,
  text1Style,
  icon1 = svg.barCode,
  icon2 = svg.notification,
}: PProps) {
  return (
    <View style={styles.cont}>
      <View style={styles.mainCont}>
        <View style={styles.content1}>
          <Image
            source={require("../assets/avatar.png")}
            style={{ width: 38, height: 38 }}
          />
          <View style={styles.info}>
            <P
              // @ts-ignore
              style={[
                {
                  fontSize: 14,
                  color: "rgba(22, 24, 23, 1)",
                  lineHeight: 21,
                  marginBottom: 4,
                },
                text1Style,
              ]}
            >
              {text1}
            </P>
            {showStatus && (
              <View style={styles.statusCont}>
                <P style={{ fontSize: 12, color: "rgba(201, 4, 4, 1)" }}>
                  Not verified
                </P>
              </View>
            )}
            {showName && (
              <P
                style={{
                  fontSize: 14,
                  color: "#fff",
                  fontFamily: fonts.poppinsRegular,
                }}
              >
                {showName}
              </P>
            )}
          </View>
        </View>
        <View style={styles.content2}>
          <MicroBtn icon={icon1} style={{ marginRight: 8 }} />
          <MicroBtn icon={icon2} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    width: "100%",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 12,
  },
  mainCont: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  content1: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  content2: {
    width: 72,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    // alignItems: 'center',
  },
  info: {
    marginLeft: 12,
  },
  statusCont: {
    width: 101,
    height: 20,
    backgroundColor: "#fff",
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
});
