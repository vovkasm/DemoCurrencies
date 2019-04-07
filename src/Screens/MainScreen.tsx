import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

import Application from 'src/Application'

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Курсы валют сегодня" onPress={this.onExchangeRatesPress} />
      </View>
    )
  }

  private onExchangeRatesPress = () => {
    Application.instance.showExchangeRates()
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
})
