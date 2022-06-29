import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import { Fonts } from '../../Components/CustomText'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import { TextInput } from 'react-native-paper'
const Signin = ({ navigation }) => {
    const [number, setNumber] = useState('')
    const validate = () =>{
        if(number!==''){
            navigation.navigate('Checkout')
        }
        else{
            alert("please enter your number ")
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../assets/images/logo.jpg')} style={styles.logo} />

            <View style={styles.input}>
                <Feather name='phone' size={25} style={{ marginRight: 5 }} />
                <TextInput
                    maxLength={10}
                    onChangeText={(num) => setNumber(num)}
                    value={number}
                    placeholder='Enter Your Number To Continue Please'
                    keyboardType='number-pad' />
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => { alert("Coming soon") }} style={[styles.halfWidthButton,]}>
                    <Text style={[Fonts.FontColor16Bold, { color: "#fff" }]}>SignUp</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    validate()
                   }} style={[styles.halfWidthButton,]}>
                    <Text style={[Fonts.FontColor16Bold, { color: "#fff" }]}>Signin</Text>
                </TouchableOpacity>
            </View>
            <Text>It is not final Design only for testing purpose</Text>
        </SafeAreaView>
    )
}

export default Signin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
    },
    logo: {
        width: 300,
        height: 100,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 100,
    },
    input: {
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 50,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: Fonts.colors.themeColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginVertical: 20,
    },
    halfWidthButton: {
        width: '48%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1
    }
})