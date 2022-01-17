import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './Stack'
import Tab from './Tab'
import Drawer from './Drawer'


export default props => (
    <View style={{flex: 1}}>
        {/* <NavigationContainer>
            <Stack/>
        </NavigationContainer> */}
        {/* <NavigationContainer>
            <Tab/>
        </NavigationContainer> */}
        <NavigationContainer>
            <Drawer/>
        </NavigationContainer>
    </View>
)