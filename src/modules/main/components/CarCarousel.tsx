import React, {FC, memo, useState} from "react";
import {StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import Carousel from "react-native-snap-carousel";
import {Brand, Label, LabelSizes, LabelTypes} from "../../../common";
import {CarDto} from "../../../common/api";
import {Colors, DesignGridSize, Fonts, windowWidth} from "../../../core";
import dayjs from "dayjs";
import {useTranslation} from "react-i18next";

interface IProps {
  data: CarDto[];
}

export const CarCarousel: FC<IProps> = memo((props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const {t} = useTranslation();

  const _renderItem = ({item}: {item: CarDto; index: number}) => {
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
  };

  return (
    <>
      <Carousel
        data={props.data}
        renderItem={_renderItem}
        sliderWidth={windowWidth - DesignGridSize * 3}
        itemWidth={windowWidth - DesignGridSize * 3}
        vertical={false}
        enableSnap={true}
        contentContainerCustomStyle={styles.carouselContainer}
        onSnapToItem={setActiveSlide}
      />
      <View style={styles.paginationContainer}>
        {props.data.map((c, i) => (
          <View key={c.id} style={activeSlide == i ? styles.paginationActiveDot : styles.paginationDot} />
        ))}
      </View>
    </>
  );
});

const baseDotStyle = {
  width: DesignGridSize,
  height: DesignGridSize,
  borderRadius: DesignGridSize / 2,
  marginHorizontal: DesignGridSize / 4,
};

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
  carouselContainer: {
    alignItems: "flex-end",
  } as ViewStyle,
  paginationContainer: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: DesignGridSize * 3,
  } as ViewStyle,
  paginationDot: {
    ...baseDotStyle,
    backgroundColor: Colors.secondaryText,
  } as ViewStyle,
  paginationActiveDot: {
    ...baseDotStyle,
    backgroundColor: Colors.white,
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
