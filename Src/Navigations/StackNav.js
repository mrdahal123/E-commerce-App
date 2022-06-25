import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import Onbording from '../Screens/onboarding/Onbording';
const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (

        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
            {/* <Stack.Screen name="Onbording" component={Onbording} /> */}
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    )
}
export default StackNav