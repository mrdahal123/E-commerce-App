
import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import { Fonts } from '../../Components/CustomText'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Otp = ({ navigation }) => {
    const [firstDigit, setFirstDigit] = useState('')
    const [secondDigit, setSecondDigit] = useState('')
    const [thirdDigit, setThirdDigit] = useState('')
    const [forthDigit, setForthDigit] = useState('')

    const otpValidation = () => {
        if (firstDigit == '') {
            alert("enter first number")
        }
        else if (secondDigit == '') {
            alert("enter second number")
        }
        else if (thirdDigit == '') {
            alert("enter third number")
        }
        else if (forthDigit == '') {
            alert("enter fourth number")
        }
    }

    const moveTo = () => {
        if (setForthDigit !== '') {
            setTimeout(() => {
                navigation.navigate('Checkout');
            }, 1000)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Ionicons name='arrow-back-outline' size={30} onPress={() => {navigation.goBack() }} />
            <Image source={require('../../../assets/images/logo.jpg')} style={styles.logo} />

            <Text style={[Fonts.FontColor18RegularGray,{textAlign:'center',marginTop:50}]}>Enter the OTP code from the{'\n'}
                phone we just send you</Text>

            <View style={styles.inputContainer}>

                <TextInput
                    maxLength={1}
                    selectionColor={Fonts.colors.themeColor
                    }
                    value={firstDigit}
                    style={styles.textInput}
                    onChangeText={(num) => {
                        setFirstDigit(num)
                        secondTextInput.focus();
                    }}
                    keyboardType="numeric"
                />

                <TextInput
                    maxLength={1}
                    selectionColor={Fonts.colors.themeColor
                    }
                    value={secondDigit}
                    style={styles.textInput}
                    ref={(input) => { secondTextInput = input; }}
                    onChangeText={(text) => {
                        setSecondDigit(text)
                        thirdTextinput.focus();
                    }}
                    keyboardType="numeric"

                />

                <TextInput
                    maxLength={1}
                    selectionColor={Fonts.colors.themeColor
                    }
                    value={thirdDigit}
                    style={styles.textInput}
                    ref={(input) => { thirdTextinput = input; }}
                    onChangeText={(text) => {
                        setThirdDigit(text)
                        fourthTextinput.focus();
                    }}
                    keyboardType="numeric"

                />

                <TextInput
                    maxLength={1}
                    selectionColor={Fonts.colors.themeColor
                    }
                    value={forthDigit}
                    style={styles.textInput}
                    ref={(input) => { fourthTextinput = input; }}
                    onChangeText={(text) => {
                        setForthDigit(text)
                        moveTo()
                    }}
                    keyboardType="numeric"


                />
            </View>
          <View style={{width:'100%',flexDirection:'row',alignSelf:'center',alignItems:'center',justifyContent:'center',marginVertical:20}}>
          <Text style={[Fonts.FontColor16Bold, { textAlign: 'center',}]}>Didn't receive the OTP code! </Text>
          <TouchableOpacity onPress={() => {navigation.navigate('Signin') }}><Text style={Fonts.FontColor18Bold}>Resend</Text></TouchableOpacity>
          </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => {
                    otpValidation()
                }} style={[styles.halfWidthButton,]}>
                    <Text style={[Fonts.FontColor16Bold, { color: "#fff" }]}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Otp

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

    inputContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: "#fff",
        marginTop: 50,
        padding: 15,
        width: '20%',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 25,
        shadowColor: Fonts.colors.themeColor,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    btnContainer: {
        width: '100%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    halfWidthButton: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: 15,
        borderWidth: 1
    },
    containerView: {
        width: '100%',
        marginTop: 50
    }
})
