import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import { Fonts } from '../../Components/CustomText'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import { TextInput } from 'react-native-paper'
const Signin = ({ navigation }) => {
    const [number, setNumber] = useState('')
    const validate = () => {
        if (number !== '') {
            navigation.navigate('Checkout')
        }
        else {
            alert("please enter your number ")
        }
    }
    return (
        <SafeAreaView style={styles.container}>
              <Ionicons name='arrow-back-outline' size={30} onPress={() => { navigation.goBack() }} />
            <Image source={require('../../../assets/images/logo.jpg')} style={styles.logo} />

            <View style={styles.containerView}>
                <Text style={Fonts.textCenterGray2}>Sign in with Phone Number</Text>
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
                    <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }} style={[styles.halfWidthButton,]}>
                        <Text style={[Fonts.FontColor16Bold, { color: "#000" }]}>SignUp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        validate()
                        navigation.navigate('Otp')
                    }} style={[styles.halfWidthButton,{backgroundColor:'#000'}]}>
                        <Text style={[Fonts.FontColor16Bold, { color: "#fff" }]}>Signin</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={[Fonts.FontColor16Bold,{textAlign:'center',marginVertical:10}]}>We will send otp for verification.</Text>
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
        marginTop: 40,
    },
    input: {
        width: '100%',
        paddingHorizontal: 8,
        marginVertical: 20,
        height:50,
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
        marginVertical: 10,
    },
    halfWidthButton: {
        width: '48%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#000',
        marginVertical: 10,
        borderRadius: 15,
        borderWidth: 1
    },
    containerView:{
        width:'100%',
        marginTop:50
    }
})