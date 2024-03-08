import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import useCartScreen, {CartScreenProps} from './hook';

const CartScreen: FC<CartScreenProps> = () => {
  const {} = useCartScreen({});
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;
