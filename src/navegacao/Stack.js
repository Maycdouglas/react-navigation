import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from '../screens/TelaA'
import TelaB from '../screens/TelaB'
import TelaC from '../screens/TelaC'
import TelaD from '../screens/TelaD'
import PassoStack from '../components/PassoStack'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator 
        initialRouteName='TelaA'
        screenOptions={{headerShown: true}} //se for false, não terá título na tela. O padrão é true
        >
        <Stack.Screen 
            name="TelaA" 
            options={{title: 'Muda o título do topo da tela'}}
        >
            {props => (
                <PassoStack {...props} avancar="TelaB">
                    <TelaA/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen 
            name="TelaB" 
            options={{title: 'Muda o título do topo da tela 2'}}
        >
            {props => (
                <PassoStack {...props} avancar="TelaC" voltar>
                    <TelaB/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen 
            name="TelaC" 
            options={{title: 'Muda o título do topo da tela 3'}}
        >
            {props => (
                <PassoStack {...props} avancar="TelaD">
                    <TelaC/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen 
            name="TelaD" 
            options={{title: 'Muda o título do topo da tela 4'}}
        >
            {props => (
                <PassoStack {...props} avancar="TelaD">
                    <TelaD {...props}/>
                </PassoStack>
            )}
        </Stack.Screen>

    </Stack.Navigator>
)