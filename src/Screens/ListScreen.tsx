import { observer } from 'mobx-react'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { NavigationScreenProps, ScrollView } from 'react-navigation'

import { ExchangeRow } from 'src/Elements/ExchangeRow'
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
    return <ScrollView contentContainerStyle={styles.container}>{this.renderContent()}</ScrollView>
  }

  private renderContent() {
    if (this.model.loading) return <Text>Загрузка...</Text>
    const elements: React.ReactNode[] = []
    for (const symbol of this.model.rates.symbols) {
      const value = this.model.rates.rates.get(symbol)
      if (value) {
        elements.push(<ExchangeRow key={symbol} symbol={symbol} value={value} />)
      }
    }
    return elements
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})
