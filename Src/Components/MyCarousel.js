import { StyleSheet, Text, View, Animated, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const MaxWidth = Dimensions.get('screen').width;

const MyCarousel = ({ images = [] }) => {
    const navigation = useNavigation()

    const animation = React.useRef(new Animated.Value(0));
    const [currentImage, setCurrentImage] = useState(0);
    

    // const handleAnimation = () => {
    //     let newCurrentImage = currentImage + 1;
    //     if (newCurrentImage >= images.length) {
    //         newCurrentImage = 0;
    //     }
    //     Animated.spring(animation.current, {
    //         toValue: -(Dimensions.get('screen').width * newCurrentImage),
    //     }).start()
    //     setCurrentImage(newCurrentImage)
    // };

    useEffect(() => {

        let item = 0;
        let newintr = setInterval(() => {

            if (images.length == item) {
                item = 0
                setCurrentImage(item)
            } else {
                setCurrentImage(item)
                item++
            }

        }, 2000);

        return () => {
            clearInterval(newintr)
        }
    }, [])


    return (
        <React.Fragment>
            <View>
                {/* <Animated.FlatList
                    style={[styles.imageContainer, {
                        transform: [{ translateX: animation.current }]
                    }]}
                    data={images}
                    keyExtractor={({ item, index }) => index}
                    renderItem={({ item, index }) => {
                        console.log("dkicvgdidgd",item)
                        return (
                            <TouchableOpacity style={{backgroundColor:'red '}}>
                                <Image source={item} style={styles.image} />
                            </TouchableOpacity>
                        )
                    }} /> */}
                <Animated.ScrollView style={[styles.imageContainer, {
                    transform: [{ translateX: animation.current }]
                }]}>
                    {
                        (images && images.length > 0) ? <TouchableOpacity onPress={()=>{
                            navigation.navigate('ProductDetails') 
                        }} >
                            <Image source={images[currentImage]} style={styles.image} />
                        </TouchableOpacity> : null
                        // (images && images.length > 0) ? images.map((i) => <Image source={i} key={i} style={styles.image} /> ) : null
                    }
                </Animated.ScrollView>
                <View style={styles.indecatoresWrapper}>
                 {images.map((item, index) => {
                     return (
                         <TouchableOpacity  onPress={() => { 
                           
                            setCurrentImage((prev) => (prev + 1))}} style={[styles.indecator, index === currentImage ? styles.activeIndecator : null]} key={`${item}_${index}`} />
                     )
                 })}
             </View>
            </View>
        </React.Fragment>
    )
}

export default MyCarousel;


const styles = StyleSheet.create({
    image: {
        resizeMode: 'center',
        height: '100%',
        width:'100%',
        alignSelf: 'center',
        resizeMode:'cover'
    },
    imageContainer:{
        width:MaxWidth,
       
        height:200
    },
    wrapper: {
        flexDirection: 'row',
        width: MaxWidth,
        alignSelf: 'center'
    },
    indecatoresWrapper: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: MaxWidth,
        bottom: 5,
        zIndex: 2,
        alignSelf: 'center'
    },
    indecator: {
        width: 15,
        height: 5,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 10
    },
    activeIndecator: {
        backgroundColor: '#fff',
    }
})