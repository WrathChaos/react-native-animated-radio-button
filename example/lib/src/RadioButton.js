import React, { useState } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { innerStyle, outerStyle } from "./RadioButton.style";

const RadioButton = props => {
  const { size, innerColor, outerColor, isSelected, onPress } = props;
  const [_isSelected, setSelected] = useState(isSelected);

  handleOnPress = () => {
    setSelected(!_isSelected);
    if (onPress) onPress();
  };

  return (
    <TouchableOpacity
      style={[
        { justifyContent: "center", alignItems: "center", alignSelf: "center" },
        outerStyle(size, outerColor)
      ]}
      onPress={handleOnPress}
    >
      {_isSelected ? (
        <View style={innerStyle(size, innerColor)} {...props} />
      ) : null}
    </TouchableOpacity>
  );
};

RadioButton.propTypes = {
  size: PropTypes.number,
  innerColor: PropTypes.string,
  outerColor: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func
};

RadioButton.defaultProps = {
  size: 16,
  innerColor: "dodgerblue",
  outerColor: "dodgerblue",
  isSelected: false,
  onPress: () => null
};

export default RadioButton;
