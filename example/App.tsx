import React from "react";
import {
  View,
  StatusBar,
  ImageBackground,
  Text,
  SafeAreaView,
} from "react-native";
import RadioButton from "react-native-animated-radio-button";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RadioButton
          size={50}
          isSelected
          horizontal={false}
          innerColor="#e82020"
          outerColor="#e82020"
          animation={"bounceIn"}
          onPress={() => console.log("RadioButton is pressed")}
        />
        <View style={{ marginTop: 16 }}>
          <RadioButton
            size={35}
            text="Medium"
            isSelected={false}
            isBounceable={false}
            animation={"bounceIn"}
            onPress={() => console.log("RadioButton is pressed")}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <RadioButton
            size={25}
            isSelected
            text="Mini"
            innerColor="#9e29d9"
            outerColor="#6a29d9"
            animation={"bounceIn"}
            onPress={() => console.log("RadioButton is pressed")}
            customImageComponent={
              <ImageBackground
                source={require("./assets/party.png")}
                style={{
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>Hello</Text>
              </ImageBackground>
            }
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
