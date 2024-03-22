import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import useCoffeeCard, {CoffeeCardProps} from './hook';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTSIZE} from '../../theme/theme';
import {CustomIcon} from '../CustomIcon';
import BgIcon from '../BgIcon';

const CoffeeCard: FC<CoffeeCardProps> = props => {
  const {
    id,
    index,
    type,
    roasted,
    imagelink_square,
    name,
    special_ingredient,
    average_rating,
    price,
    buttonPressHandler,
  } = useCoffeeCard(props);
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.coffeeCardContainer}>
      <ImageBackground
        source={imagelink_square}
        resizeMode="cover"
        style={styles.imageBackgroundStyle}>
        <View style={styles.cardRatingContainer}>
          <CustomIcon
            name={'star'}
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_16}
          />
          <Text style={styles.cardRatingTextStyle}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.cardTitleStyle}>{name}</Text>
      <Text style={styles.cardSubtitleStyle}>{special_ingredient}</Text>
      <View style={styles.cardFooterContainer}>
        <Text style={styles.cardPriceCurrencyStyle}>
          $ <Text style={styles.cardPriceTextStyle}>{price.price}</Text>
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <BgIcon
            color={COLORS.primaryWhiteHex}
            name={'add'}
            BGColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CoffeeCard;
