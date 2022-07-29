import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, Text, View ,Image, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
const itemWidth = width / 5 * 4;
const itemHeight = height / 3 * 2;
const padding = (width - itemWidth) / 2;
const offset = itemWidth;



const FlatlistSlider = ({navigation,
     sliderImage = []
    }) => {
    const [activeIndex, setActiveIndex] = useState({ current: 0, previous: null })
    const scale = useRef(new Animated.Value(0)).current;
    const scrollX = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        animate();
    }, [])
    useEffect(() => {
        animate();
    }, [activeIndex])
    const animate = () => {
        scale.setValue(0);
        Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 1, bounciness: 1000 }).start();
    }
    const onScroll = (e) => {
        const x = e.nativeEvent.contentOffset.x;
        let newIndex = Math.floor((x / itemWidth) + 0.5)
        if (activeIndex.current != newIndex) {
            setActiveIndex({ current: newIndex, previous: activeIndex.current })
        }
    }
    return (
        <View style={styles.container}>
            {sliderImage.map((x, i) => (
                <Animated.View key={x} style={[styles.bgColor, {
                    zIndex: i == activeIndex.current ? 0 : (i == activeIndex.previous ? -1 : -2),
                    backgroundColor: x,
                    transform: [{ scale: i == activeIndex.current ? scale : 1 }]
                }]} />
            ))}
            <View style={styles.container} />
            <ScrollView
                horizontal
                pagingEnabled
                decelerationRate="fast"
                style={{ flexGrow: 0 }}
                contentContainerStyle={styles.scrollView}
                showsHorizontalScrollIndicator={false}
                snapToInterval={offset}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                    listener: onScroll
                })}>
                {sliderImage.map((x, i) => (
                    <Item key={x} sliderImage={x} i={i} scrollX={scrollX} />
                ))}
            </ScrollView>
            <View style={styles.indicatorContainer}>
                {sliderImage.map((x, i) => (
                    <View key={x} style={[styles.indicator, i == activeIndex.current && { backgroundColor: '#fff' }]} />
                ))}
            </View>
        </View>
    );
}

function Item({ i, sliderImage, scrollX }) {
    const scale = scrollX.interpolate({
        inputRange: [-offset + i * offset, i * offset, offset + i * offset],
        outputRange: [0.9, 1, 0.9],
    });
    return <Animated.View style={[styles.item, { transform: [{ scale }] }]}>
       <TouchableOpacity 
    //    onPress={()=>{
    //     navigation.navigate("ProductDetails",{
    //        data:i
    //    })
    //   }}
       >
       <Image source={sliderImage} style={styles.item}/>
        </TouchableOpacity>
    </Animated.View>;
}

export default FlatlistSlider;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    scrollView: {
        paddingHorizontal: padding,
        alignItems: 'center',
        paddingVertical: 10,
        zIndex: 1
    },
    item: {
        height: itemHeight,
        width: itemWidth,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#69696950',
        elevation: 5,
    },
    // bgColor: {
    //     position: 'absolute',
    //     height: height * 3 / 2,
    //     width: height * 3 / 2,
    //     borderRadius: height,
    // },
    indicatorContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    indicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 3,
        backgroundColor: '#444'
    }
});