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

const { width, height } = Dimensions.get("window");


export default function HomeScreen({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <LinearGradient
      colors={[
        "rgba(139, 82, 255, 1)",
        "rgba(247, 244, 255, 1)",
        "rgba(247, 244, 255, 1)",
      ]}
      locations={[-0.1, 0.15, 0]}
      style={styles.gradient}>
      <Div>
        <UserHeader />
        <ScrollView>
          {/* Account Balance */}
          <View style={[styles.card, { height: 94 }]}>
            <View style={styles.accountBalance}>
              <P style={styles.balanceText}>Available asset balance</P>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  marginTop: "2%",
                  
                  // backgroundColor:"red"
                  
                }}>
                  {/* @ts-ignore */}
                <P style={[styles.balanceAmount,{lineHeight: 38,}]}>900,000 USD</P>
                <TouchableOpacity style={styles.addMoneyButton} onPress={()=>toggleModal()}>
                  <P style={styles.addMoneyText}>Add money</P>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Actions */}
          <View style={styles.card}>
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
              { backgroundColor: "rgba(238, 255, 235, 1)" },
            ]}>
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
                source={{ uri: "placeholder" }}
                style={styles.recommendationImage}
              />
            </View>
          </View>

          {/* Bills Payment */}
          <View style={[styles.card,{ padding: 0, height:140,}]}>
            <View
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderColor: "rgba(240, 239, 239, 1)",
                flexDirection: "row",
                justifyContent: "space-between",
                height:45,
                alignItems:"center",
                paddingHorizontal:16,
                marginBottom:"5%",
              }}>
              <P style={{ color: "rgba(165, 161, 161, 1)", fontSize:14 }}>
                Bills payment
              </P>
              <P style={{fontSize:14 }}>Edit</P>
            </View>
            <View style={styles.bills}>
              <BillItem text="Internet" svg={svg.internet} />
              <BillItem text="Tuition" svg={svg.tuu} />
              <BillItem text="Electricity" svg={svg.electricity} />
              <BillItem text="More" svg={svg.more} />
            </View>
          </View>

          {/* Transactions */}
          <View  style={[styles.card,{ padding: 0, height:140,}]}>
          <View
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderColor: "rgba(240, 239, 239, 1)",
                flexDirection: "row",
                justifyContent: "space-between",
                height:45,
                alignItems:"center",
                paddingHorizontal:16,
                marginBottom:"5%",
              }}>
              <P style={{ color: "rgba(165, 161, 161, 1)", fontSize:14 }}>
                Bills payment
              </P>
              <P style={{fontSize:14 }}>Edit</P>
            </View>
            <View style={[styles.transactions, {paddingHorizontal:16}]}>
              <TransactionItem
                flagUri="https://example.com/flag.png"
                amount="500"
                title="GHN-NGN"
                date="6:00 am • 12 jul 2014"
              />
            </View>
          </View>
        </ScrollView>
        <Modal isVisible={isModalVisible} style={styles.modal}  >
        <View style={styles.modalContent}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
      </Div>
    </LinearGradient>
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

function BillItem({ text, svg }) {
  return (
    <View style={styles.billItem}>
      <SvgXml xml={svg} />
      <P style={styles.billText}>{text}</P>
    </View>
  );
}

function TransactionItem({ flagUri, amount, date,title }) {
  return (
    <View style={styles.transactionItem}>
      <View style={{flexDirection:"row"}}>

      <Image source={{ uri: flagUri }} style={styles.transactionFlag} />
      <View style={styles.transactionInfo}>
        <P style={styles.transactionAmount}>{title}</P>
        <P style={styles.transactionDate}>{date}</P>
      </View>
      </View>
      <P style={{fontSize:14, fontFamily:"poppins-medium"}}>{amount} <P style={{fontSize:10}}>USD</P></P>
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
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // elevation: 4,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    height: '50%',
    backgroundColor: 'white',
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
    fontFamily:"poppins-semibold",
    color: "rgba(22, 24, 23, 1)",
    
  },
  addMoneyButton: {
    // marginTop: 10,
    // paddingVertical: 8,
    paddingTop: 4,
    paddingRight: 16,
    paddingBottom: 4,
    paddingLeft: 16,
    backgroundColor: "rgba(139, 82, 255, 1)",
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
    fontFamily:"poppins-semibold",
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
    textDecorationLine:"underline"
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
    justifyContent:"space-between"
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
    fontFamily:"poppins-semibold"
    // fontWeight: "bold",
  },
  transactionDate: {
    fontSize: 12,
    color: "rgba(22, 24, 23, 0.6)",
  },
});
