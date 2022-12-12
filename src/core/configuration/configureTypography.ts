import {typography} from "../../common/typography";
import {Fonts} from "../theme";

export function configureTypography() {
  typography.configure({
    Brand: {
      H1: {
        fontFamily: Fonts.bandRegular,
        fontWeight: "normal",
        fontSize: 22,
        lineHeight: 26,
        letterSpacing: 0.2,
      },
      H2: {
        fontFamily: Fonts.bandRegular,
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 21,
      },
      H3: {
        fontFamily: Fonts.bandRegular,
        fontWeight: "normal",
        fontSize: 17,
        lineHeight: 20,
        letterSpacing: 0.2,
      },
      H4: {
        fontFamily: Fonts.bandBold,
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 18,
        textTransform: "uppercase",
      },
      H5: {
        fontFamily: Fonts.bandRegular,
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
      },
      H6: {
        fontFamily: Fonts.bandBold,
        fontWeight: "normal",
        fontSize: 11,
        lineHeight: 13,
        letterSpacing: -0.165,
      },
    },
    Regular: {
      H1: {
        fontWeight: "400",
        fontSize: 15,
        lineHeight: 22,
        letterSpacing: -0.165,
      },
      H2: {
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -0.165,
      },
      H3: {
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 18,
      },
      H4: {
        fontWeight: "700",
        fontSize: 11,
        lineHeight: 14,
        letterSpacing: 0.2,
      },
      H5: {
        fontWeight: "400",
        fontSize: 11,
        lineHeight: 14,
      },
      H6: {
        fontWeight: "700",
        fontSize: 9,
        lineHeight: 12,
        textTransform: "uppercase",
      },
    },
  });
}
