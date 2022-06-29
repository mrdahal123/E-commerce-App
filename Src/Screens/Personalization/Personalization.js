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

const Personalization = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Ionicons name='arrow-back-outline' size={30} onPress={() => { navigation.goBack() }} />
                    <Text style={Fonts.FontColor18BoldGray}>Personalization</Text>
                    <Ionicons name='search' size={30} />
                </View>

                {/* Crad */}

                <View style={styles.card}>
                
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Personalization

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
    card:{
        width:'100%',
        padding:10,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius:8,
    }
})