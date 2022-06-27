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

const Filters = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Ionicons name='arrow-back-outline' size={30} onPress={() => { navigation.goBack() }} />
                    <Text style={Fonts.FontColor18BoldGray}>Filters</Text>
                    <Ionicons name='ellipsis-vertical' size={30} />
                </View>
                <Text style={[Fonts.FontColor18Bold, { marginVertical: 20 }]}>Price Range</Text>
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
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})