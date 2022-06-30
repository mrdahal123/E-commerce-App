import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { Fonts } from '../../Components/CustomText'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { styles } from './OrderSuccess.styles'

const OrderSuccess = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='arrow-back-outline' size={30} onPress={() => { navigation.goBack() }} />
                <Ionicons name='ellipsis-vertical' size={30} />
            </View>

            {/* Circle */}
            <View style={styles.orderarea}>
                <Ionicons name='star' size={30} color={Fonts.colors.themeColor} style={{ marginLeft: '15%' }} />
                <View style={styles.circle}>
                    <Feather name='check' size={100} color={Fonts.colors.themeColor} />
                </View>
                <Ionicons name='star' size={30} color={Fonts.colors.themeColor} style={{ marginLeft: '80%' }} />


                <Text style={[Fonts.FontColor24Bold, { textAlign: 'center', marginVertical: 10 }]}>
                    Order Success
                </Text>
                <Text style={[Fonts.FontColor18RegularGray, { textAlign: 'center', marginVertical: 10 }]}>
                    Your packet will be sent to your
                    address, thanks for the order .
                </Text>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }} style={styles.fullWidthButton}>
                <Text style={[Fonts.FontColor16Bold, { color: "#fff" }]}>Back To Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default OrderSuccess

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#fff',
//         flex: 1,
//         padding: 15,

//     },
//     header: {
//         width: '100%',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     circle: {
//         width: 200,
//         height: 200,
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignSelf: 'center',
//         borderWidth: 8,
//         borderColor: Fonts.colors.themeColor,
//         borderRadius: 100,
//         // position:'absolute',
//         // top:'30%',
//     },
//     orderarea: {
//         marginTop: '30%'
//     },
//     fullWidthButton: {
//         width: '100%',
//         padding: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#000',
//         bottom: 10,
//         position: 'absolute',
//         borderRadius: 10,
//         alignSelf: 'center'
//     }
// })