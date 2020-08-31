import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Easing, Text, TouchableOpacity, Image } from "react-native";
import { View } from "react-native-animatable";
import styles, {
  textStyle,
  innerStyle,
  outerStyle,
  isHorizontal,
  textContainer,
  transformStyle,
} from "./RadioButton.style";

export default class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isSelected: this.props.isSelected,
      springValue: new Animated.Value(1),
    };
  }

  handleOnPress = () => {
    const { _isSelected } = this.state;
    this.setState({ _isSelected: !_isSelected });
    const { isBounceable, onPress } = this.props;
    if (isBounceable) this.spring(Easing.bounce);
    this.props.onChange && this.props.onChange(item);
    if (onPress) onPress();
  };

  spring = () => {
    const { springValue } = this.state;
    springValue.setValue(0.7);
    Animated.spring(springValue, {
      toValue: 1,
      friction: 5,
    }).start();
  };

  render() {
    const {
      text,
      size,
      active,
      fontSize,
      textColor,
      horizontal,
      innerColor,
      outerColor,
      disableText,
      imageSource,
      imageStyle,
      disableImage,
      customImageComponent,
      disableBuiltinStateManagement,
      ImageComponent = Image,
    } = this.props;
    const { springValue, _isSelected } = this.state;

    let stateManagement = _isSelected;
    if (disableBuiltinStateManagement) stateManagement = active;
    else _isSelected;

    return (
      <TouchableOpacity
        style={[isHorizontal(horizontal), styles.center]}
        onPress={this.handleOnPress}
      >
        <Animated.View
          style={[
            outerStyle(size, outerColor),
            transformStyle(springValue),
            styles.center,
          ]}
        >
          {stateManagement ? (
            <View style={innerStyle(size, innerColor)} {...this.props} />
          ) : null}
        </Animated.View>
        <View style={textContainer(horizontal)}>
          {!disableImage && (customImageComponent || (
            <ImageComponent
              style={imageStyle || styles.imageStyle}
              source={imageSource}
            />
          ))}
          {!disableText && (
            <Text style={textStyle(textColor, innerColor, fontSize)}>
              {text}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

RadioButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  onPress: PropTypes.func,
  horizontal: PropTypes.bool,
  fontSize: PropTypes.number,
  isSelected: PropTypes.bool,
  disableText: PropTypes.bool,
  isBounceable: PropTypes.bool,
  innerColor: PropTypes.string,
  outerColor: PropTypes.string,
};

RadioButton.defaultProps = {
  size: 16,
  fontSize: 16,
  horizontal: true,
  isSelected: false,
  isBounceable: true,
  disableText: false,
  onPress: () => null,
  text: "Radio Button",
  innerColor: "dodgerblue",
  outerColor: "dodgerblue",
};
