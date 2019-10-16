import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import RadioButton from "./lib/src/RadioButton";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <RadioButton
          isSelected
          animation={"bounceIn"}
          onPress={() => console.log("RadioButton is pressed")}
        />
      </SafeAreaView>
    </View>
  );
};

export default App;
