import {StyleSheet} from 'react-native';
import {COLORS, SPACING} from '../../theme/theme';

const styles = StyleSheet.create({
  ProfilePictureContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  imageStyle: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

export default styles;
