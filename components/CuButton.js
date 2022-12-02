import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


function CuButton(props) {

    let { onClick, value, style, btnTxtStyle } = props;

    return (
        <TouchableOpacity onClick={onClick} style={[style, { margin: 10, padding: 10, alignItems: 'center' }]}>
            <Text style={btnTxtStyle}>{value}</Text>
        </TouchableOpacity >
    )
}

export default CuButton;