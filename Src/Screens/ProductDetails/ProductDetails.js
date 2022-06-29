import React,{useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image,FlatList ,TouchableOpacity} from 'react-native'
import { Fonts } from '../../Components/CustomText'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ProductDetails = ({ navigation, route }) => {

  let data = route.params.data;
  console.log("data", data.image);

  const [selected, setSelected] = useState('')

  const sizes = [
    {id:'1', Size:'All'},
    {id:'2', Size:'M'},
    {id:'3', Size:'L'},
    {id:'4', Size:'XL'},
    {id:'5', Size:'XXL'},
  ]

 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Ionicons name='arrow-back-outline' size={30} onPress={() => { navigation.goBack() }} />
          <Ionicons name='md-heart-outline' size={30} />
        </View>

        <Text style={[Fonts.FontColor18Bold,{marginVertical:10}]}>Brand: Vendor Name</Text>
        <Text style={[Fonts.FontColor14Regular,{marginVertical:5}]}>Beach Coverup for Women Lace Crochet Short Sleeve Summer Oversized Cute V-Neck Swimsuit Cover Ups for Beachwear</Text>
        {/* Image */}
        <View style={styles.CardImage}>
          <Image source={data.image} style={styles.image}/>
        </View>
        <Text style={[Fonts.blackColor40Regular,{marginVertical:10}]}>{data.title}</Text>

        <View style={styles.header}>
          <Text style={Fonts.FontColor18Regular}>
            <Text style={Fonts.Color}>₹</Text>{data.price}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name='star-rate' size={20} color={'Fonts.Colors.themeColor'} />
            <Text style={Fonts.FontColor14Bold}> 78.33 <Text style={Fonts.FontColor14Regular}>
              (2.6k+review)</Text></Text>
          </View>
        </View>

        {/* Sizes */}
        <Text style={[Fonts.FontColor16Bold,{marginVertical:15}]}>Select Size</Text>
        <View>
          <FlatList
            style={styles.carouselContainer}
            showsHorizontalScrollIndicator={false}
            data={sizes}
            horizontal={true}
            keyExtractor={({ item, index }) => index}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style={[styles.filterButton, { backgroundColor: selected === item.id ? "Fonts.Colors.themeColor" : "#fff" }]}
                onPress={() => { setSelected(item.id) }}>
                <Text style={{ color: selected === item.id ? "#fff" : "#000" }}>{item.Size}</Text>
            </TouchableOpacity>
              )
            }}
          />
        </View>

            {/* SelectColor */}
            <Text style={[Fonts.FontColor16Bold,{marginVertical:15}]}>Select Color</Text>
            <View style={styles.header}>
              <TouchableOpacity style={styles.selectColor}></TouchableOpacity>
              <TouchableOpacity style={[styles.selectColor,{backgroundColor:'#A020F0'}]}></TouchableOpacity>
              <TouchableOpacity style={[styles.selectColor,{backgroundColor:'#87CEEB'}]}></TouchableOpacity>
              <TouchableOpacity style={[styles.selectColor,{backgroundColor:'#FFB6C1'}]}></TouchableOpacity>
              <TouchableOpacity style={[styles.selectColor,{backgroundColor:'#DBF3FA'}]}></TouchableOpacity>
              <TouchableOpacity style={[styles.selectColor,{backgroundColor:'#8EA'}]}></TouchableOpacity>
              <TouchableOpacity style={[styles.selectColor,{backgroundColor:'#87CE'}]}></TouchableOpacity>
            </View>

            {/* Add to Card */}

            <TouchableOpacity onPress={()=>{navigation.navigate('MyCart',{
              data:data
            })}} style={styles.fullWidthButton}>
            <Text style={[Fonts.FontColor16Bold,{ color:"#fff"}]}>Add To Cart</Text>
            </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetails

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
  CardImage: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
    borderRadius: 8,
    marginVertical: 20,
   
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    borderRadius:10,
  },
  filterButton: {
    padding: 10,
    minWidth:50,
    borderRadius: 8,
    backgroundColor: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderWidth: 0.5,
},
selectColor:{
  width:50,
  height:50,
  backgroundColor:'#fff',
  borderWidth:0.5,
  borderColor:'Fonts.Colors.themeColor',
  borderRadius:20,
  margin:5,
  opacity:0.6,
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