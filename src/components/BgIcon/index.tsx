import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import useBgIcon, {BgIconProps} from './hook';
import {CustomIcon} from '../CustomIcon';

const BgIcon: FC<BgIconProps> = props => {
  const {name, color, size, BGColor} = useBgIcon(props);
  return (
    <View style={[styles.bgIconContainer, {backgroundColor: BGColor}]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};

export default BgIcon;
