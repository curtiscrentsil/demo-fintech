import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { fonts } from "../config/Fonts";
import Div from "../components/Div";
import AuthenticationHedear from "../components/AuthenticationHedear";
import { SvgXml } from "react-native-svg";
import { svg } from "../config/Svg";
import P from "../components/P";
import MicroBtn from "../components/MicroBtn";

const { width, height } = Dimensions.get("window");

export default function ReferralScreen() {
  return (
    <View style={styles.body}>
      <Div>
        <AuthenticationHedear text="Referral" />
        <View style={styles.contentBody}>
          <View style={styles.mainCont}>
            <P
              style={{
                marginTop: 34,
                fontSize: 28,
                lineHeight: 42,
                fontFamily: fonts.poppinsBold,
                textAlign: "center",
              }}
            >
              Refer friends!
            </P>
            <P
              style={{
                textAlign: "center",
                fontSize: 14,
                marginTop: 8,
                fontFamily: fonts.poppinsRegular,
              }}
            >
              Use your referral code to invite your friends and earn once they
              join, verify and fund their account
            </P>
            <Image
              source={require("../assets/giftBox.png")}
              style={{ width: 135, height: 114.21, marginTop: 24 }}
            />
            <P
              style={{
                fontSize: 12,
                fontFamily: fonts.poppinsRegular,
                marginTop: 24,
              }}
            >
              You will receive your reward once your friends:
            </P>
          </View>
        </View>
      </Div>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentBody: {
    width,
    height: (90 * height) / 100,
    backgroundColor: "rgba(247, 244, 255, 1)",
  },
  btnCard: {
    width: "90%",
    minHeight: 156,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 24,
    borderRadius: 12,
    paddingTop: 16,
    paddingBottom: 16,
    // paddingLeft: 16,
    // paddingRight: 16,
  },
  btnSec1: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    marginBottom: 24,
    // paddingHorizontal: 18.33
  },
  mainCont: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
  },
});
