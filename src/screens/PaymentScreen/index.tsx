import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import usePaymentScreen, {PaymentScreenProps} from './hook';

const PaymentScreen: FC<PaymentScreenProps> = props => {
  const {} = usePaymentScreen(props);
  return (
    <View>
      <Text>PaymentScreen</Text>
    </View>
  );
};

export default PaymentScreen;
