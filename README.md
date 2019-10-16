<img alt="React Native Animated Radio Button" src="assets/logo.png" width="1050"/>


[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-animated-radio-button)


[![Fully customizable animated radio button for React Native](https://img.shields.io/badge/-Fully%20customizable%20animated%20radio%20button%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-animated-radio-button)


[![npm version](https://img.shields.io/npm/v/react-native-animated-radio-button.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-animated-radio-button)
[![npm](https://img.shields.io/npm/dt/react-native-animated-radio-button.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-animated-radio-button)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Animated Radio Button"
        src="assets/Screenshots/example.gif" />
</p>

# Installation

Add the dependency:

```ruby
npm i react-native-animated-radio-button
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-animatable": ">= 1.3.3"
```

# Usage

## Import

```js
import RadioButton from "react-native-animated-radio-button";
```

## Usage

```js
<RadioButton
  size={50}
  isSelected
  animation={"bounceIn"}
  onPress={() => console.log("RadioButton is pressed")}
/>
```

# Configuration - Props

| Property     |   Type   |  Default   | Description                                     |
| ------------ | :------: | :--------: | ----------------------------------------------- |
| size         |  number  |     16     | change the size of the radio button             |
| isSelected   | boolean  |   false    | set the selectable of the radio button          |
| isBounceable | boolean  |    true    | enable or disable the bounceable effect         |
| innerColor   |  color   | dodgerblue | change the radio button's inner circle color    |
| outerColor   |  color   | dodgerblue | change the radio button's outer circle color    |
| onPress      | function |     ()     | set your own function when onPress is triggered |


## Credits

This library is heavily inspired on [react-native-radio-button](https://github.com/mmazzarolo/react-native-radio-button)
It is re-written with a modern way. Also it has **built-in selection system**.
The library itself also has a bouncy animation when onPress is triggered.

## Future Plans

- [x] ~~LICENSE~~
- [ ] Left, right, bottom text component as optional
- [ ] Write an article about the lib on Medium


## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Animated Radio Button is available under the MIT license. See the LICENSE file for more info.
