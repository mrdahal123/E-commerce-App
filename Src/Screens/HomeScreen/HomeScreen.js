import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, FlatList, Image, ScrollView } from 'react-native'
import { Fonts } from '../../Components/CustomText'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './Home.style'
import { SliderBox } from "react-native-image-slider-box";
import MyCarousel from '../../Components/MyCarousel'
import FlatlistSlider from '../../Components/FlatlistSlider'
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


    const SliderImage = [
        require('../../../assets/images/IMAGE1.webp'), // Local
        require('../../../assets/images/IMAGE3.jpg'), // Local image
        require('../../../assets/images/IMAGE1.webp'), // Local image
        require('../../../assets/images/IMAGE3.jpg'), // Local image
    ];
    const carouselItems =
        [
            {
                title: 'Shift Dress',
                price: " 178.99",
                image: require('../../../assets/images/IMAGE1.webp'),
                catogery: 'Jeans'
            },

            {
                title: 'Party Wear',
                price: " 178.99",
                image: require('../../../assets/images/IMAGE3.jpg'),
                catogery: 'Kurti & Seats'
            },
            {
                title: 'Slip Dress',
                price: " 178.99",
                image: require('../../../assets/images/IMAGE1.webp'),
                catogery: 'T-Shirt'
            },

            {
                title: ' Ballgown',
                price: " 178.99",
                image: require('../../../assets/images/IMAGE3.jpg'),
                catogery: 'Sarees'
            },

            {
                title: 'Shift Dress',
                price: " 178.99",
                image: require('../../../assets/images/IMAGE1.webp'),
                catogery: 'Lingerie'
            },

            {
                title: 'Party Wear',
                price: " 178.99",
                image: require('../../../assets/images/IMAGE3.jpg'),
                catogery: 'Top & tees'
            },
        ]



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                <View style={styles.header}>
                    <Ionicons name='ios-menu-outline' size={30}  onPress={() => {
                            navigation.navigate('Filters')
                        }} />
                    <Text style={Fonts.blackColor50Bold}>Prilyn</Text>
                    <View style={styles.headerIcon}>
                        <Ionicons name='search' size={30} />
                        <MaterialCommunityIcons name='briefcase-outline' onPress={() => {
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

                {/* Carousel */}
                <View style={styles.carousel}>
                    <MyCarousel 
                     images={SliderImage}/>
                    {/* <SliderBox
                        images={SliderImage}
                        sliderBoxHeight={100}
                        autoplay={true}
                        circleLoop={true}
                        dotColor="#FFEE58"
                        style={styles.carouselimg}
                        // style={{width:'100%',padding:10}}
                        resizeMode={'contain'}
                        inactiveDotColor="#90A4AE"
                        dotStyle={{
                            width: 15,
                            height: 5,
                            borderRadius: 2,
                            marginHorizontal: 2,
                            padding: 0,
                            margin: 0,
                        }}
                    /> */}
                </View>
                <View>
                <FlatlistSlider sliderImage={SliderImage}  />
                   
                </View>

                <View style={styles.header}>
                    <Text style={Fonts.blackColor50Bold}>Most Popular</Text>
                    <TouchableOpacity><Text style={Fonts.Color}>See All</Text></TouchableOpacity>
                </View>

                <View style={{ width: '100%', paddingBottom: 10 }}>

                    <View>
                        <FlatList
                            style={styles.carouselContainer}
                            showsHorizontalScrollIndicator={false}
                            data={carouselItems}
                            horizontal={true}
                            keyExtractor={({ item, index }) => index}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate("ProductDetails",{
                                            data:item
                                        })
                                    }}>
                                        <Image source={item.image} style={{ width: 180, height: 180, borderRadius: 10, resizeMode: 'stretch', marginHorizontal: 5 }} />
                                        <Text style={[Fonts.textCenter, { marginVertical: 5 }]}>
                                        <Text style={{ color: Fonts.colors.themeColor }}>₹</Text>{item.price}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                </View>





                <Text style={Fonts.blackColor50Bold}>Wardrobe Checklist</Text>
                <View style={styles.wardopContainer}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={carouselItems}
                        numColumns={3}
                        keyExtractor={({ item, index }) => index}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("ProductDetails",{
                                        data:item
                                    })
                                }}>
                                    <Image source={item.image} style={styles.image} />
                                    <Text style={{textAlign:'center'}}>
                                    {item.catogery}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen