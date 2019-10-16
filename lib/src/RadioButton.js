import React, { useState } from "react";
import PropTypes from "prop-types";
import { Animated, Easing, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import styles, {
  innerStyle,
  outerStyle,
  transformStyle
} from "./RadioButton.style";

const RadioButton = props => {
  const {
    size,
    innerColor,
    outerColor,
    isSelected,
    onPress,
    isBouncable
  } = props;
  const [_isSelected, setSelected] = useState(isSelected);
  const [springValue, setSpringValue] = useState(new Animated.Value(1));

  handleOnPress = () => {
    setSelected(!_isSelected);
    if (isBouncable) spring(Easing.bounce);
    if (onPress) onPress();
  };

  spring = () => {
    springValue.setValue(0.7);
    Animated.spring(springValue, {
      toValue: 1,
      friction: 5
    }).start();
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Animated.View
        style={[
          outerStyle(size, outerColor),
          transformStyle(springValue),
          styles.center
        ]}
      >
        {_isSelected ? (
          <View style={innerStyle(size, innerColor)} {...props} />
        ) : null}
      </Animated.View>
    </TouchableOpacity>
  );
};

RadioButton.propTypes = {
  size: PropTypes.number,
  onPress: PropTypes.func,
  isSelected: PropTypes.bool,
  isBouncable: PropTypes.bool,
  innerColor: PropTypes.string,
  outerColor: PropTypes.string
};

RadioButton.defaultProps = {
  size: 16,
  isSelected: false,
  isBouncable: true,
  onPress: () => null,
  innerColor: "dodgerblue",
  outerColor: "dodgerblue"
};

export default RadioButton;
