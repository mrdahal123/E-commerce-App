import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native'

const Onbording = () => {
  return (
    <SafeAreaView>
      <Text style={styles.textTransform}>Fastacy</Text>
      {/* <Image style={styles.img} source={require('../../Assets/images/first.png')} /> */}
    </SafeAreaView>
  )
}

export default Onbording

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
    },
    textTransform: {
        color:'red',
        textAlign:'center',
        fontSize:50,
        top:50,
        transform: [{ rotate: '-10deg'}]
    },
    img:{
        
    }
})