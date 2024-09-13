import { rem, RPH } from "@/constants/helper";
import { MCQ } from "@/types";
import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";

interface PlaylistComponentProps {
  item: MCQ;
}

const Playlist: React.FC<PlaylistComponentProps> = ({ item }) => (
  <View style={styles.playlists}>
    <View style={styles.playlistItem}>
      <Image source={require("@/assets/images/play.png")} />
      <Text style={styles.playlistsText}>Playlist • {item.playlist}</Text>
    </View>
    <View>
      <Image source={require("@/assets/images/right-arrow.png")} />
    </View>
  </View>
);

export default Playlist;

const styles = StyleSheet.create({
  playlists: {
    height: RPH(6),
    flexDirection: "row",
    paddingHorizontal: rem(15),
    backgroundColor: "#161616",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Platform.OS === "android" ? RPH(6.5) : RPH(1),
  },

  playlistsText: {
    fontFamily: "SFProRoundedMedium",
    fontSize: rem(13),
    lineHeight: rem(15.51),
    color: "#ffffff",
    alignItems:"center"
  },

  playlistItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(5),
  },
});
