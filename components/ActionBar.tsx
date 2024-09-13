import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { rem, RPH, RPW, screenHeightScreen } from "@/constants/helper";
import { MCQ } from "@/types";

interface ActionBarComponentProps {
  item: MCQ;
}

const ActionBar: React.FC<ActionBarComponentProps> = ({ item }) => (
  <View style={styles.actionBar}>
    <View style={styles.dummy}></View>
    <View style={styles.actionBarCont}>
      <View style={styles.iconCont}>
        <View style={styles.avatar}>
          <Image
            source={{ uri: item.user.avatar }}
            style={styles.avatarImage}
          />
          <View style={styles.plus}>
            <Image source={require("@/assets/images/plus.png")} />
          </View>
        </View>
        <View style={styles.iconGroup}>
          <TouchableOpacity style={styles.iconItem}>
            <FontAwesome name="heart" size={24} color="#ffffff" />
            <Text style={styles.iconText}>87</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <Ionicons name="chatbubble-ellipses" size={24} color="#ffffff" />
            <Text style={styles.iconText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <Ionicons name="bookmark-sharp" size={24} color="#ffffff" />
            <Text style={styles.iconText}>203</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <FontAwesome5 name="share" size={24} color="#ffffff" />
            <Text style={styles.iconText}>17</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

export default ActionBar;

const styles = StyleSheet.create({
  actionBar: {
    width: RPW(15),
    height: RPH(75),
    alignItems: "center",
  },

  dummy: {
    height: RPH(30),
  },
  actionBarCont: {
    height: RPH(48),
  },
  iconCont: {
    flexDirection: "column",
  },
  avatar: {
    width: rem(45),
    height: rem(45),
    backgroundColor: "white",
    borderRadius: rem(30),
    alignItems: "center",
    justifyContent: "center",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: rem(30),
  },
  plus: {
    position: "absolute",
    backgroundColor: "#28B18F",
    width: rem(22),
    height: rem(22),
    borderRadius: rem(40),
    alignItems: "center",
    justifyContent: "center",
    top: rem(27),
  },
  iconGroup: {
    flexDirection: "column",
    marginTop: rem(20),
    justifyContent: "space-between",
    height: RPH(35),
  },
  iconItem: {
    justifyContent: "center",
    alignItems: "center",
    gap: rem(4),
  },
  iconText: {
    fontFamily: "SFProRoundedMedium",
    fontSize: rem(12),
    lineHeight: rem(14.32),
    color: "#ffffff",
  },
});
