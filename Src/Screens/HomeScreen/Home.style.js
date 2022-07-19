import { StyleSheet } from "react-native"

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
    carousel: {
        height: 200,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        zIndex: 1,
        marginHorizontal: 10,
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 10
    },
    carouselContainer: {
        marginVertical: 20,
        alignSelf: 'center'
    },
    imgCardContainer: {
        width: 250,
        height: 300,
        resizeMode: 'cover',
        marginHorizontal: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: 'cover',
        margin: 10,
    },
    wardopContainer: {
        width: '100%',
        paddingVertical: 10,
        flexDirection: 'row',
        alignSelf:'center',
        alignItems:'center',
        justifyContent: 'space-between',
    }
})