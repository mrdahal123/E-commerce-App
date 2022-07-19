import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity, Modal, Pressable } from 'react-native'
import { Fonts } from '../../Components/CustomText'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { styles } from './ProductDetails.styles'
import * as Animatable from 'react-native-animatable';

const ProductDetails = ({ navigation, route }) => {

  let data = route.params.data;
  console.log("data", data.image);

  const [selected, setSelected] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [color, setColor] = useState('')

  const sizes = [
    { id: '1', Size: 'All' },
    { id: '2', Size: 'M' },
    { id: '3', Size: 'L' },
    { id: '4', Size: 'XL' },
    { id: '5', Size: 'XXL' },
  ]


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Ionicons name='arrow-back-outline' size={30} onPress={() => { navigation.goBack() }} />
          <Ionicons name='md-heart-outline' size={30} />
        </View>

        <Text style={[Fonts.FontColor18Bold, { marginVertical: 10 }]}>Brand: Vendor Name</Text>
        <Text style={[Fonts.FontColor14Regular, { marginVertical: 5 }]}>Beach Coverup for Women Lace Crochet Short Sleeve Summer Oversized Cute V-Neck Swimsuit Cover Ups for Beachwear</Text>
        {/* Image */}
        <View style={styles.CardImage}>
          <Image source={data.image} style={styles.image} />
        </View>
        <View style={styles.header}>
          <Text style={[Fonts.blackColor40Regular, { marginVertical: 10 }]}>{data.title}</Text>
          <TouchableOpacity onPress={() => {
            setIsModalVisible(true)
          }}><Image source={require('../../../assets/images/sort-down.png')} style={{ width: 30, height: 30 }} /></TouchableOpacity>
        </View>
        {/* Modal */}

        <Modal transparent={true} visible={isModalVisible}>
          <Pressable
            onPress={() => {
              setIsModalVisible(false);
            }}
            style={{
              backgroundColor: '#000000aa',
              flex: 1,
              // alignItems: 'center',
              // justifyContent: 'center',
            }}>
            <Animatable.View
              animation={isModalVisible == true ? 'fadeInUpBig' : 'fadeOutDownBig'}
              style={{
                backgroundColor: '#fff',
                padding: 20,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                width: '100%',
                position: 'absolute',
                bottom: 0,

                // justifyContent: 'flex-end',
                // alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => { setIsModalVisible(false) }} style={styles.hr} />
              <Text style={[Fonts.FontColor18Bold, { textAlign: 'center' }]}>Sort By</Text>

              <TouchableOpacity style={[styles.header, { marginVertical: 15 }]} onPress={() => { }}>
                <Text style={Fonts.FontColor18BoldGray}>Popular</Text>
                <AntDesign name='right' size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.header, { marginVertical: 15 }]} onPress={() => { }}>
                <Text style={Fonts.FontColor18BoldGray}>Newest</Text>
                <AntDesign name='right' size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.header, { marginVertical: 15 }]} onPress={() => { }}>
                <Text style={Fonts.FontColor18BoldGray}>Customer Review</Text>
                <AntDesign name='right' size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.header, { marginVertical: 15 }]} onPress={() => { navigation.navigate('Filters') }}>
                <Text style={Fonts.FontColor18BoldGray}>Price : Lowest To High</Text>
                <AntDesign name='right' size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.header, { marginVertical: 15 }]} onPress={() => { navigation.navigate('Filters') }}>
                <Text style={Fonts.FontColor18BoldGray}>Price Heigh To Low</Text>
                <AntDesign name='right' size={20} />
              </TouchableOpacity>

            </Animatable.View>
          </Pressable>
        </Modal>

        <View style={styles.header}>
          <Text style={Fonts.FontColor18Regular}>
            <Text style={Fonts.Color}>₹</Text>{data.price}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name='star-rate' size={20} color={'Fonts.Colors.themeColor'} />
            <Text style={Fonts.FontColor14Bold}> 78.33 <Text style={Fonts.FontColor14Bold}>
              (2.6k+review)</Text></Text>
          </View>
        </View>

        {/* Sizes */}
        <Text style={[Fonts.FontColor16Bold, { marginVertical: 15 }]}>Select Size</Text>
        <View>
          <FlatList
            style={styles.carouselContainer}
            showsHorizontalScrollIndicator={false}
            data={sizes}
            horizontal={true}
            keyExtractor={({ item, index }) => index}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style={[styles.filterButton, { backgroundColor: selected === item.id ? Fonts.colors.themeColor : "#fff" }]}
                  onPress={() => { setSelected(item.id) }}>
                  <Text style={{ color: selected === item.id ? "#fff" : "#000" }}>{item.Size}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        {/* SelectColor */}
        <Text style={[Fonts.FontColor16Bold, { marginVertical: 15 }]}>Select Color</Text>
        <View style={styles.header}>
          <TouchableOpacity style={styles.selectColor} onPress={() => { setColor('#fff') }}>
          {color === '#fff' ?<FontAwesome5 name='check' size={20} color={'#A020F0'}  /> : null}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.selectColor, { backgroundColor: '#A020F0' }]} onPress={() => { setColor('#A020F0') }}>
          {color === '#A020F0' ?<FontAwesome5 name='check' size={20} color={'#fff'}  /> : null}</TouchableOpacity>
          <TouchableOpacity style={[styles.selectColor, { backgroundColor: '#87CEEB' }]} onPress={() => { setColor('#87CEEB') }}>
          {color === '#87CEEB' ?<FontAwesome5 name='check' size={20} color={'#fff'}  /> : null}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.selectColor, { backgroundColor: '#FFB6C1' }]}  onPress={() => { setColor('#FFB6C1') }}>
          {color === '#FFB6C1' ?<FontAwesome5 name='check' size={20} color={'#fff'}  /> : null}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.selectColor, { backgroundColor: '#DBF3FA' }]}  onPress={() => { setColor('#DBF3FA') }}>
          {color === '#DBF3FA' ?<FontAwesome5 name='check' size={20} color={'#fff'}  /> : null}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.selectColor, { backgroundColor: '#8EA' }]}  onPress={() => { setColor('#8EA') }}>
          {color === '#8EA' ?<FontAwesome5 name='check' size={20} color={'#fff'}  /> : null}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.selectColor, { backgroundColor: '#87CE' }]}  onPress={() => { setColor('#87CE') }}>
          {color === '#87CE' ?<FontAwesome5 name='check' size={20} color={'#fff'}  /> : null}
          </TouchableOpacity>
        </View>

        {/* Add to Card */}

        <TouchableOpacity onPress={() => {
          navigation.navigate('MyCart', {
            data: data
          })
        }} style={styles.fullWidthButton}>
          <Text style={[Fonts.FontColor16Bold, { color: "#fff" }]}>Add To Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetails

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     flex: 1,
//     padding: 15,

//   },
//   header: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',

//   },
//   CardImage: {
//     width: '100%',
//     height: 250,
//     alignSelf: 'center',
//     borderRadius: 8,
//     marginVertical: 20,

//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'center',
//     borderRadius: 10,
//   },
//   filterButton: {
//     padding: 10,
//     minWidth: 50,
//     borderRadius: 8,
//     backgroundColor: '#fff',
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 5,
//     borderWidth: 0.5,
//   },
//   selectColor: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#fff',
//     borderWidth: 0.5,
//     borderColor: 'Fonts.Colors.themeColor',
//     borderRadius: 20,
//     margin: 5,
//     opacity: 0.6,
//   },
//   fullWidthButton: {
//     width: '100%',
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#000',
//     marginVertical: 30,
//     borderRadius: 10,
//   },
//   hr: {
//     width: 100,
//     borderRadius: 8,
//     height: 5,
//     backgroundColor: Fonts.colors.gray,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginVertical: 10,
//   }
// })