import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import data from '../data.json';
import ProductCard from './ProductCard';

const ProductRecommendations = () => {
  const recommendations = data.products.slice(-2);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recomendaciones de Productos</Text>
      <FlatList
        horizontal
        data={recommendations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductRecommendations;
