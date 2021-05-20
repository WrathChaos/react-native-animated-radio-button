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
      <RadioButton
        style={{
          marginTop: 32,
          height: 70,
          width: 70,
          borderRadius: 35,
          borderColor: "#019310",
        }}
        innerBackgroundColor="#019310"
        innerContainerStyle={{ height: 50, width: 50, borderRadius: 25 }}
        onPress={(isActive: boolean) => console.log("isActive: ", isActive)}
      />
      <RadioButton
        style={{
          marginTop: 32,
          borderRadius: 16,
          borderWidth: 3,
          borderColor: "#328da8",
        }}
        innerBackgroundColor="#328da8"
        innerContainerStyle={{ height: 50, width: 50, borderRadius: 10 }}
        onPress={(isActive: boolean) => console.log("isActive: ", isActive)}
      />
    </SafeAreaView>
  );
};

export default App;
