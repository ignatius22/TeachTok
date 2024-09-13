import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { rem, RPH, RPW, vw } from "@/constants/helper";

const Header = () => {
  const [timeLeft, setTimeLeft] = useState(600); // Starting with 10 minutes (600 seconds)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  return (
    <View style={styles.header}>
      <View style={styles.timerContainer}>
        <MaterialIcons name="timer" size={20} color="#FFFFFF99" />
        <Text style={styles.min}>{formatTime(timeLeft)}</Text>
      </View>
      <View style={styles.forU}>
        <Text style={styles.forUText}>For You</Text>
        <View style={styles.bar} />
      </View>
      <View style={styles.search}>
        <FontAwesome name="search" size={22} color="#FFFFFF" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: Platform.OS === "android" ? RPH(8) : RPH(1),
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: RPW(5),
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: rem(4),
  },
  forU: {
    alignItems: "center",
  },
  forUText: {
    fontSize: rem(16),
    color: "#FFFFFF",
    fontFamily: "SFProRoundedSemiBold",
  },
  search: {},
  min: {
    fontSize: rem(14),
    color: "#FFFFFF99",
    lineHeight: rem(16.71),
    fontFamily: "SFProRoundedRegular",
  },
  bar: {
    width: vw(8),
    borderBottomWidth: 2,
    borderColor: "#ffffff",
    height: rem(5),
  },
});
