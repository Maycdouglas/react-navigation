import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default props => {
    return (
        <View style={style.Center}>
            <Text style={{fontSize: 40}}> TELA C </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Center: {
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})