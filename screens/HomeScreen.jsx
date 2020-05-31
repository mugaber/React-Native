import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.screenStyles}>
      <Text>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screenStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen
