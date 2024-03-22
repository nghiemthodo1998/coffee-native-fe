import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import useGrandientBGIcon, {GrandientBGIconProps} from './hook';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../theme/theme';
import {CustomIcon} from '../CustomIcon';

const GrandientBGIcon: FC<GrandientBGIconProps> = props => {
  const {color, name, size} = useGrandientBGIcon(props);
  return (
    <View style={styles.grandientBGIconContainer}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.linearGradientStyle}>
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};

export default GrandientBGIcon;
