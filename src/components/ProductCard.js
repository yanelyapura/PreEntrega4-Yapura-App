import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: windowWidth } = Dimensions.get('window');

const CARD_MARGIN = 10;
const CARD_PADDING = 10;
const IMAGE_HEIGHT_DEFAULT = 150; 

const ProductCard = ({ product, cardStyle = 'default' }) => {
    const navigation = useNavigation();
    const { id, title, price, imageUrl, discountPercentage } = product;
    const hasDiscount = discountPercentage > 0;
    const finalPrice = hasDiscount ? price - (price * discountPercentage / 100) : price;

    const handlePress = () => navigation.navigate('ItemDetail', { productId: id });

    const containerStyles = [
        styles.card,
        cardStyle === 'searchResult' && styles.searchResultCard,
    ];

    const imageStyles = cardStyle === 'searchResult'
        ? [styles.image, styles.searchResultImage]
        : [styles.image, { height: IMAGE_HEIGHT_DEFAULT }];

    return (
        <TouchableOpacity onPress={handlePress} style={containerStyles}>
            <Image
                source={{ uri: imageUrl }}
                style={imageStyles}
                resizeMode= "contain"
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                {hasDiscount && (
                    <View style={styles.discountContainer}>
                        <Text style={styles.originalPrice}>${price.toFixed(2)}</Text>
                        <Text style={styles.discountText}>-{discountPercentage}%</Text>
                    </View>
                )}
                <Text style={styles.finalPrice}>${finalPrice.toFixed(2)}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: CARD_MARGIN,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    searchResultCard: {
        flexDirection: 'row',
        width: windowWidth - 2 * CARD_MARGIN, 
    },
    image: {
        width: '100%', 
        height: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    searchResultImage: {
        width: 100,
        height: 100, 
    },
    infoContainer: {
        flex: 1,
        padding: CARD_PADDING,
    },
    searchResultInfo: {
        justifyContent: 'space-around', 
    },
    title: {
        fontSize: 14,
        color: '#707070',
    },
    discountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    originalPrice: {
        fontSize: 12,
        color: 'grey',
        textDecorationLine: 'line-through',
    },
    discountText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#E47911',
    },
    finalPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#E47911',
    },
});

export default ProductCard;
