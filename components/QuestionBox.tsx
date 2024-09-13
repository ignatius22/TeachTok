import { rem, RPH, RPW, screenHeightScreen } from "@/constants/helper";
import { MCQ } from "@/types";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

interface QuestionComponentProps {
  item: MCQ;
  state: any; // you can replace this with a more specific type if available
  handleOptionPress: (optionId: number, itemId: number) => void;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  item,
  state,
  handleOptionPress,
}) => {
  return (
    <View style={styles.questionBox}>
      <View style={styles.questions}>
        <Text style={styles.questionText}>{item.question}</Text>
      </View>
      <View style={styles.optionsCont}>
        <View style={styles.optionsBox}>
          {item.options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                state.selectedOption === option.id &&
                option.id === state.correctOption
                  ? styles.correctOption
                  : null,
                state.selectedOption === option.id &&
                option.id !== state.correctOption
                  ? styles.wrongOption
                  : null,
                state.revealed && option.id === state.correctOption
                  ? styles.correctOption
                  : null,
              ]}
              activeOpacity={0.7}
              onPress={() => handleOptionPress(option.id, item.id)}
            >
              <Text style={styles.optionText}>{option.answer}</Text>
              {state.selectedOption === option.id &&
                option.id === state.correctOption && (
                  <Image source={require("@/assets/images/correct.png")} />
                )}
              {state.selectedOption === option.id &&
                option.id !== state.correctOption && (
                  <Image source={require("@/assets/images/wrong.png")} />
                )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default QuestionComponent;

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
  actionBar: {
    width: RPW(15),
    height: RPH(75),
    alignItems: "center",
  },
  questionBox: {
    width: RPW(75),
    height: RPH(70),
  },
  highlightBox: {
    width: RPW(75),
    height: RPH(10),
    paddingTop: Platform.OS === "android" ? RPH(3) : null,
    paddingBottom: rem(2),
  },
  questions: {
    width: RPW(75),
    height: RPH(40),
  },
  listContentContainer: {
    bottom: Platform.OS === "android" ? RPH(0) : RPH(0),
  },
  optionsCont: {},
  playlists: {
    height: RPH(6),
    flexDirection: "row",
    paddingHorizontal: rem(15),
    backgroundColor: "#161616",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Platform.OS === "android" ? RPH(6.5) : RPH(1),
  },
  questionText: {
    fontSize: rem(22),
    color: "#FFFFFF",
    lineHeight: rem(26),
    fontFamily: "SFProRoundedRegular",
    paddingTop: rem(40),
    width: RPW(60),

    marginTop: rem(14),
  },
  optionsBox: {
    flexDirection: "column",
    height: RPH(28),
    justifyContent: "space-between",
  },
  optionButton: {
    width: RPW(73),
    height: RPH(8),
    backgroundColor: "#FFFFFF80",
    borderRadius: rem(8),
    justifyContent: "space-between",
    paddingLeft: rem(10),
    flexDirection: "row",
    alignItems: "center",
  },
  correctOption: {
    backgroundColor: "#28B18FB2",
  },
  wrongOption: {
    backgroundColor: "#DC5F5FB2",
  },
  highlightTitle: {
    fontFamily: "SFProRoundedSemiBold",
    fontSize: rem(15),
    lineHeight: rem(17.9),
    color: "#ffffff",
    paddingBottom: rem(4),
  },
  highlightSubTitle: {
    fontFamily: "SFProRoundedLight",
    fontSize: rem(13),
    lineHeight: rem(15.51),
    color: "#ffffff",
  },
  highlightSubTitleB: {
    fontFamily: "SFProRoundedBold",
    fontSize: rem(13),
    lineHeight: rem(15.51),
    color: "#ffffff",
  },
  highlightTextCont: {
    flexDirection: "row",
    gap: rem(2),
  },
  playlistsText: {
    fontFamily: "SFProRoundedMedium",
    fontSize: rem(13),
    lineHeight: rem(15.51),
    color: "#ffffff",
  },
  optionText: {
    fontFamily: "SFProRoundedRegular",
    fontSize: rem(17),
    lineHeight: rem(20.29),
    color: "#ffffff",
    width: RPW(60),
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
  playlistItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(5),
  },
  grade: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: RPW(69),
  },
});
