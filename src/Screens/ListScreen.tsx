import { observer } from 'mobx-react'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

import { ExchangeRatesViewModel } from 'src/Model/ExchangeRatesViewModel'

interface IProps {
  model: ExchangeRatesViewModel
}

@observer
export default class ListScreen extends React.Component<NavigationScreenProps<IProps>> {
  get model(): ExchangeRatesViewModel {
    return this.props.navigation.getParam('model')
  }

  render() {
    return <View style={styles.container}>{this.renderContent()}</View>
  }

  private renderContent() {
    if (this.model.loading) return <Text>Загрузка...</Text>
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
})
