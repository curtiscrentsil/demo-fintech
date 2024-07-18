import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { fonts } from "../config/Fonts";
import { svg } from "../config/Svg";
import { SvgXml } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import UserHeader from "../components/UserHeader";
import Div from "../components/Div";
import P from "../components/P";
import ListItemBtn from "../components/ListItemBtn";
import Btn from "../components/Btn";
const { width, height } = Dimensions.get("window");

export default function SettingScreen() {
  return (
    <LinearGradient
      colors={[
        "rgba(182, 146, 255, 1)",
        "rgba(247, 244, 255, 1)",
        "rgba(247, 244, 255, 1)",
      ]}
      locations={[-0.1, 0.15, 0]}
      style={styles.gradient}
    >
      <Div>
        <UserHeader />
        <View style={styles.bodySection}>
          <View style={styles.balcard}>
            <View style={styles.content1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <P style={{ fontSize: 12 }}>Available asset balance</P>
                <TouchableOpacity style={{ marginLeft: 8 }}>
                  <SvgXml xml={svg.eye} />
                </TouchableOpacity>
              </View>
              <View>
                <P style={{ fontSize: 24, lineHeight: 36 }}>
                  900,000{" "}
                  <Text
                    style={{ fontSize: 16, fontFamily: fonts.poppinsMedium }}
                  >
                    USD
                  </Text>
                </P>
              </View>
            </View>
            <View style={styles.content2}>
              <P style={{ fontSize: 12 }}>Referral earnings</P>
              <View>
                <P style={{ fontSize: 16, lineHeight: 24 }}>
                  50,000{" "}
                  <Text
                    style={{ fontSize: 12, fontFamily: fonts.poppinsMedium }}
                  >
                    USD
                  </Text>
                </P>
              </View>
            </View>
          </View>
          <View style={styles.actionCard}>
            <ListItemBtn text="Security" icon={svg.security} />
            <ListItemBtn text="Notification" icon={svg.notification2} />
            <ListItemBtn text="Report scam" icon={svg.alert} />
            <ListItemBtn text="Referral" icon={svg.share} />
            <ListItemBtn text="Rate SFx " icon={svg.star} />
            <ListItemBtn text="Help & support" icon={svg.help_square} />
            <ListItemBtn
              text="About us"
              icon={svg.building}
              showBorder={false}
            />
          </View>
          <Btn text="Logout" icon={svg.logout}/>
          <P
            style={{
              textAlign: "center",
              marginTop: 24,
              fontSize: 12,
              fontFamily: fonts.poppinsRegular,
              color: "rgba(165, 161, 161, 1)",
            }}
          >
            Version:2.0
          </P>
        </View>
      </Div>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    width,
    height,
    flex: 1,
  },
  bodySection: {
    width: "90%",
    alignSelf: "center",
  },
  balcard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  content1: {
    alignItems: "flex-start",
  },
  content2: {
    // justifyContent: "flex-end",
    alignItems: "flex-end",
    // alignItems: 'center',
  },
  actionCard: {
    width: "100%",
    minHeight: 364,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 24,
  },
});
