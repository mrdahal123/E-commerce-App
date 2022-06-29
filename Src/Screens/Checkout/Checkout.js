import React, { useState } from 'react'
import {
    StyleSheet, Text,
    View, SafeAreaView, ScrollView,
    TouchableOpacity, FlatList,
    Image
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Fonts } from '../../Components/CustomText'

const Checkout = ({ navigation }) => {
    const [paymentType, setPaymentType] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Ionicons name='arrow-back-outline' size={30} onPress={() => { navigation.goBack() }} />
                    <Text style={Fonts.FontColor18BoldGray}>Checkout</Text>
                    <Ionicons name='ellipsis-vertical' size={30} />
                </View>
                <Text style={[Fonts.FontColor18Bold, { marginVertical: 20 }]}>Delivery Address</Text>

                <View style={styles.locationContainer}>
                    <View style={styles.location}>
                        <Ionicons name='location-outline' size={30} />
                    </View>
                    <Text style={[Fonts.FontColor16Bold, { marginLeft: 15 }]}>Postmaster , Dummi B.O{'\n'}<Text style={Fonts.FontColor14BoldGray}>Karnataka</Text></Text>
                </View>
                <Text style={[Fonts.FontColor18Bold, { marginVertical: 20 }]}>Payment Method</Text>

                {/* Payment */}

                <View style={styles.paymentView}>
                    <View style={styles.innerView}>
                        <View style={styles.location}>
                            <Image source={require('../../../assets/images/UPI_Logo.webp')} style={styles.image} />
                        </View>
                        <Text style={[Fonts.FontColor16Bold, { marginLeft: 15 }]}>UPI (Google pay/Phone Pay)  </Text>
                    </View>
                    <TouchableOpacity onPress={() => { setPaymentType("Upi") }} style={[styles.circle, {
                        backgroundColor: paymentType === "Upi" ?
                            Fonts.colors.themeColor : '#fff'
                    }]}>
                        {paymentType === 'Upi' ?
                            <FontAwesome5 name='check' size={20} color={'#fff'} /> : null}
                    </TouchableOpacity>

                </View>
                <View style={styles.paymentView}>
                    <View style={styles.innerView}>
                        <View style={styles.location}>
                            <Entypo name='wallet' size={25} />
                        </View>
                        <Text style={[Fonts.FontColor16Bold, { marginLeft: 15 }]}>Wallet</Text>
                    </View>
                    <TouchableOpacity onPress={() => { setPaymentType("Wallet") }} style={[styles.circle, {
                        backgroundColor: paymentType === "Wallet" ?
                            Fonts.colors.themeColor : '#fff'
                    }]}>
                        {paymentType === 'Wallet' ?
                            <FontAwesome5 name='check' size={20} color={'#fff'} /> : null}
                    </TouchableOpacity>

                </View>
                <View style={styles.paymentView}>
                    <View style={styles.innerView}>
                        <View style={styles.location}>
                            <Fontisto name='mastercard' size={20} />
                        </View>
                        <Text style={[Fonts.FontColor16Bold, { marginLeft: 15 }]}>Debit / Credit Card</Text>
                    </View>
                    <TouchableOpacity onPress={() => { setPaymentType("Card") }} style={[styles.circle, {
                        backgroundColor: paymentType === "Card" ?
                            Fonts.colors.themeColor : '#fff'
                    }]}>
                        {paymentType === 'Card' ?
                            <FontAwesome5 name='check' size={20} color={'#fff'} /> : null}
                    </TouchableOpacity>

                </View>


                {/* My Cart */}
                <TouchableOpacity style={styles.total}>
                    <Text style={Fonts.FontColor18Bold}>My Cart</Text>
                    <AntDesign name='right' size={20} />
                </TouchableOpacity>

                <View style={[styles.locationContainer, { justifyContent: 'space-between', }]}>

                    <Image source={require('../../../assets/images/IMAGE1.webp')} style={styles.fullImage} />
                    <View style={styles.cartText} >
                        <Text style={Fonts.FontColor14Bold}>Casual {"\n"}Casual & Shop</Text>
                        <Text style={[Fonts.FontColor14BoldGray, { marginVertical: 5 }]}>Size: M </Text>
                        <Text style={[Fonts.FontColor14BoldGray, { marginVertical: 5 }]}><Text style={{ color: 'Fonts.Colors.themeColor' }}>₹</Text>177.58</Text>
                    </View>
                    <Image source={require('../../../assets/images/IMAGE3.jpg')} style={styles.fullImage} />
                    <View style={styles.cartText} >
                        <Text style={Fonts.FontColor14Bold}>Casual {"\n"}Casual & Shop</Text>
                        <Text style={[Fonts.FontColor14BoldGray, { marginVertical: 5 }]}>Size: M </Text>
                        <Text style={[Fonts.FontColor14BoldGray, { marginVertical: 5 }]}><Text style={{ color: 'Fonts.Colors.themeColor' }}>₹</Text>177.58</Text>
                    </View>

                </View>

                <View style={styles.hr} />

                <View style={styles.total}>
                    <Text style={Fonts.FontColor18BoldGray}>Total</Text>
                    <Text style={[Fonts.FontColor18Bold, { marginVertical: 5 }]}>
                        <Text style={{ color: 'Fonts.Colors.themeColor' }}>₹</Text>177.58</Text>
                </View>

                <TouchableOpacity onPress={() => { navigation.navigate("Filters") }} style={styles.fullWidthButton}>
                    <Text style={[Fonts.FontColor16Bold, { color: "#fff" }]}>Checkout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Checkout

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15,

    },
    cartText: {
        marginLeft: 5
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    hr: {
        borderTopWidth: 0.5,
        marginVertical: 10,
        borderColor: '#696969',
        marginTop: 20
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    location: {
        width: 50,
        height: 50,
        marginRight: 5,
        borderRadius: 100,
        backgroundColor: '#e1e1e1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    locationContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    paymentView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    total: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    fullImage: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 8
    },
    innerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 35,
        height: 35,
        borderRadius: 100,
        alignSelf: 'flex-end',
        borderWidth: 0.8,
        borderColor: Fonts.colors.lightGray,
        // marginLeft: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedTintColor: {
        color: 'Fonts.Colors.themeColor'
    },
    fullWidthButton: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        marginVertical: 5,
        borderRadius: 10,
    }
})