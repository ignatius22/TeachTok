import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ViewStyle } from "react-native";
import { rem } from "@/constants/helper";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
  const screenOptions = {
    tabBarShowLabel: true,
    headerShown: false,
    tabBarLabelStyle: {
      color: "#ffffff",
      fontFamily: "SFProRoundedLight",
      fontSize: rem(10),
      lineHeight: rem(11.93),
    },
    tabBarActiveTintColor: "#ffffff",
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      backgroundColor: "#000000",
    } as ViewStyle,
  };

  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
              size={rem(21)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "compass" : "compass-outline"}
              size={rem(21)}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "timer" : "timer-outline"}
              size={rem(21)}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "bookmark" : "bookmark-outline"}
              color={color}
              size={rem(21)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={focused ? "user-circle" : "user-circle-o"}
              size={rem(21)}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
