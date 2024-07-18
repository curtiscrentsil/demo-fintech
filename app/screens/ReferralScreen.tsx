import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Clipboard,
  TouchableWithoutFeedback,
  Text,
  Share,
} from "react-native";
import { fonts } from "../config/Fonts";
import Div from "../components/Div";
import AuthenticationHedear from "../components/AuthenticationHedear";
import { SvgXml } from "react-native-svg";
import { svg } from "../config/Svg";
import P from "../components/P";
import MicroBtn from "../components/MicroBtn";

const { width, height } = Dimensions.get("window");

export default function ReferralScreen({navigation}) {
  const [refCode, setRefCode] = useState("tFh273");
  const copyToClipboard = () => {
    Clipboard.setString(refCode);
    console.log(refCode);
    alert("code copied successfully");
  };

  const shareMessage = async () => {
    try {
      const result = await Share.share({
        message: refCode,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.body}>
      <Div>
        <AuthenticationHedear text="Referral" navigation={navigation} />
        <ScrollView>
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
              <View style={styles.stepCont}>
                <View style={{ maxWidth: 86, alignItems: "center" }}>
                  <View style={styles.stCont}>
                    <P
                      style={{
                        lineHeight: 18,
                        fontSize: 12,
                        fontFamily: fonts.poppinsBold,
                      }}
                    >
                      1
                    </P>
                  </View>
                  <P
                    style={{
                      fontSize: 12,
                      lineHeight: 16,
                      textAlign: "center",
                    }}
                  >
                    Sign up and verify their account
                  </P>
                </View>

                <View style={{ maxWidth: 86, alignItems: "center" }}>
                  <View style={styles.stCont}>
                    <P
                      style={{
                        lineHeight: 18,
                        fontSize: 12,
                        fontFamily: fonts.poppinsBold,
                      }}
                    >
                      2
                    </P>
                  </View>
                  <P
                    style={{
                      fontSize: 12,
                      lineHeight: 16,
                      textAlign: "center",
                    }}
                  >
                    Fund their wallet with ₦2,000 or more
                  </P>
                </View>

                <View style={{ maxWidth: 86, alignItems: "center" }}>
                  <View style={styles.stCont}>
                    <P
                      style={{
                        lineHeight: 18,
                        fontSize: 12,
                        fontFamily: fonts.poppinsBold,
                      }}
                    >
                      3
                    </P>
                  </View>
                  <P
                    style={{
                      fontSize: 12,
                      lineHeight: 16,
                      textAlign: "center",
                    }}
                  >
                    Perform a transaction within 24hrs
                  </P>
                </View>
              </View>
            </View>
            <View style={styles.btnContent}>
              {/* withdrwal balance */}
              <View style={styles.earningsCard}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <P style={{ fontSize: 12 }}>Available asset balance</P>
                  <TouchableOpacity style={{ marginLeft: 8 }}>
                    <SvgXml xml={svg.eye} />
                  </TouchableOpacity>
                </View>
                <View>
                  <P style={{ fontSize: 32, lineHeight: 48, marginTop: 8 }}>
                    0{" "}
                    <Text
                      style={{ fontSize: 16, fontFamily: fonts.poppinsMedium }}
                    >
                      USD
                    </Text>
                  </P>
                </View>
                <View style={styles.redeem}>
                  <P style={{ color: "#fff", fontSize: 14 }}>Redeem</P>
                </View>
              </View>
              <View
                style={{
                  width: "90%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={styles.tEarnings}>
                  <P style={styles.eText}>Total earnings</P>
                  <P style={styles.amt}>
                    0 <P style={{ fontSize: 18, lineHeight: 36 }}>USD</P>
                  </P>
                </View>
                <View style={styles.tEarnings}>
                  <P style={styles.eText}>Total referral</P>
                  <P style={styles.amt}>0</P>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomCard}>
          <View style={styles.refCodeCont}>
            <TouchableWithoutFeedback onPress={copyToClipboard}>
              <View style={styles.codeCont}>
                <P
                  style={{
                    fontSize: 14,
                    lineHeight: 18,
                    color: "rgba(165, 161, 161, 1)",
                  }}
                >
                  Your referral code
                </P>
                <P
                  style={{
                    fontSize: 16,
                    fontFamily: fonts.poppinsBold,
                    marginTop: 2,
                  }}
                >
                  {refCode}
                </P>
                <SvgXml
                  xml={svg.copyIcon}
                  style={{ position: "absolute", right: 19, bottom: 10 }}
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={shareMessage}>
              <View style={styles.shareBtn}>
                <SvgXml xml={svg.whiteShare} style={{ marginRight: 8 }} />
                <P style={{ fontSize: 14, lineHeight: 21, color: "#fff" }}>
                  Share
                </P>
              </View>
            </TouchableWithoutFeedback>
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
    minHeight: (70 * height) / 100,
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
  stepCont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  stCont: {
    width: 30,
    height: 30,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(195, 255, 181, 1)",
    marginBottom: 8,
  },
  bottomCard: {
    width: "100%",
    height: 103,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderColor: "rgba(240, 239, 239, 1)",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContent: {
    width,
    minHeight: 150,
    backgroundColor: "#fff",
    marginTop: 8,
    alignItems: "center",
    paddingBottom: 103,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  earningsCard: {
    width: "90%",
    height: 106,
    marginTop: 24,
    backgroundColor: "rgba(214, 194, 255, 1)",
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: "center",
    paddingLeft: 20,
  },
  tEarnings: {
    width: "47%",
    height: 82,
    backgroundColor: "rgba(247, 244, 255, 1)",
    borderRadius: 12,
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  eText: {
    fontSize: 12,
    marginBottom: 4,
  },
  amt: {
    fontSize: 24,
    lineHeight: 36,
  },
  refCodeCont: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  codeCont: {
    width: "67%",
    height: 66,
    backgroundColor: "rgba(247, 244, 255, 1)",
    borderRadius: 7,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "rgba(165, 161, 161, 1)",
    // alignItems: "center",
    justifyContent: "center",
    paddingLeft: 19,
  },
  shareBtn: {
    width: "30%",
    height: 66,
    backgroundColor: "rgba(139, 82, 255, 1)",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  redeem: {
    width: 91,
    height: 29,
    position: "absolute",
    backgroundColor: "rgba(140, 82, 255, 1)",
    right: 20,
    bottom: 16,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
});
