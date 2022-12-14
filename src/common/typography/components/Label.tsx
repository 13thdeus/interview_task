import _ from "lodash";
import React, {FC, memo, useMemo} from "react";
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from "react-native";
import {LabelSizes, LabelTypes, LabelWeights} from "../types";
import {Typography} from "../typography";
import {useTranslation} from "react-i18next";
import {LocalizedTextDto} from "../../api/common/LocalizedTextDto";
import {TFuncKeyApp} from "../../localization/localization";
import {getLocalizedValue} from "../../localization/localizedTextHelper";
import {Colors, Fonts} from "../../../core";

export interface ILabelProps extends TextProps {
  size: LabelSizes;
  type: LabelTypes;
  weight?: LabelWeights;
  text?: string | number | LocalizedTextDto | null;
  labelKey?: TFuncKeyApp;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const Label: FC<ILabelProps> = memo((props) => {
  const config = useMemo(() => Typography.configuration, []);

  const {t} = useTranslation();
  const style = useMemo(
    () => {
      let baseStyle: TextStyle | null = _.get(config, `${props.type}.${props.size}`, null);

      if (!baseStyle) {
        console?.warn(`${props.type} style of size ${props.size} where not found`, {
          stack: new Error("debug error").stack,
        });
        baseStyle = {};
      }

      let weightStyle = {};

      switch (props.weight) {
        case LabelWeights.Regular:
          weightStyle = {fontFamily: Fonts.bandRegular};
          break;
        case LabelWeights.Medium:
          weightStyle = {fontFamily: Fonts.bandMedium};
          break;
        case LabelWeights.Bold:
          weightStyle = {fontFamily: Fonts.bandBold};
          break;
        case LabelWeights.EBold:
          weightStyle = {fontFamily: Fonts.bandHeavy};
          break;
        default:
          break;
      }

      return StyleSheet.flatten([baseStyle, weightStyle, props.color ? {color: props.color} : {color: Colors.text}, props.style]);
    },
    [config, props.color, props.size, props.style, props.type, props.weight],
  );

  const content = useMemo(() => {
    let text: string | undefined;
    if (props.labelKey) {
      text = t(props.labelKey) as string;
    } else {
      text = getLocalizedValue(props.text);
    }

    return text || props.children || "";
  }, [props.children, props.labelKey, props.text, t]);

  return (
    <Text {...props} style={style}>{content}</Text>
  );
});

Label.defaultProps = {
  size: LabelSizes.H4,
};

Label.displayName = "Label";
