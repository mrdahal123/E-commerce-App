import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProductDetails from '../Screens/ProductDetails/ProductDetails';
import Onbording from '../Screens/onboarding/Onbording';
import MyCart from '../Screens/MyCart/MyCart';
import Checkout from '../Screens/Checkout/Checkout';
import Filters from '../Screens/Filters/Filters';
import Brands from '../Screens/Brands/Brands';
import OrderSuccess from '../Screens/OrderSuccess/OrderSuccess';
import Personalization from '../Screens/Personalization/Personalization';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (

        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
            {/* <Stack.Screen name="Onbording" component={Onbording} /> */}
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="MyCart" component={MyCart} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="Filters" component={Filters} />
            <Stack.Screen name="Brands" component={Brands} />
            <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
            <Stack.Screen name="Personalization" component={Personalization} />
        </Stack.Navigator>
    )
}
export default StackNav