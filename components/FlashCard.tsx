import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { RPW } from "@/constants/helper";

import Header from "./Header";
import Main from "./Main";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const FlashCard = () => {
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.contentContainer}>
        <Header />
        <Main />
      </View>
    </SafeAreaView>
  );
};

export default FlashCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    width: RPW(100),
    height:SCREEN_HEIGHT,

  },
  contentContainer: {
    height: SCREEN_HEIGHT, // Set the height of the container to the screen height
  },
});
