import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { fonts } from "../config/Fonts";
import Div from "../components/Div";
import AuthenticationHedear from "../components/AuthenticationHedear";
import { SvgXml } from "react-native-svg";
import { svg } from "../config/Svg";
import P from "../components/P";
import MicroBtn from "../components/MicroBtn";

const { width, height } = Dimensions.get("window");

export default function BillPaymentScreen({navigation}) {
  return (
    <View style={styles.body}>
      <Div>
        <AuthenticationHedear text="Bill payment" navigation={navigation}/>
        <View style={styles.contentBody}>
          <View style={styles.btnCard}>
            <View style={styles.btnSec1}>
              <MicroBtn text="Internet" icon={svg.internet} />
              <MicroBtn text="Tuition" icon={svg.school} />
              <MicroBtn text="Elctricity" icon={svg.electricity} />
              <MicroBtn text="Water" icon={svg.droplet} />
            </View>
            <View style={[styles.btnSec1, { marginBottom: 0, width: "50%" }]}>
              <MicroBtn text="Airtime" icon={svg.phone} />
              <MicroBtn text="Flight" icon={svg.airplane} />
            </View>
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
});
