import { Dimensions, Platform, PixelRatio } from 'react-native';

// Declare screen dimensions as let to allow reassignment on orientation change
let { width: screenWidth, height: screenHeight } = Dimensions.get('window');
export const { width: screenWidthScreen, height: screenHeightScreen } = Dimensions.get('screen');

// Dynamic percentage-based width and height
export const RPW = (percentage: number) => (percentage / 100) * screenWidth;
export const RPH = (percentage: number) => (percentage / 100) * screenHeight;

// Orientation check
export const isLandscape = screenWidth > screenHeight;
export const isPortrait = !isLandscape;

// Base size for scaling (depends on orientation)
const base = isLandscape ? screenHeight : screenWidth;
const magicNumber = 375; // Standard width for scaling (e.g., iPhone 6)

// Viewport-based units
export const vw = (size: number = 0) => Math.floor((screenWidth / 100) * size);
export const vh = (size: number = 0) => Math.floor((screenHeight / 100) * size);

// Platform checks
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

// REM function with PixelRatio consideration
export const rem = (size: number = 0) => {
  if (!isIOS && !isAndroid) {
    return size; // For storybook or web
  }
  const scaledSize = (base / magicNumber) * size;
  return Math.round(PixelRatio.roundToNearestPixel(scaledSize));
};

// Utility function for generating a random string
export const getRandomString = () => Math.random().toString(36).substring(3, 9);

// Example of handling dynamic updates on screen dimension changes
Dimensions.addEventListener('change', ({ window }) => {
  screenWidth = window.width;
  screenHeight = window.height;
});
