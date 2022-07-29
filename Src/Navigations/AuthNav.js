import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../Screens/Auth/Signin';
import SignUp from '../Screens/Auth/SignUp';
import Otp from '../Screens/Auth/Otp';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (

        <Stack.Navigator initialRouteName='Signin' screenOptions={{headerShown:false}}>
            {/* <Stack.Screen name="Onbording" component={Onbording} /> */}
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Otp" component={Otp} />
        </Stack.Navigator>
    )
}
export default StackNav