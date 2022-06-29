import React from 'react'
import {
    StyleSheet, Text,
    View, SafeAreaView, ScrollView,
    TouchableOpacity, FlatList,
    Image
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Fonts } from '../../Components/CustomText'


const MyCart = ({ route, navigation }) => {
    let CartData = route.params.data;
    console.log("data", CartData);

    const carouselItems =
        [
            {
                title: 'Shift Dress',
                price: " 178.99",
                image: require('../../../assets/images/IMAGE1.webp')
            },

            {
                title: 'Party Wear',
                price: " 178.99",
                image: require('../../../assets/images/IMAGE3.jpg')
            },
            {
                title: 'Slip Dress',
                price: " 178.99",
                image: require('../../../assets/images/IMAGE1.webp')
            },

            {
                title: ' Ballgown',
                price: " 178.99",
                image: require('../../../assets/images/IMAGE3.jpg')
            },
        ]


    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView> */}
            <View style={styles.header}>
                <Ionicons name='arrow-back-outline' size={30} onPress={() => { navigation.goBack() }} />
                <Text style={Fonts.FontColor18BoldGray}>My Cart</Text>
                <MaterialCommunityIcons name='briefcase-outline' size={30} />
            </View>

            <View>
                <FlatList
                    style={{ height: '54%' }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={carouselItems}
                    keyExtractor={({ item, index }) => index}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.cart}>
                                <Image source={item.image} style={styles.image} />
                                <View style={styles.cartText} >
                                    <Text style={Fonts.FontColor18Bold}>Casual {"\n"}Casual & Shop</Text>
                                    <Text style={[Fonts.FontColor18BoldGray, { marginVertical: 5 }]}>Size: M </Text>
                                    <Text style={[Fonts.FontColor18BoldGray, { marginVertical: 5 }]}><Text style={{ color: 'Fonts.Colors.themeColor' }}>₹</Text>{item.price}</Text>
                                    <View style={styles.iconContainer}>

                                        <View style={styles.increment}>
                                            <AntDesign name='minuscircleo' size={30} />
                                            <Text>1</Text>
                                            <AntDesign name='pluscircleo' size={30} />
                                        </View>
                                        <AntDesign name='close' size={30} style={{ alignSelf: 'flex-end' }} />
                                    </View>

                                </View>
                            </View>
                        )
                    }}
                />
            </View>
            <View style={styles.total}>
            <Text style={Fonts.FontColor16Bold}>Promo/ Student Code or Voucher</Text>
            <AntDesign name='right' size={20}  />
            </View>
            <View style={styles.total}>
            <Text style={Fonts.FontColor14BoldGray}>Sub Total</Text>
            <Text style={Fonts.FontColor16Bold}><Text style={{ color: 'Fonts.Colors.themeColor' }}>₹</Text>258.22</Text>
            </View>
            <View style={styles.total}>
            <Text style={Fonts.FontColor14BoldGray}>Sub Total</Text>
            <Text style={Fonts.FontColor16Bold}><Text style={{ color: 'Fonts.Colors.themeColor' }}>₹</Text>258.22</Text>
            </View>

            <View style={styles.hr}/>
            <View style={styles.total}>
            <Text style={Fonts.FontColor14BoldGray}>Total</Text>
            <Text style={Fonts.FontColor16Bold}><Text style={{ color: 'Fonts.Colors.themeColor' }}>₹</Text>506.22</Text>
            </View>

            <TouchableOpacity onPress={()=>{navigation.navigate("Checkout")}} style={styles.fullWidthButton}>
            <Text style={[Fonts.FontColor16Bold,{ color:"#fff"}]}>Checkout</Text>
            </TouchableOpacity>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default MyCart

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15,

    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cart: {
        height: 200,
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',

    },

    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 10,

    },
    cartText: {
        marginLeft: 20
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    increment: {
        width: '45%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    total:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:15
    },
    hr:{
        borderTopWidth:0.5,
        marginVertical:10
    },
    fullWidthButton:{
        width:'100%',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000',
        marginVertical:30,
        borderRadius:10,
      }
})