import React from "react";
import { ImageBackground, Platform, StyleSheet, View } from "react-native";
import Question from "@/components/QuestionBox";
import UserInfo from "./UserInfo";
import ActionBar from "./ActionBar";
import Playlist from "./Playlist";
import { MCQ } from "@/types";
import { RPH, RPW, screenHeightScreen } from "@/constants/helper";
import { ListRenderItem } from "react-native";

// Define the props for RenderItem

interface RenderItemProps {
  item: MCQ;
  answersState: { [key: number]: any }; // Adjust based on actual state structure
  handleOptionPress: (optionId: number, questionId: number) => void; // Ensure consistency
}

const RenderItem: React.FC<RenderItemProps> = ({
  item,
  answersState,
  handleOptionPress,
}) => {
  const state = answersState[item.id] || {};

  return (
    <ImageBackground
      source={{ uri: item.image }}
      style={styles.backgroundImage}
    >
      <View style={styles.multiChoiceCont}>
        <View style={styles.multiChoiceBox}>
          <View style={styles.multiChoice}>
            <Question
              item={item}
              state={state}
              handleOptionPress={handleOptionPress}
            />
            <UserInfo item={item} />
          </View>
          <ActionBar item={item} />
        </View>
        <Playlist item={item} />
      </View>
    </ImageBackground>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "contain" based on your needs
    height: Platform.OS === "ios" ? screenHeightScreen : RPH(100),
  },
  multiChoiceCont: {
    flex: 1,
  },
  multiChoiceBox: {
    flexDirection: "row",
    paddingHorizontal: RPW(5),
  },
  multiChoice: {
    width: RPW(75),
    height: RPH(75),
  },
});
