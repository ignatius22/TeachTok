import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FlashCard from "@/components/FlashCard";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <FlashCard />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:"#000000"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
