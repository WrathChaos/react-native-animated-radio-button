import {
  DEFAULT_SIZE_MULTIPLIER,
  DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER
} from "./constants";

export const innerStyle = (size, innerColor) => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor: innerColor
});

export const outerStyle = (size, outerColor) => ({
  borderColor: outerColor,
  width: size + size * DEFAULT_SIZE_MULTIPLIER,
  height: size + size * DEFAULT_SIZE_MULTIPLIER,
  borderRadius: (size + size * DEFAULT_SIZE_MULTIPLIER) / 2,
  borderWidth: size * DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER
});

export default {
  center: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  }
};
