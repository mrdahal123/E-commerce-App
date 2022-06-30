import { StyleSheet } from "react-native"

 export const  styles = StyleSheet.create({
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
    },
    // carouselContainer: {
    //     width: '100%',
    //     padding: 10,
    //     position: 'absolute',
    //     alignSelf: 'center',
    //     top: '25%',
    // },
    carouselContainer: {
        marginVertical: 20,
        alignSelf: 'center'
    },
    imageContainer:{
        height:200,
        width:'45%',
        marginVertical:20,
        marginHorizontal:10,
        borderRadius:10,
        
    },
    image:{
    width: '100%',
    height: '100%',
    resizeMode: 'contain',    
 }
})