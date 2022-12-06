import React from 'react';
import { View, Text, Image } from 'react-native';
import CuButton from '../components/CuButton';
import styles from '../styles/global';

function SingleProduct({ navigation, route }) {

    let product = route.params;

    return (
        <>
            <View style={[styles.mainContainer , styles.bgWhite, {flex: 1}]}>
                <Text style={[styles.fs5, styles.mb1, { textTransform: 'capitalize' }]}>Category: {product.category}</Text>
                <Image source={{ uri: product.image }} resizeMode='stretch' style={{ width: 200, height: 275, alignSelf: 'center' }} />
                <Text style={styles.fs3} >Title: {product.title}</Text>
                <Text style={styles.fs4} >Price: ${product.price}</Text>
                <Text style={styles.fs6} >Description: {product.description}</Text>
                <Text >No of Items: {product.rating.count}</Text>
                <Text >Rating: {product.rating.rate}</Text>
                <CuButton style={{ backgroundColor: "#008080", borderRadius: 5 }} value='Add to Cart' onPress={() => { }} btnTxtStyle={{ color: '#fff' }} />
            </View>
        </>
    )
}

export default SingleProduct;