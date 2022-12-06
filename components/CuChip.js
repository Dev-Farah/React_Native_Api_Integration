import React from 'react';
import { TouchableHighlight, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/global';


function CuChip(props) {

    const { onPress, value, style, chipTxtStyle, key } = props;


    return (
        <TouchableOpacity key={key} onPress={onPress} style={[styles.chips, {style}]}>
            <Text style={chipTxtStyle}>{value}</Text>
        </TouchableOpacity>
    )
}

function CuChipDel(props) {

    const { onPress, value, style, chipTxtStyle, key } = props;


    return (
        <TouchableOpacity key={key} onPress={onPress} style={[styles.chips, { backgroundColor: '#008080' }]}>
            <Text style={chipTxtStyle}>{value}</Text>
        </TouchableOpacity>
    )
}

export default CuChip;
export { CuChipDel };