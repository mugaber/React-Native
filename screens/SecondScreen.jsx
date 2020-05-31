import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SecondScreen = () => {
  return (
    <View style={styles.screenStyles}>
      <Text>Second Screen</Text>
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({
  screenStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
