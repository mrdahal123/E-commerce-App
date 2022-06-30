// import React, { Component, useState } from 'react'
// import {
//     SafeAreaView,
//     StatusBar,
//     View,
//     Text,
//     StyleSheet,
//     Image,
//     TouchableOpacity,
// } from 'react-native'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
// import { Fonts } from '../../Components/CustomText';

// const Otp = ({ navigation }) => {
//     const [Otp, setOTP] = useState('')


//     const moveTo = () => {
//         if (Otp.length == 4) {
//             navigation.navigate('HomeScreen');
//             // setTimeout(() => {
//             //     navigation.navigate('HomeScreen');
//             // }, 1000)
//         }
//         else {
//             alert("Please enter All Value")
//         }
//     }

//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>

//             <Ionicons name='arrow-back-outline' size={30} onPress={() => { navigation.goBack() }} />
//             <Image source={require('../../../assets/images/logo.jpg')} style={styles.logo} />



//             <Text style={{
              
//                 textAlign: 'center',
//                 lineHeight: 25
//                 // ...Fonts.blackColor18Bold,
//                 // textAlign: 'center',

//             }}>
//                 Enter The OTP Code From The Phone {'\n'}We Just Send You!
//             </Text>

//             <View style={styles.inputContainer}>
//                 <SmoothPinCodeInput
//                     placeholder=""
//                     editable={true}
//                     autoFocus={true}
//                     cellStyle={{
//                         borderRadius: 8,
//                         borderWidth: 2,
//                         borderColor: '#fff',
//                         backgroundColor: '#fff',
//                         shadowColor: '#F87B2C',
//                         shadowOffset: {
//                             width: 0,
//                             height: 2,
//                         },
//                         shadowOpacity: 1.25,
//                         shadowRadius: 8.84,

//                         elevation: 8,
//                     }}
//                     cellStyleFocused={{
//                         borderColor:Fonts.colors.themeColor,
//                     }}
//                     cellSpacing={15}
//                     codeLength={4}
//                     value={Otp}
//                     onTextChange={(txt) => setOTP(txt)}
//                     textStyle={{ color: Fonts.colors.themeColor, fontSize: 24 }}
//                 />
//             </View>

//             <View style={styles.butoonContainer}>
//                 <View style={{ flexDirection: 'column' }}>
//                     <Text>Didn’t receive the otp code! </Text>
//                     <TouchableOpacity onPress={() => {
//                         navigation.navigate('LoginScreen');
//                     }}><Text style={{
//                     fontSize:Fonts.FontColor18Bold
//                     }}>Resend</Text></TouchableOpacity>
//                 </View>
//                 <LinearGradient
//                     colors={['#F9B551', '#F87B2C']}
//                     style={styles.continueButtonStyle}>
//                     <TouchableOpacity
//                         onPress={() => { moveTo() }}>
//                         <Text style={{ fontSize:Fonts.FontColor16Bold, textAlign: 'center' }}>Continue</Text>
//                     </TouchableOpacity>
//                 </LinearGradient>
//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({


//     continueButtonStyle: {
//         paddingHorizontal: 20,
//         paddingVertical: 12,
//         backgroundColor: Colors.primaryColor,
//         minWidth: '30%',
//         alignSelf: "flex-end",
//         borderRadius: 25,
//     },
//     appLogoStyle: {
//         width: 180.0,
//         height: 180.0,
//         justifyContent: 'center',
//         resizeMode: 'contain',
//         position: 'relative',
//         alignSelf: 'center'
//     },
//     inputContainer: {
//         width: '90%',
//         marginVertical: 50,
//         justifyContent: 'space-around',
//         alignSelf: 'center',
//         alignItems: 'center'
//     },
//     butoonContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: '90%',
//         alignSelf: 'center',
//         marginTop: 20,
//         justifyContent: 'space-between'
//     },

// })

// export default Otp

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Otp = () => {
  return (
    <View>
      <Text>Otp</Text>
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({})