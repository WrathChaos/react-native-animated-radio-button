import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}

export const _innerStyle = (
  isActive: boolean,
  innerBackgroundColor: string,
): ViewStyle => ({
  width: 30,
  height: 30,
  borderRadius: 25,
  backgroundColor: isActive ? innerBackgroundColor : "transparent",
});

export default StyleSheet.create<Style>({
  container: {
    width: 50,
    height: 50,
    borderWidth: 6,
    borderRadius: 25,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
