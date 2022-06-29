import * as React from 'react';
import { Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import Checkout from '../Screens/Checkout/Checkout';
import Brands from '../Screens/Brands/Brands';
import Personalization from '../Screens/Personalization/Personalization';
import { Fonts } from '../Components/CustomText';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            barStyle={{ backgroundColor: Fonts.colors.themeColor }}
            screenOptions={{ headerShown: false ,}}>


            <Tab.Screen name="HomeScreen" options={{
                tabBarLabel: 'Home',
                
                tabBarIcon: ({ color }) => (
                    <Octicons name="home" color={'#fff'} size={25} />
                ),
            }} component={HomeScreen} />

            <Tab.Screen name="Checkout" component={Checkout} 
            options={{
                tabBarLabel: 'Checkout',
                tabBarIcon: ({ color }) => (
                     <Feather name ='shopping-cart' color={'#fff'} size={25} />
                    // <Image source={require('../../assets/images/cart.png')}/>
                ),
            }} />
            <Tab.Screen name="Personalization" component={Personalization} options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color }) => (
                   
                    <FontAwesome name="user" color={'#fff'} size={26} />
                ),
            }} />
            <Tab.Screen name="Brands" component={Brands} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <Ionicons name='ios-menu-outline' color={'#fff'} size={30} />
                ),
            }} />
        </Tab.Navigator>
    );
}