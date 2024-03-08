import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import useHomeScreen, {HomeScreenProps} from './hook';

const HomeScreen: FC<HomeScreenProps> = () => {
  const {} = useHomeScreen({});
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
