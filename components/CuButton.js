import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


function CuButton(props) {

    const { onPress, value, style, btnTxtStyle } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[style, { margin: 5, padding: 10, alignItems: 'center' }]}>
            <Text style={btnTxtStyle}>{value}</Text>
        </TouchableOpacity>
    )
}

export default CuButton;