<img alt="React Native Animated Radio Button" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-animated-radio-button)

[![Fully customizable animated radio button for React Native](https://img.shields.io/badge/-Fully%20customizable%20animated%20radio%20button%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-animated-radio-button)

[![npm version](https://img.shields.io/npm/v/react-native-animated-radio-button.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-animated-radio-button)
[![npm](https://img.shields.io/npm/dt/react-native-animated-radio-button.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-animated-radio-button)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Animated Radio Button" src="assets/Screenshots/example.gif" height="700" />
</p>

# Version 2 is here 😍

Finally version 2 is here with much basic usage and re-written code.
It does not support a text but it is easy to add a text depends on the dev
Typescript support and much cleaner code

# Installation

Add the dependency:

```bash
npm i react-native-animated-radio-button
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"@freakycoder/react-native-bounceable": ">= 0.2.5",
```

# Usage

## Import

```jsx
import RadioButton from "react-native-animated-radio-button";
```

## Fundamental Usage

You can check the example out 😏

```jsx
<RadioButton
  onPress={(isActive: boolean) =>
    console.log("RadioButton isActive: ", isActive)
  }
/>
```

# Configuration - Props

| Property             |   Type   | Default | Description                                     |
| -------------------- | :------: | :-----: | ----------------------------------------------- |
| style                |  style   | default | set the main container's style (outer circle)   |
| innerContainerStyle  |  style   | default | set the inner container's style (inner circle)  |
| innerBackgroundColor |  color   |   red   | change the inner circle's background color      |
| onPress              | function | default | set your own function when onPress is triggered |

## Future Plans

- [x] ~~LICENSE~~
- [x] ~~Horizontal & Vertical text component as optional~~
- [x] ~~Typescript Challenge!~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Animated Radio Button is available under the MIT license. See the LICENSE file for more info.
