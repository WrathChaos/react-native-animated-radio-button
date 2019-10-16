import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Easing, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import styles, {
  innerStyle,
  outerStyle,
  transformStyle
} from "./RadioButton.style";

export default class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isSelected: this.props.isSelected,
      springValue: new Animated.Value(1)
    };
  }

  handleOnPress = () => {
    const { _isSelected } = this.state;
    this.setState({ _isSelected: !_isSelected });
    const { isBounceable, onPress } = this.props;
    if (isBounceable) this.spring(Easing.bounce);
    if (onPress) onPress();
  };

  spring = () => {
    const { springValue } = this.state;
    springValue.setValue(0.7);
    Animated.spring(springValue, {
      toValue: 1,
      friction: 5
    }).start();
  };

  render() {
    const { size, innerColor, outerColor } = this.props;

    const { springValue, _isSelected } = this.state;

    return (
      <TouchableOpacity onPress={this.handleOnPress}>
        <Animated.View
          style={[
            outerStyle(size, outerColor),
            transformStyle(springValue),
            styles.center
          ]}
        >
          {_isSelected ? (
            <View style={innerStyle(size, innerColor)} {...this.props} />
          ) : null}
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

RadioButton.propTypes = {
  size: PropTypes.number,
  onPress: PropTypes.func,
  isSelected: PropTypes.bool,
  isBounceable: PropTypes.bool,
  innerColor: PropTypes.string,
  outerColor: PropTypes.string
};

RadioButton.defaultProps = {
  size: 16,
  isSelected: false,
  isBounceable: true,
  onPress: () => null,
  innerColor: "dodgerblue",
  outerColor: "dodgerblue"
};
