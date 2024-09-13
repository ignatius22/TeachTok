import React, { useEffect } from "react";
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
} from "react-native";

import useMCQData from "@/hooks/useMCQData";
import RenderItem from "./renderItem";
import { MCQ } from "@/types";

const Main = () => {
  const {
    mcqData,
    currentPage,
    fetchMCQs,
    handleOptionPress,
    answersState,
    handleEndReached,
    keyExtractor,
    onScroll,
  } = useMCQData();

  const { height } = Dimensions.get("window");

  useEffect(() => {
    fetchMCQs();
  }, [currentPage]);

  const renderItem: ListRenderItem<MCQ> = ({ item }) => {
    return (
      <RenderItem
        item={item}
        answersState={answersState}
        handleOptionPress={handleOptionPress}
      />
    );
  };
  return (
    <View>
      <FlatList
        snapToAlignment="start"
        snapToInterval={height}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        data={mcqData}
        onEndReached={handleEndReached}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onScroll={onScroll} // Use the updated onScroll handler
        pagingEnabled // Enables paging behavior
        contentContainerStyle={styles.listContentContainer}
        scrollEventThrottle={16}
        onEndReachedThreshold={0.5} // Trigger new page load earlier
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  listContentContainer: {
    bottom: 0,
  },
});
