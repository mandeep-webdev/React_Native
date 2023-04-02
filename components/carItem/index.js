import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Button from '../button';
import styles from './styles';

const CartItem = ({ name, tagline, img }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={img} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          content={'View Inventory'}
          onPress={() => {
            console.warn('View Inventory is Pressed');
          }}
        />
        <Button
          type="secondary"
          content={'Custom Order'}
          onPress={() => {
            console.warn('Custom Order is Pressed');
          }}
        />
      </View>
    </View>
  );
};

export default CartItem;
