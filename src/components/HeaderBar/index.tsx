import {Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import useHeaderBar, {HeaderBarProps} from './hook';
import GrandientBGIcon from '../GradientBGIcon';
import {COLORS, FONTSIZE} from '../../theme/theme';
import ProfilePicture from '../ProfilePicture';

const HeaderBar: FC<HeaderBarProps> = props => {
  const {title} = useHeaderBar(props);
  return (
    <View style={styles.headerBarContainer}>
      <GrandientBGIcon
        name="menu"
        size={FONTSIZE.size_16}
        color={COLORS.primaryLightGreyHex}
      />
      <Text style={styles.textStyle}>{title}</Text>
      <ProfilePicture />
    </View>
  );
};

export default HeaderBar;
