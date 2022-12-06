import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import SingleProduct from '../screens/singleProduct';


const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Product" component={SingleProduct} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Sign Up" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;