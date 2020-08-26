import {
  DEFAULT_SIZE_MULTIPLIER,
  DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER,
} from "./utils/constants";

export const isHorizontal = (horizontal) => ({
  flexDirection: horizontal ? "column" : "row",
});

export const innerStyle = (size, innerColor) => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor: innerColor,
});

export const outerStyle = (size, outerColor) => ({
  justifyContent: "center",
  borderColor: outerColor,
  width: size + size * DEFAULT_SIZE_MULTIPLIER,
  height: size + size * DEFAULT_SIZE_MULTIPLIER,
  borderRadius: (size + size * DEFAULT_SIZE_MULTIPLIER) / 2,
  borderWidth: size * DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER,
});

export const transformStyle = (springValue) => ({
  transform: [{ scale: springValue }],
});

export const textStyle = (textColor, innerColor, fontSize) => ({
  fontSize,
  color: textColor || innerColor,
});

export const textContainer = (horizontal) => ({
  marginTop: horizontal ? 8 : 0,
  marginLeft: horizontal ? 0 : 8,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export default {
  center: {
    alignItems: "center",
  },
  imageStyle: {
    width: 35,
    height: 35,
    marginRight: 8,
    marginLeft: 4,
  },
};
