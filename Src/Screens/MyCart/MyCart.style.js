import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    cart: {
        height: 200,
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',

    },

    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 10,

    },
    cartText: {
        marginLeft: 20
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    increment: {
        width: '45%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    total:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:15
    },
    hr:{
        borderTopWidth:0.5,
        marginVertical:10
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