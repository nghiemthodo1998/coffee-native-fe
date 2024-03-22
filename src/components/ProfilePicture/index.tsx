import {Image, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import useProfilePicture, {ProfilePictureProps} from './hook';

const ProfilePicture: FC<ProfilePictureProps> = props => {
  const {} = useProfilePicture(props);
  return (
    <View style={styles.ProfilePictureContainer}>
      <Image
        source={require('../../assets/app_images/avatar.png')}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default ProfilePicture;
