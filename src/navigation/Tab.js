import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from '../screens/TelaA'
import TelaB from '../screens/TelaB'
import TelaC from '../screens/TelaC'
import TelaD from '../screens/TelaD'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator screenOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'red',
        labelStyle: { fontSize: 30}
        }}>
        <Tab.Screen name="TelaA" component={TelaA}/>
        <Tab.Screen name="TelaB" component={TelaB}/>
        <Tab.Screen name="TelaC" component={TelaC}/>
        <Tab.Screen name="TelaD" component={TelaD}/>
    </Tab.Navigator>
)