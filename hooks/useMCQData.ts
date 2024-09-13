// hooks/useMCQData.ts
import { MCQ } from "@/types";
import { useState, useCallback, useEffect } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";


type AnswerState = {
  selectedOption: string;
  correctOption: string | null;
  revealed: boolean;
};


const useMCQData = () => {
  const [mcqData, setMcqData] = useState<MCQ[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [answersState, setAnswersState] = useState<Record<number, AnswerState>>(
    {}
  );
  

  const fetchMCQs = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://cross-platform.rp.devfactory.com/for_you`
      );
      const result = await response.json();

      if (result) {
        setMcqData((prevData) => {
          const isDuplicate = prevData.some((item) => item.id === result.id);
          if (!isDuplicate) {
            return [...prevData, result];
          }
          return prevData;
        });
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching MCQ:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore]);

  const handleOptionPress = useCallback(
    async (optionId: number, mcqId: number) => {
      // Check if the answer has already been revealed
      if (answersState[mcqId]?.revealed) return;
  
      // Determine if the selected option is correct
      const currentCorrectOption = answersState[mcqId]?.correctOption ?? null;
      const revealed = optionId.toString() === currentCorrectOption;
  
      // Update the state to reflect the selected option
      setAnswersState((prevState) => ({
        ...prevState,
        [mcqId]: {
          selectedOption: optionId.toString(),
          correctOption: currentCorrectOption,
          revealed: revealed,
        },
      }));
  
      // If the selected option is not correct, fetch the correct option from the server
      if (optionId.toString() !== currentCorrectOption) {
        try {
          const response = await fetch(
            `https://cross-platform.rp.devfactory.com/reveal?id=${mcqId}`
          );
          const result = await response.json();
          const correctOption = result.correct_options[0].id;
  
          // Update the state with the correct option
          setAnswersState((prevState) => ({
            ...prevState,
            [mcqId]: {
              selectedOption: optionId.toString(),
              correctOption: correctOption,
              revealed: true,
            },
          }));
        } catch (error) {
          console.error("Error revealing the answer:", error);
        }
      }
    },
    [answersState]
  );
  
  
  const handleEndReached = useCallback(() => {
    if (!loading && hasMore) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [loading, hasMore]);

  const keyExtractor = (item: MCQ, index: number) => `${item.id}-${index}`;


  const onScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom && hasMore) {
      fetchMCQs(); // Fetch next MCQ when close to the bottom
    }
  };

  useEffect(() => {
    console.log("Data loaded:", mcqData);

    fetchMCQs();
  }, [fetchMCQs, mcqData]);
  // Debounce handleScroll to prevent excessive calls
  return {
    mcqData,
    currentPage,
    setCurrentPage,
    loading,
    hasMore,
    fetchMCQs,
    handleOptionPress,
    answersState,
    handleEndReached,
    keyExtractor,
    onScroll,
    
  };
};

export default useMCQData;
