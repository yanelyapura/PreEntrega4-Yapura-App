import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import data from '../data.json'; 
import ProductCard from './ProductCard'; 

const Promotions = () => {
  const productsWithDiscount = data.products.filter(product => product.discountPercentage > 0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Promociones Especiales</Text>
      <FlatList
        horizontal
        data={productsWithDiscount}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#eaeaea',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContainer: {
    alignItems: 'center',
  },
});

export default Promotions;
