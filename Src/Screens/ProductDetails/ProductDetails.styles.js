import { StyleSheet } from "react-native";
import { Fonts } from '../../Components/CustomText'

export 
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
    borderRadius: 10,
  },
  filterButton: {
    padding: 10,
    minWidth: 50,
    borderRadius: 8,
    backgroundColor: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderWidth: 0.5,
  },
  selectColor: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: Fonts.colors.themeColor,
    borderRadius: 100,
    margin: 5,
    opacity: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  fullWidthButton: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    marginVertical: 30,
    borderRadius: 10,
  },
  hr: {
    width: 100,
    borderRadius: 8,
    height: 5,
    backgroundColor: Fonts.colors.gray,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  }
})