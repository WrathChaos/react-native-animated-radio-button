import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _innerStyle } from "./RadioButton.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IRadioButtonProps {
  style?: CustomStyleProp;
  innerContainer?: CustomStyleProp;
  onPress: (isActive: boolean) => void;
}

interface IState {
  isActive: boolean;
}

export default class RadioButton extends React.Component<
  IRadioButtonProps,
  IState
> {
  constructor(props: IRadioButtonProps) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handlePress = () => {
    this.setState({ isActive: !this.state.isActive }, () => {
      this.props.onPress && this.props.onPress(this.state.isActive);
    });
  };

  render() {
    const { style, innerContainer } = this.props;
    return (
      <RNBounceable
        style={[styles.container, style]}
        onPress={this.handlePress}
      >
        <View style={[_innerStyle(this.state.isActive), innerContainer]} />
      </RNBounceable>
    );
  }
}
