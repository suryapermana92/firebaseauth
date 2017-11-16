import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
    const { containerStyle, labelStyle, inputStyle   } = styles;
    const { text, placeholder, onChangeText, secureTextEntry, autoCorrect } = props;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{text}</Text>
            <TextInput 
            style={inputStyle}
            placeholder={placeholder}
            onChangeText={ onChangeText }
            secureTextEntry={secureTextEntry}
            autoCorrect={autoCorrect}/>
        </View>
    )
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        height: 40,
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 20,
        flex: 2
    }
}
export { Input }