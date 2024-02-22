import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import data from '../data.json';
import ProductCard from './ProductCard';

const RecentlyVisited = () => {
    const recentlyVisited = data.products.slice(0, 2);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Visitados Recientemente</Text>
            <FlatList
                horizontal
                data={recentlyVisited}
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

export default RecentlyVisited;
