import {Platform, StyleSheet, ViewStyle} from "react-native";
import { DesignGridSize, windowWidth } from "./commonConsts";

export const CommonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  } as ViewStyle,
  flexShrink: {
    flexShrink: 1,
  } as ViewStyle,
  flexCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  flexColumnCenterStretch: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  } as ViewStyle,
  flexPlatformBackground: {
    flex: 1,
  } as ViewStyle,
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  } as ViewStyle,
  row: {
    flexDirection: "row",
  } as ViewStyle,
  columnAlignStart: {
    flexDirection: "column",
    alignItems: "flex-start",
  } as ViewStyle,
  shadow: {
    ...Platform.select({
      ios: {
        shadowOffset: {height: DesignGridSize / 2, width: 0},
        shadowOpacity: 0.05,
        shadowRadius: 15,
      },
      android: {
        elevation: 14,
      },
    }),
  },
  shadowTopBar: {
    ...Platform.select({
      ios: {
        shadowOffset: {height: 8, width: 0},
        shadowOpacity: 1,
        shadowRadius: 12,
        shadowColor: "rgba(0.22, 0.27, 0.28, 0.08)",
      },
      android: {
        elevation: 5,
      },
    }),
  },
  iPhoneXFooter: {
    height: 20,
  } as ViewStyle,
  absoluteCenter: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  noTextTransform: {
    textTransform: "none",
  },
  upperCaseText: {
    textTransform: "uppercase",
  },
  visibleOverflow: {
    overflow: "visible",
  } as ViewStyle,
  windowWidth: {
    width: windowWidth,
  },
});
