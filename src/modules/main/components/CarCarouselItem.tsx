import React, {FC, memo} from "react";
import dayjs from "dayjs";
import {StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import {Brand, Label, LabelSizes, LabelTypes} from "../../../common";
import {Colors, DesignGridSize, Fonts} from "../../../core";
import {useTranslation} from "react-i18next";
import {CarDto} from "../../../common/api";

interface IProps {
  item: CarDto;
}

export const CarCarouselItem: FC<IProps> = memo(({item}) => {
  const {t} = useTranslation();
  const subscriptionLabel = t("main.subscriptionUntil")
    + dayjs(item.subscriptionEnd).format(t("date.defaultDate").toString());

  return (
    <View>
      <View style={styles.carInfoContainer}>
        <View style={styles.subscriptionContainer}>
          <Brand.H6.Regular text={subscriptionLabel} color={Colors.white} />
        </View>
        <Label
          text={item.model}
          style={styles.carTitle}
          size={LabelSizes.H1}
          type={LabelTypes.Brand}
          allowFontScaling={false}
        />
        <Brand.H5 text={item.licensePlate} style={styles.licensePlate} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  carInfoContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: Colors.secondaryBackground,
    height: 70,
    borderRadius: 35,
    paddingHorizontal: DesignGridSize * 3.5,
    paddingTop: 0,
    paddingBottom: DesignGridSize,
  } as ViewStyle,
  carTitle: {
    fontFamily: Fonts.bandRegular,
    fontSize: 27,
    color: Colors.white,
  } as TextStyle,
  licensePlate: {
    color: Colors.tertiaryText,
    marginTop: DesignGridSize,
  } as TextStyle,
  subscriptionContainer: {
    top: -DesignGridSize,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.tertiaryText,
    paddingHorizontal: 8,
    height: DesignGridSize * 2,
    borderRadius: DesignGridSize,
  } as ViewStyle,
});
