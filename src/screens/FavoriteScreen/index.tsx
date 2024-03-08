import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import useFavoriteScreen, {FavoriteScreenProps} from './hook';

const FavoriteScreen: FC<FavoriteScreenProps> = () => {
  const {} = useFavoriteScreen({});
  return (
    <View>
      <Text>FavoriteScreen</Text>
    </View>
  );
};

export default FavoriteScreen;
