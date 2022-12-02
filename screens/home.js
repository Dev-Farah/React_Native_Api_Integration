import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import CuButton from '../components/CuButton';
import styles from '../styles/global';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';


function Home() {

    const [data, setData] = useState([]);
    const [filterList, setFilterList] = useState([]);

    const getData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((resolved) => {
                setData(resolved.data);
                // console.log(resolved.data);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }

    let searchItems = (inputVal) => {
        let filteredList = [];
        filteredList = [
            ...data.filter((x) =>
                x.title.toLowerCase().includes(inputVal.toLowerCase())
            ),
        ];
        setFilterList([...filteredList]);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <View>
            <View style={[styles.header, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                <CuButton style={{ backgroundColor: "#008080", borderRadius: 5 }} value='MyShop' onClick={() => { }} btnTxtStyle={{ color: '#fff', fontSize: 20 }} />
                <View style={{ flexDirection: 'row' }}>
                    <CuButton style={{ backgroundColor: "#008080", borderRadius: 5 }} value='Sign Up' onClick={() => { }} btnTxtStyle={{ color: '#fff' }} />
                    <CuButton style={{ backgroundColor: "#008080", borderRadius: 5 }} value='Login' onClick={() => { }} btnTxtStyle={{ color: '#fff' }} />

                </View>
            </View>
            <View style={[styles.mainContainer]}>
                <View style={[styles.inputBox, { flexDirection: 'row', alignItems: 'center' }]}>
                    {/* <Image source={userIcon} style={{ width: 26, height: 26, opacity: 0.3, marginRight: 5 }} /> */}
                    <TextInput
                        style={[styles.input, { flexDirection: 'column', flex: 0 }]}
                        placeholder='Search ...'
                        // value={}
                        onChangeText={(e) => searchItems(e)} />
                </View>

                {data && data.length > 0
                    ? data.map((e, i) => {
                        return (
                            <View key={e.id} style={[styles.card]}>
                                <Image source={{ uri: e.image }} resizeMode='stretch' style={{ width: 200, height: 260 }} />

                                <View style={[styles.cardDetails]}>
                                    <Text style={[styles.title]}>{e.title}</Text>
                                    <Text style={[styles.highlight]}>${e.price}</Text>
                                    <CuButton style={{ backgroundColor: "#008080", borderRadius: 5 }} value='See More' onClick={() => { }} btnTxtStyle={{ color: '#fff' }} />

                                    {/* <Text>{e.category}</Text> */}
                                    {/* <Text style={[styles.description]}>{e.description}</Text> */}
                                </View>
                            </View>
                        )
                    }) : null}

            </View>
        </View>
    )
}

export default Home