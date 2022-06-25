import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, FlatList } from 'react-native'
import { Fonts } from '../../Components/CustomText'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeScreen = ({ navigation }) => {

    const [selected, setSelected] = useState('')
    const headerFilter = [
        { type: "All", id: '1' },
        { type: "Winter", id: '2' },
        { type: "Women", id: '3' },
        { type: "EyeWear", id: '4' },
        { type: "FootWear", id: '5' },
        { type: "SummerWear", id: '6' }
    ]
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>

                <Ionicons name='ios-menu-outline' size={30} />
                <Text style={Fonts.blackColor50Bold}>Prilyn</Text>
                <View style={styles.headerIcon}>
                    <Ionicons name='search' size={30} />
                    <MaterialCommunityIcons name='briefcase-outline' size={30} />
                </View>
            </View>

            <Text style={[Fonts.blackColor50Bold, { marginVertical: 10 }]}>Find Your Style</Text>

            <FlatList
                data={headerFilter}
                horizontal={true}
                keyExtractor={({ item, index }) => index}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={[styles.filterButton, { backgroundColor: selected === item.id ? "#000" : "#fff" }]}
                            onPress={() => {
                                console.log(item.id)
                                setSelected(item.id)
                            }
                            }>
                            <Text style={{ color: selected === item.id ? "#fff" : "#000" }}>{item.type}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
    },
    headerIcon: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    filterButton: {
        height: 45,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        borderWidth: 1,
    }

})
export default HomeScreen