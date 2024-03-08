import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import useOrderHistoryScreen, {OrderHistoryScreenProps} from './hook';

const OrderHistoryScreen: FC<OrderHistoryScreenProps> = () => {
  const {} = useOrderHistoryScreen({});
  return (
    <View>
      <Text>OrderHistoryScreen</Text>
    </View>
  );
};

export default OrderHistoryScreen;
