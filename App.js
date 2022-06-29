// import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import StackNav from './Src/Navigations/StackNav'
import { StatusBar } from 'react-native'
import { Fonts } from './Src/Components/CustomText'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Fonts.colors.themeColor}/>
      <StackNav/>
    </NavigationContainer>
  )
}

export default App

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})