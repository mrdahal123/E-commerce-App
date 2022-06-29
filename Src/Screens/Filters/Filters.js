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
import Slider from '@react-native-community/slider';


const Filters = ({ navigation }) => {
    const [slideValue, setSlideValue] = useState('')
    const [selected, setSelected] = useState('')
    const [Category, setCategory] = useState('')
    const [selectedColor, setselectedColor] = useState('')
    const [Apply, setApply] = useState('')

    const sizes = [
        { id: '1', Size: 'All' },
        { id: '2', Size: 'M' },
        { id: '3', Size: 'L' },
        { id: '4', Size: 'XL' },
        { id: '5', Size: 'XXL' },
    ]
    const headerFilter = [
        { type: "All", id: '1' },
        { type: "Women", id: '2' },
        { type: "Men", id: '3' },
        { type: "Boys", id: '4' },
        { type: "Girls", id: '5' },

    ]
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Ionicons name='arrow-back-outline' size={30} onPress={() => { navigation.goBack() }} />
                    <Text style={Fonts.FontColor18BoldGray}>Filters</Text>
                    <Ionicons name='ellipsis-vertical' size={30} />
                </View>
                <Text style={[Fonts.FontColor18Bold, { marginVertical: 20 }]}>Price Range</Text>
                <Text style={Fonts.FontColor16Bold}><Text style={{ color: 'Fonts.Colors.themeColor' }}>₹</Text>{slideValue}</Text>
                {/* Slider */}
                <Slider
                    style={{ width: '100%', }}
                    minimumValue={100}
                    step={5}
                    thumbTintColor={Fonts.colors.themeColor}
                    onValueChange={(value) => {
                        setSlideValue(value)
                    }}
                    maximumValue={1000}
                    minimumTrackTintColor={Fonts.colors.themeColor}
                    maximumTrackTintColor="#000000"
                />
                <Text style={[Fonts.FontColor18Bold, { marginVertical: 20 }]}>Colors</Text>
                <View style={styles.header}>
                    <TouchableOpacity  onPress={() => { setselectedColor('#fff') }} style={styles.selectColor}>
                        {selectedColor === '#fff' ?
                            <FontAwesome5 name='check' size={20} color={'#000'} /> : null}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setselectedColor('#A020F0') }} style={[styles.selectColor, { backgroundColor: '#A020F0' }]}>
                        {selectedColor === '#A020F0' ?
                            <FontAwesome5 name='check' size={20} color={'#fff'} /> : null}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setselectedColor('#87CEEB') }} style={[styles.selectColor, { backgroundColor: '#87CEEB' }]}>
                        {selectedColor === '#87CEEB' ?
                            <FontAwesome5 name='check' size={20} color={'#fff'} /> : null}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setselectedColor('#FFB6C1') }} style={[styles.selectColor, { backgroundColor: '#FFB6C1', }]}>
                        {selectedColor === '#FFB6C1' ?
                            <FontAwesome5 name='check' size={20} color={'#fff'} /> : null}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setselectedColor('#DBF3FA') }} style={[styles.selectColor, { backgroundColor: '#DBF3FA' }]}>
                        {selectedColor === '#DBF3FA' ?
                            <FontAwesome5 name='check' size={20} color={'#fff'} /> : null}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setselectedColor('#8EA') }} style={[styles.selectColor, { backgroundColor: '#8EA' }]}>
                        {selectedColor === '#8EA' ?
                            <FontAwesome5 name='check' size={20} color={'#fff'} /> : null}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setselectedColor('#87CE') }} style={[styles.selectColor, { backgroundColor: '#87CE' }]}>
                        {selectedColor === '#87CE' ?
                            <FontAwesome5 name='check' size={20} color={'#fff'} /> : null}
                    </TouchableOpacity>
                </View>

                {/* Sizes */}
                <Text style={[Fonts.FontColor18Bold, { marginVertical: 20 }]}>Sizes</Text>
                <View>
                    <FlatList
                        style={styles.carouselContainer}
                        showsHorizontalScrollIndicator={false}
                        data={sizes}
                        horizontal={true}

                        keyExtractor={({ item, index }) => index}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={[styles.filterButton, { backgroundColor: selected === item.id ?Fonts.colors.themeColor : "#fff", minWidth: 50 }]}
                                    onPress={() => { setSelected(item.id) }}>
                                    <Text style={{ color: selected === item.id ? "#fff" : "#000" }}>{item.Size}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

                {/* Category */}
                <Text style={[Fonts.FontColor18Bold, { marginVertical: 20 }]}>Category</Text>

                <View>
                    <FlatList
                        data={headerFilter}
                        showsHorizontalScrollIndicator={false}
                        // horizontal={true}
                        numColumns={3}
                        scrollEnabled={false}
                        keyExtractor={({ item, index }) => index}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={[styles.filterButton, { backgroundColor: Category === item.id ? "#000" : "#fff" }]}
                                    onPress={() => { setCategory(item.id) }}>
                                    <Text style={{ color: Category === item.id ? "#fff" : "#000" }}>{item.type}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                {/* Brand */}
                <TouchableOpacity onPress={() => { navigation.navigate('Brands') }} style={styles.total}>
                    <Text style={Fonts.FontColor18Bold}>Brand</Text>
                    <AntDesign name='right' size={20} />
                </TouchableOpacity>
                <Text style={Fonts.FontColor14Regular}>Beach coverup made of breathable and lightweight fabric,
                    is very stretchy, durable, soft and comfy.</Text>

                {/* Buttons */}

                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={()=>{setApply('Discard')}} style={[styles.halfWidthButton, { backgroundColor: Apply==='Discard' ? "#000" :null }]}>
                        <Text style={[Fonts.FontColor16Bold, { color: Apply==='Discard' ? "#fff":"#000" }]}>Discard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setApply('Apply')}} style={[styles.halfWidthButton, { backgroundColor: Apply==='Apply' ? "#000" :null }]}>
                        <Text style={[Fonts.FontColor16Bold, { color:Apply==="Apply"? "#fff":"#000" }]}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Filters

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15,
    },
    filterButton: {
        padding: 12,
        minWidth: 100,
        borderRadius: 8,
        backgroundColor: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderWidth: 0.5,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectColor: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'Fonts.Colors.themeColor',
        borderRadius: 100,
        margin: 5,
        opacity: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    total: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginVertical: 20,
    },
    halfWidthButton: {
        width: '45%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#000',
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1
    }
})