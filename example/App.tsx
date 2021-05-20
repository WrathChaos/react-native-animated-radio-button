import React from "react";
import { StatusBar, SafeAreaView, useColorScheme } from "react-native";
import RadioButton from "react-native-animated-radio-button";

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

export default App;
