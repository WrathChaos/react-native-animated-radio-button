import * as React from "react";
import { View, StyleProp, ViewStyle, Alert } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _innerStyle } from "./RadioButton.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export interface IRadioButtonProps {
  style?: CustomStyleProp;
  innerContainerStyle?: CustomStyleProp;
  isActive?: boolean;
  initial?: boolean;
  innerBackgroundColor?: string;
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
      isActive: props.initial || false,
    };
  }

  handlePress = () => {
    const { isActive = undefined } = this.props;
    if (isActive !== undefined && isActive !== null) {
      this.props.onPress && this.props.onPress(isActive!);
    } else {
      this.setState({ isActive: !this.state.isActive }, () => {
        this.props.onPress && this.props.onPress(this.state.isActive);
      });
    }
  };

  render() {
    const {
      style,
      isActive = undefined,
      innerContainerStyle,
      innerBackgroundColor = "red",
    } = this.props;
    return (
      <RNBounceable
        style={[styles.container, style]}
        onPress={this.handlePress}
      >
        <View
          style={[
            _innerStyle(isActive || this.state.isActive, innerBackgroundColor),
            innerContainerStyle,
          ]}
        />
      </RNBounceable>
    );
  }
}
