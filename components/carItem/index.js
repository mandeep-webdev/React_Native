import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Button from '../button';
import styles from './styles';

const CartItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $70,000</Text>
      </View>
      <Button
        type="primary"
        content={'Custom Order'}
        onPress={() => {
          console.warn('Custom Order is Pressed');
        }}
      />
      <Button
        type="secondary"
        content={'Existing Inventory'}
        onPress={() => {
          console.warn('Existing Inventory is Pressed');
        }}
      />
    </View>
  );
};

export default CartItem;
