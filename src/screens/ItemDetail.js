import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, Button } from 'react-native';
import { products } from '../data.json';

const ItemDetail = ({ route }) => {
    const { productId } = route.params;
    const product = products.find(product => product.id === productId);
    const [isPortrait, setIsPortrait] = useState(Dimensions.get('window').height > Dimensions.get('window').width);

    useEffect(() => {
        const updateOrientation = () => {
            setIsPortrait(Dimensions.get('window').height > Dimensions.get('window').width);
        };
    
        const subscription = Dimensions.addEventListener('change', updateOrientation);
    
        return () => {
            subscription.remove();
        };
    }, []);
        

    const finalPrice = product.discountPercentage > 0
        ? product.price - (product.price * product.discountPercentage / 100)
        : product.price;

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: product.imageUrl }}
                style={[styles.productImage, { height: isPortrait ? 300 : 200 }]}
                resizeMode="contain"
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{product.title}</Text>
                {product.discountPercentage > 0 && (
                    <View style={styles.discountInfo}>
                        <Text style={styles.originalPrice}>${product.price.toFixed(2)}</Text>
                        <Text style={styles.discountText}>-{product.discountPercentage}%</Text>
                    </View>
                )}
                <Text style={styles.finalPrice}>${finalPrice.toFixed(2)}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Comprar ahora" onPress={() => {}} />
                    <Button title="Agregar al carrito" onPress={() => {}} color="#f0c14b" />
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productImage: {
        width: '100%',
        marginBottom: 20,
    },
    detailsContainer: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    discountInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    originalPrice: {
        fontSize: 18,
        color: 'grey',
        textDecorationLine: 'line-through',
    },
    discountText: {
        fontSize: 18,
        color: '#E47911',
        fontWeight: 'bold',
    },
    finalPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#B12704',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
});

export default ItemDetail;
