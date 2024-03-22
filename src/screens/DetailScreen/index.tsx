import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import useDetailScreen, {DetailScreenProps} from './hook';

const DetailScreen: FC<DetailScreenProps> = props => {
  const {} = useDetailScreen(props);
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;
