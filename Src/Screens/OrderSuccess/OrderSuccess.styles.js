import { StyleSheet } from "react-native";
import { Fonts } from "../../Components/CustomText";

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
    circle: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 8,
        borderColor: Fonts.colors.themeColor,
        borderRadius: 100,
        // position:'absolute',
        // top:'30%',
    },
    orderarea: {
        marginTop: '30%'
    },
    fullWidthButton: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        bottom: 10,
        position: 'absolute',
        borderRadius: 10,
        alignSelf: 'center'
    }
})