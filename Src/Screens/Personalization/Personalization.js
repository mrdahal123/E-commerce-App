import React, { useState } from 'react'
import {
    StyleSheet, Text,
    View, SafeAreaView, ScrollView,
    TouchableOpacity, FlatList,
    Image
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { Fonts } from '../../Components/CustomText'

const Personalization = ({ navigation }) => {
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
                    {/* Wish List */}
                    <TouchableOpacity onPress={() => { navigation.navigate('') }} style={[styles.total,{  borderBottomWidth: 0.8}]}>
                        <Text style={Fonts.FontColor16Bold}>Wish List</Text>
                        <AntDesign name='right' size={20} />
                    </TouchableOpacity>
                    {/* Profile */}
                    <TouchableOpacity onPress={() => { navigation.navigate('') }} style={[styles.total,{  borderBottomWidth: 0.8}]}>
                        <Text style={Fonts.FontColor16Bold}>Profile</Text>
                        <AntDesign name='right' size={20} />
                    </TouchableOpacity>
                    {/* Your Recommendation */}
                    <TouchableOpacity onPress={() => { navigation.navigate('') }} style={[styles.total,{  borderBottomWidth: 0.8}]}>
                        <Text style={Fonts.FontColor16Bold}>Your Recommendation</Text>
                        <AntDesign name='right' size={20} />
                    </TouchableOpacity>
                    {/* Shop the Kids Store by age */}
                    <TouchableOpacity onPress={() => { navigation.navigate('') }} style={styles.total}>
                        <Text style={Fonts.FontColor16Bold}>Shop the Kids Store by age</Text>
                        <AntDesign name='right' size={20} />
                    </TouchableOpacity>
                </View>

                <Text style={[Fonts.FontColor18BoldGray, { marginTop: 15 }]}>App Preference</Text>

                {/* Crad 2nd  */}

                <View style={styles.card}>
                    {/* Wish List */}
                    <TouchableOpacity onPress={() => { navigation.navigate('') }}style={[styles.total,{  borderBottomWidth: 0.8}]}>
                        <Text style={Fonts.FontColor16Bold}>Manage Voice Recorders</Text>
                        <AntDesign name='right' size={20} />
                    </TouchableOpacity>
                    {/* Profile */}
                    <TouchableOpacity onPress={() => { navigation.navigate('') }}style={[styles.total,{  borderBottomWidth: 0.8}]}>
                        <Text style={Fonts.FontColor16Bold}>Manage Prilyn App Camera Images </Text>
                        <AntDesign name='right' size={20} />
                    </TouchableOpacity>
                    {/* Your Recommendation */}
                    <TouchableOpacity onPress={() => { navigation.navigate('') }} style={styles.total}>
                        <Text style={Fonts.FontColor16Bold}>Advertising Preference</Text>
                        <AntDesign name='right' size={20} />
                    </TouchableOpacity>
                    {/* Shop the Kids Store by age */}
                </View>


                <Text style={[Fonts.FontColor18BoldGray, { marginTop: 15 }]}>Data And Privacy</Text>

                {/* Crad 3rd  */}

                <View style={styles.card}>
                    {/* Wish List */}
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('') }} style={[styles.total,{  borderBottomWidth: 0.8}]}>
                        <Text style={Fonts.FontColor16Bold}>Request Your Information</Text>
                        <AntDesign name='right' size={20} />
                    </TouchableOpacity>
                    {/* Profile */}
                    <TouchableOpacity onPress={() => { navigation.navigate('') }} style={[styles.total,{  borderBottomWidth: 0.8}]}>
                        <Text style={Fonts.FontColor16Bold}>Choose Your Prilyn Account </Text>
                        <AntDesign name='right' size={20} />
                    </TouchableOpacity>
                    {/* Your Recommendation */}
                    <TouchableOpacity onPress={() => { navigation.navigate('') }} style={styles.total}>
                        <Text style={Fonts.FontColor16Bold}>Privacy Notice</Text>
                        <AntDesign name='right' size={20} />
                    </TouchableOpacity>
                    {/* Shop the Kids Store by age */}
                </View>

                <TouchableOpacity onPress={() => { navigation.navigate("Filters") }} style={styles.fullWidthButton}>
                    <Text style={[Fonts.FontColor18Bold, { color: "#fff" ,}]}>Logout</Text>
                    <Entypo name='log-out' size={25} color={'#FFF'} style={{marginLeft:10}}/>
                </TouchableOpacity>
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
    card: {
        width: '99%',
        padding: 10,
        marginVertical: 20,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 8,
        marginBottom: 5,
        alignSelf: 'center'

    },
    total: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
      
    },
    fullWidthButton: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        marginVertical: 5,
        borderRadius: 10,
        flexDirection:'row'
    }
})