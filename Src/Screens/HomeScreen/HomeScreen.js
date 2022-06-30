import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, FlatList, Image, ScrollView } from 'react-native'
import { Fonts } from '../../Components/CustomText'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './Home.style'
// import Carousel from 'react-native-snap-carousel';
const HomeScreen = ({ navigation }) => {

    const [selected, setSelected] = useState('')
    const [activeIndex, setActiveIndex] = useState(0)
    const headerFilter = [
        { type: "All", id: '1' },
        { type: "Winter", id: '2' },
        { type: "Women", id: '3' },
        { type: "EyeWear", id: '4' },
        { type: "FootWear", id: '5' },
        { type: "SummerWear", id: '6' }
    ]

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
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                <View style={styles.header}>
                    <Ionicons name='ios-menu-outline' size={30} />
                    <Text style={Fonts.blackColor50Bold}>Prilyn</Text>
                    <View style={styles.headerIcon}>
                        <Ionicons name='search' size={30} />
                        <MaterialCommunityIcons name='briefcase-outline' onPress={()=>{
                            navigation.navigate('Personalization')
                        }} size={30} />
                    </View>
                </View>

                <Text style={[Fonts.blackColor50Bold, { marginVertical: 10 }]}>Find Your Style</Text>

                <View>
                    <FlatList
                        data={headerFilter}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        keyExtractor={({ item, index }) => index}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={[styles.filterButton, { backgroundColor: selected === item.id ? "#000" : "#fff" }]}
                                    onPress={() => { setSelected(item.id) }}>
                                    <Text style={{ color: selected === item.id ? "#fff" : "#000" }}>{item.type}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <View>
                    <FlatList
                        style={styles.carouselContainer}
                        showsHorizontalScrollIndicator={false}
                        data={carouselItems}
                        horizontal={true}
                        keyExtractor={({ item, index }) => index}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity>
                                    <Image source={item.image} style={{ width: 300, height: 300, resizeMode: 'contain' }} />
                                    <Text style={[Fonts.blackColor30Regular, { textAlign: 'center', marginTop: 10 }]}>{item.title}</Text>
                                    <Text style={[Fonts.textCenter, { marginVertical: 5 }]}>
                                        <Text style={{ color: 'Fonts.Colors.themeColor' }}>₹</Text>{item.price}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

                <View style={styles.header}>
                    <Text style={Fonts.blackColor50Bold}>Most Popular</Text>
                    <TouchableOpacity><Text style={Fonts.Color}>See All</Text></TouchableOpacity>
                </View>

                <View style={{width:'100%',paddingBottom:10}}>
                    <FlatList
                        
                        showsHorizontalScrollIndicator={false}
                        data={carouselItems}
                        numColumns={2}
                        keyExtractor={({ item, index }) => index}
                        renderItem={({ item, index }) => {
                            console.log(item);
                            return (
                                <TouchableOpacity style={styles.imageContainer} onPress={()=> {
                                    navigation.navigate('ProductDetails',{
                                        data:item
                                    })
                                }}>
                                    <Image source={item.image} style={styles.image} />
                                    <Text style={[Fonts.blackColor30Regular, { textAlign: 'center', }]}>{item.title}</Text>
                                    {/* <Text style={[Fonts.textCenter, { marginVertical: 5 }]}>
                                        <Text style={{ color: 'Fonts.Colors.themeColor' }}>$</Text>{item.price}</Text> */}
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


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
//         alignSelf: 'center',
//     },
//     headerIcon: {
//         width: '20%',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     filterButton: {
//         height: 45,
//         padding: 12,
//         borderRadius: 8,
//         backgroundColor: '#fff',
//         textAlign: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginHorizontal: 5,
//         borderWidth: 1,
//     },
//     // carouselContainer: {
//     //     width: '100%',
//     //     padding: 10,
//     //     position: 'absolute',
//     //     alignSelf: 'center',
//     //     top: '25%',
//     // },
//     carouselContainer: {
//         marginVertical: 20,
//         alignSelf: 'center'
//     },
//     imageContainer:{
//         height:200,
//         width:'45%',
//         marginVertical:20,
//         marginHorizontal:10,
//         borderRadius:10,
        
//     },
//     image:{
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',    
//  }
// })
export default HomeScreen