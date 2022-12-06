import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CuButton from '../components/CuButton';
import styles from '../styles/global';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import CuChip, { CuChipDel } from '../components/CuChip';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

function Home({ navigation }) {

    const [data, setData] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [selectedCategoryArr, setSelectedCategoryArr] = useState([]);
    const [showMsg, setShowMsg] = useState('');

    const getData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((resolved) => {
                setData(resolved.data);
                // console.log(resolved.data);
                getCategories();
            })
            .catch((error) => {
                console.error(error.message);
            })
    }

    const moveData = (e) => {
        navigation.navigate('Product', e)
    }

    // Extract Unique categories from main product Array
    const getCategories = () => {
        let li = data.map(x => x.category)
        li = [...new Set([...li])]
        setAllCategories([...li])
    }

    // Set selected Categories in selectedCategoryArr and Update Filtered Products
    let selectChip = (val) => {
        let arr = [...selectedCategoryArr];
        arr.push(val);
        arr = [...new Set([...arr])]; // Set unique values of Multiple Selected Categories

        let arr2 = [];

        arr.forEach((y) => {
            arr2 = [...arr2, ...data.filter((x) => x.category == y)];
        });

        setFilterList([...arr2]); // Update the filtered Products (also for Multiple Categories)
        setSelectedCategoryArr([...arr]); // Pin the Selected Categories to the Start of the Categories Slider
    };

    let removeCategory = (ind) => {
        // Remove the current Pinned Chip with index
        selectedCategoryArr.splice(ind, 1);
        setSelectedCategoryArr([...selectedCategoryArr]);

        // Create a new array and Update the Filtered Products
        let arr2 = [];

        selectedCategoryArr.forEach((y) => {
            arr2 = [...arr2, ...data.filter((x) => x.category == y)];
        });

        setFilterList([...arr2]);
    };


    // Search Items through Input field
    let searchItems = (inputVal) => {
        let filteredItems = []

        {
            inputVal ?
                filteredItems = [
                    ...data.filter((x) =>
                        x.title.toLowerCase().includes(inputVal.toLowerCase())
                    ),
                ]
                : null
        }
        
        setFilterList([...filteredItems])
    }


    useEffect(() => {
        getData();
    }, []);


    return (

        <View style={[styles.mainContainer]}>

            {/* Search Input */}
            <View style={[styles.inputBox, { flexDirection: 'row', alignItems: 'center' }]}>
                <Icon color={styles._secondary} size={25} name='search' />
                {/* <Image source={userIcon} style={{ width: 26, height: 26, opacity: 0.3, marginRight: 5 }} /> */}
                <TextInput
                    style={[styles.input, { flexDirection: 'column', flex: 0 }]}
                    placeholder='Search ...'
                    // value={}
                    onChangeText={(e) => searchItems(e)} />
            </View>

            {/* Pin/Create Chip to the Start of the Selected Categories */}
            <Text style={[styles.me1, styles.pt1, styles.fs5, styles.textBold, { textAlignVertical: 'center' }]}>Categories:</Text>
            <ScrollView height={95} horizontal={true} style={{ paddingVertical: 10 }}>
                {selectedCategoryArr && selectedCategoryArr.length > 0
                    ? selectedCategoryArr.map((x, i) => (
                        <View key={i}>
                            <CuChipDel value={x} onPress={() => removeCategory(i)} style={{ backgroundColor: styles._primary }} chipTxtStyle={{ color: styles._white, textTransform: 'capitalize' }} />
                        </View>
                    ))
                    : null}

                {/* Mapping all Categories */}
                {allCategories && allCategories.length > 0
                    ? allCategories.map((e, i) => {
                        return (
                            <View key={i}>
                                <CuChip value={e} onPress={() => selectChip(e)} chipTxtStyle={{ color: styles._primary, textTransform: 'capitalize' }} />
                            </View>
                        )
                    }
                    ) : null}

            </ScrollView>


            <ScrollView>

                {filterList && filterList.length > 0
                    ?
                    <View>
                        <Text style={[styles.fs4, styles.textBold]}>Filtered Items</Text>
                        {/* {showMsg.length > 0 ? <Text style={[styles.fs5]}>{showMsg}</Text> : null} */}
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            {filterList.map((e, i) => {
                                return (
                                    <TouchableOpacity onPress={() => moveData(e)} key={i} style={[styles.card]}>
                                        <Image source={{ uri: e.image }} resizeMode='stretch' style={{ width: 120, height: 165 }} />

                                        <View style={[styles.cardDetails]}>
                                            <Text numberOfLines={2} style={[styles.title]}>{e.title}</Text>
                                            <Text style={[styles.highlight]}>${e.price}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View> :

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {data && data.length > 0
                            ? data.map((e, i) => {
                                return (
                                    <TouchableOpacity onPress={() => moveData(e)} key={e.id} style={[styles.card]}>
                                        <Image source={{ uri: e.image }} resizeMode='stretch' style={{ width: 120, height: 165 }} />

                                        <View style={[styles.cardDetails]}>
                                            <Text numberOfLines={2} style={[styles.title]}>{e.title}</Text>
                                            <Text style={[styles.highlight]}>${e.price}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }) : null}
                    </View>
                }
            </ScrollView>

        </View>

    )
}

export default Home;