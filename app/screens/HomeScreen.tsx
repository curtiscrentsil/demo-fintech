import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UserHeader from "../components/UserHeader";
import Div from "../components/Div";
import MicroBtn from "../components/MicroBtn";
import { svg } from "../config/Svg";
import { SvgXml } from "react-native-svg";
import P from "../components/P";
import Modal from "react-native-modal";
import { fonts } from "../config/Fonts";
import BillPaymentScreen from "./BillPaymentScreen";

const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState(0);
  const [activeTab, setActive] = useState("Accounts");
  const [activeIndex, setActiveIndex] = useState(1);
  const [amount, setAmount] = useState("900,000");
  const [amc, setAmc] = useState("USD");

  const tabLinks = ["Accounts", "Rate", "Discover"];
  const dots = [1, 2, 3];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const amountType = [
    {
      amount: "900,000",
      currency: "USD",
    },
    {
      amount: "900,000",
      currency: "TRY",
    },
  ];

  return (
    <>
      <LinearGradient
        colors={["rgba(139, 82, 255, 1)", "rgba(247, 244, 255, 1)"]}
        locations={[0.2, 0.3]}
        style={styles.gradient}
      >
        <Div>
          <UserHeader
            showName="Martins Chidume"
            showStatus={false}
            text1="Welcome"
            text1Style={{
              fontSize: 12,
              color: "#fff",
              lineHeight: 18,
              marginBottom: 0,
            }}
            icon1={svg.barCodeW}
            icon2={svg.notiw}
          />
          <ScrollView>
            {/* Account Balance */}
            <View style={styles.tab}>
              {tabLinks.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setActive(item);
                  }}
                >
                  <View
                    style={activeTab === item ? styles.actBtn : styles.tabBtn}
                    key={index}
                  >
                    <P style={styles.tabBtnP}>{item}</P>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <View style={[styles.card, { height: 94 }]}>
              <View style={styles.accountBalance}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <P style={{ fontSize: 12 }}>Available asset balance</P>
                  <TouchableOpacity style={{ marginLeft: 8 }}>
                    <SvgXml xml={svg.eye} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                    marginTop: "2%",

                    //   backgroundColor:"red"
                  }}
                >
                  {/* @ts-ignore */}
                  <TouchableOpacity onPress={() => toggleModal()}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <P style={{ fontSize: 24, lineHeight: 36 }}>
                        {amount}{" "}
                        <Text
                          style={{
                            fontSize: 16,
                            fontFamily: fonts.poppinsMedium,
                          }}
                        >
                          {amc}
                        </Text>
                      </P>
                      <SvgXml xml={svg.arrowDown} style={{ marginLeft: 8 }} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.addMoneyButton}
                  >
                    <P style={styles.addMoneyText}>Add money</P>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Actions */}
            <View style={[styles.card, { height: 79 }]}>
              <View style={styles.actions}>
                <ActionButton text="Withdraw" svg={svg.withdraw} />
                <ActionButton text="Swap" svg={svg.coinswap} />
                <ActionButton text="Card" svg={svg.cardF} />
                <ActionButton text="Referral" svg={svg.refferal} />
              </View>
            </View>

            {/* Personalized Recommendation */}
            <View
              style={[
                styles.card,
                { backgroundColor: "rgba(238, 255, 235, 1)", marginBottom: 8 },
              ]}
            >
              <View style={styles.recommendation}>
                <View style={styles.recommendationText}>
                  <P style={styles.recommendationTitle}>
                    Personalized recommendation
                  </P>
                  <P style={styles.recommendationMessage}>
                    You have made multiple transfers to the same account today.
                    <P style={styles.recommendationReview}> Review</P>
                  </P>
                </View>
                <Image
                  source={require("../assets/image.png")}
                  style={styles.recommendationImage}
                />
              </View>
            </View>
            <View
              style={{
                width: "90%",
                height: 6,
                alignSelf: "center",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              {dots.map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 6,
                    height: 6,
                    marginRight: 5,
                    backgroundColor:
                      activeIndex === _
                        ? "rgba(0, 191, 99, 1)"
                        : "rgba(165, 161, 161, 1)",
                    borderRadius: 100,
                  }}
                ></View>
              ))}
            </View>

            {/* Bills Payment */}
            <View style={[styles.card, { padding: 0, height: 140 }]}>
              <View
                style={{
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "rgba(240, 239, 239, 1)",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: 45,
                  alignItems: "center",
                  paddingHorizontal: 16,
                  marginBottom: "5%",
                }}
              >
                <P style={{ color: "rgba(165, 161, 161, 1)", fontSize: 14 }}>
                  Bills payment
                </P>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <P style={{ fontSize: 14, marginRight: 2 }}>Edit</P>
                  <SvgXml xml={svg.edit} />
                </TouchableOpacity>
              </View>
              <View style={styles.bills}>
                <BillItem text="Internet" svg={svg.internet} />
                <BillItem text="Tuition" svg={svg.tuu} />
                <BillItem text="Electricity" svg={svg.electricity} />
                <BillItem
                  text="More"
                  svg={svg.more}
                  onPress={() => {
                    navigation.navigate("BillPaymentScreen");
                  }}
                />
              </View>
            </View>

            {/* Transactions */}
            <View
              style={[
                styles.card,
                { padding: 0, height: 140, marginBottom: 100 },
              ]}
            >
              <View
                style={{
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "rgba(240, 239, 239, 1)",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: 45,
                  alignItems: "center",
                  paddingHorizontal: 16,
                  marginBottom: "5%",
                }}
              >
                <P style={{ color: "rgba(165, 161, 161, 1)", fontSize: 14 }}>
                  Transactions
                </P>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <P style={{ fontSize: 14, marginRight: 5 }}>View all</P>
                  <SvgXml xml={svg.arroveRight} />
                </TouchableOpacity>
              </View>
              <View style={[styles.transactions, { paddingHorizontal: 16 }]}>
                <TransactionItem
                  flagUri={require("../assets/ghanaFlag.png")}
                  amount="500"
                  title="GHN-NGN"
                  date="6:00 am • 12 jul 2014"
                />
              </View>
            </View>
          </ScrollView>
        </Div>
      </LinearGradient>
      <Modal isVisible={isModalVisible} style={styles.modal} statusBarTranslucent={true}>
        <View style={styles.extraModal}></View>
        <View style={styles.modalContent}>
          <View style={styles.section1}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <SvgXml xml={svg.goBackIcon} style={{ marginRight: 12 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontFamily: fonts.poppinsRegular }}>
              Available balance
            </Text>
          </View>
          {amountType.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setActiveCurrency(index);
                setModalVisible(false);
                setAmount(item.amount);
                setAmc(item.currency);
              }}
            >
              <View
                style={[
                  styles.priceSelect,
                  {
                    borderColor:
                      activeCurrency === index
                        ? "rgba(140, 82, 255, 1)"
                        : "transparent",
                  },
                ]}
              >
                <P style={{ fontSize: 24, lineHeight: 36 }}>
                  {item.amount}{" "}
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: fonts.poppinsMedium,
                    }}
                  >
                    {item.currency}
                  </Text>
                </P>
                <SvgXml
                  xml={activeCurrency === index ? svg.checked : svg.check}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </>
  );
}

function ActionButton({ text, svg }) {
  return (
    <TouchableOpacity style={styles.actionButton}>
      <SvgXml xml={svg} />
      <P style={styles.actionButtonText}>{text}</P>
    </TouchableOpacity>
  );
}

function BillItem({ text, svg, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.billItem}>
        <SvgXml xml={svg} />
        <P style={styles.billText}>{text}</P>
      </View>
    </TouchableOpacity>
  );
}

function TransactionItem({ flagUri, amount, date, title }) {
  return (
    <View style={styles.transactionItem}>
      <View style={{ flexDirection: "row" }}>
        <Image source={flagUri} style={styles.transactionFlag} />
        <View style={styles.transactionInfo}>
          <P style={styles.transactionAmount}>{title}</P>
          <P style={styles.transactionDate}>{date}</P>
        </View>
      </View>
      <P style={{ fontSize: 14, fontFamily: "poppins-medium" }}>
        {amount} <P style={{ fontSize: 10 }}>USD</P>
      </P>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    width,
    height,
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // elevation: 4,
  },
  modal: {
    // backgroundColor: 'red',
    justifyContent: "flex-end",
    margin: 0,
    height,
    position: "absolute",
  },
  modalContent: {
    height: "50%",
    backgroundColor: "rgba(247, 244, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  accountBalance: {
    alignItems: "flex-start",
    // backgroundColor:"red",
  },
  balanceText: {
    fontSize: 12,
    color: "rgba(22, 24, 23, 0.6)",
  },
  balanceAmount: {
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "poppins-semibold",
    color: "rgba(22, 24, 23, 1)",
  },
  addMoneyButton: {
    // marginTop: 10,
    // paddingVertical: 8,
    paddingTop: 4,
    paddingRight: 16,
    paddingBottom: 4,
    paddingLeft: 16,
    backgroundColor: "rgba(140, 82, 255, 1)",
    borderRadius: 20,
  },
  addMoneyText: {
    color: "#fff",
    fontSize: 12,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionButton: {
    alignItems: "center",
  },
  actionButtonText: {
    marginTop: 8,
    fontSize: 12,
    color: "rgba(22, 24, 23, 1)",
  },
  recommendation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  recommendationImage: {
    width: 58,
    height: 58,
    borderRadius: 1000,
    backgroundColor: "gray",
  },
  recommendationText: {
    marginLeft: 10,
  },
  recommendationTitle: {
    fontSize: 14,
    // fontWeight: "bold",
    fontFamily: "poppins-semibold",
    color: "rgba(22, 24, 23, 1)",
  },
  recommendationMessage: {
    fontSize: 12,
    color: "rgba(78, 130, 76, 1)",
    width: 218,
  },
  recommendationReview: {
    fontSize: 12,
    color: "rgba(78, 130, 76, 1)",
    textDecorationLine: "underline",
  },
  bills: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  billItem: {
    alignItems: "center",
  },
  billIcon: {
    width: 40,
    height: 40,
    backgroundColor: "gray",
    borderRadius: 20,
  },
  billText: {
    marginTop: 8,
    fontSize: 12,
    color: "rgba(22, 24, 23, 1)",
  },
  transactions: {},
  transactionsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  transactionFlag: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "gray",
  },
  transactionInfo: {
    marginLeft: 10,
  },
  transactionAmount: {
    fontSize: 16,
    fontFamily: "poppins-semibold",
    // fontWeight: "bold",
  },
  transactionDate: {
    fontSize: 12,
    color: "rgba(22, 24, 23, 0.6)",
  },
  tab: {
    alignSelf: "center",
    width: "90%",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 12,
  },
  tabBtn: {
    width: 83,
    height: 24,
    marginRight: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  actBtn: {
    width: 83,
    height: 24,
    backgroundColor: "#fff",
    marginRight: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBtnP: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.poppinsRegular,
  },
  section1: {
    height: 65,
    width: "100%",
    borderBottomColor: "rgba(139, 144, 154, 0.25)",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },
  priceSelect: {
    width: "100%",
    height: 68,
    backgroundColor: "white",
    marginTop: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 32,
    paddingRight: 32,
    borderWidth: 1,
  },
  extraModal: {
    width: "80%",
    height: "52%",
    position: "absolute",
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
});
