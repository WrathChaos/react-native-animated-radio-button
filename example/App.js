import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import RadioButton from "react-native-animated-radio-button";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <RadioButton
          size={50}
          isSelected
          animation={"bounceIn"}
          onPress={() => console.log("RadioButton is pressed")}
        />

        <View style={{ marginTop: 16 }}>
          <RadioButton
            size={50}
            isSelected={false}
            animation={"bounceIn"}
            onPress={() => console.log("RadioButton is pressed")}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <RadioButton
            size={50}
            isSelected
            animation={"bounceIn"}
            onPress={() => console.log("RadioButton is pressed")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
