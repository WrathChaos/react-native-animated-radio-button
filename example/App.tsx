import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import RadioButton from "./build/dist/RadioButton";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <RadioButton
        onPress={(isActive: boolean) => console.log("isActive: ", isActive)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
