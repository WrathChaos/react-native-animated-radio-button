import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import RadioButton from "./lib/src/RadioButton";

const App = () => {
  let isSelected = false;
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <RadioButton
          animation={"bounceIn"}
          isSelected={isSelected}
          onPress={() => (isSelected = !isSelected)}
        />
      </SafeAreaView>
    </View>
  );
};

export default App;
