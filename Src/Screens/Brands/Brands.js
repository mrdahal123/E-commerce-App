import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { Fonts } from '../../Components/CustomText'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const Brands = ({ navigation }) => {
    const [ProductBrands, setProductBrands] = useState([
        { id: '1', isSelected: false, name: 'FLENDI' },
        { id: '2', isSelected: false, name: 'HOUSE OF VERSACE' },
        { id: '3', isSelected: false, name: 'BURBERRY' },
        { id: '4', isSelected: false, name: 'RALPH LAUREN' },
        { id: '5', isSelected: false, name: 'GUCCI' },
        { id: '6', isSelected: false, name: 'PARADA' },
        { id: '7', isSelected: false, name: 'FLYING MACHINE' },
        { id: '8', isSelected: false, name: 'LEE' },
        { id: '9', isSelected: false, name: 'LEE COOPER' },
        { id: '10', isSelected: false, name: 'JACK & JONES' },
        { id: '11', isSelected: false, name: 'SPIKER' },
        { id: '12', isSelected: false, name: 'MONTI KARLO' },
        { id: '13', isSelected: false, name: 'WOODLAND' },
        { id: '14', isSelected: false, name: 'JOCKEY' },
    ])
    const [SelectedBrans, setSelectedBrans] = useState([''])
    const [Apply, setApply] = useState('')
    // const Brands = 
    const multipleCheckBox = (item, index) => {
        const newData = [...ProductBrands]
        let selectedArr = [];
        newData[index].isSelected = !newData[index].isSelected;
        console.log("Changed newData", newData);
        setProductBrands(newData);
        ProductBrands.forEach((element) => {
            newData.forEach((data) => {
                if (element.id == data.id && data.isSelected == true) {
                    selectedArr.push(data)
                    setSelectedBrans(selectedArr)
                }
            })
        })
        console.log('selectedArr', SelectedBrans);

    }
    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View style={styles.header}>
                <Ionicons name='arrow-back-outline' size={30} onPress={() => { navigation.goBack() }} />
                <Text style={Fonts.FontColor18BoldGray}>Brands</Text>
                <Ionicons name='ellipsis-vertical' size={30} />
            </View>

            {/* Search Filter */}

            <View style={styles.Textinput} >
                <TextInput
                    placeholder='Search By Brand Name'
                />
            </View>
            <View >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={ProductBrands}
                    style={{ height: '76%' }}
                    keyExtractor={({ item, index }) => item}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.boxContainer}>
                                <Text>{item.name}</Text>
                                <TouchableOpacity onPress={() => {
                                    multipleCheckBox(item, index)
                                }} style={[styles.filterButton, { backgroundColor: item.isSelected ? Fonts.colors.themeColor : null }]}>

                                    {item.isSelected == true ?
                                        <FontAwesome5 name='check' size={20} color={'#fff'} /> : null}
                                </TouchableOpacity>
                            </View>
                        )
                    }} />


            </View>

            <View style={styles.boxContainer}>
                <TouchableOpacity onPress={() => { setApply('Discard') }} style={[styles.halfWidthButton, { backgroundColor: Apply === 'Discard' ? "#000" : null }]}>
                    <Text style={[Fonts.FontColor16Bold, { color: Apply === 'Discard' ? "#fff" : "#000" }]}>Discard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('HomeScreen')
                    setApply('Apply')
                }} style={[styles.halfWidthButton, { backgroundColor: Apply === 'Apply' ? "#000" : null }]}>
                    <Text style={[Fonts.FontColor16Bold, { color: Apply === "Apply" ? "#fff" : "#000" }]}>Apply</Text>
                </TouchableOpacity>
            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default Brands

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
    boxContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginVertical: 10,
        alignItems: 'center'

    },
    Textinput: {
        width: '98%',
        marginVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        // marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'center'
    },
    filterButton: {
        width: 30,
        height: 30,
        borderRadius: 8,
        backgroundColor: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
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