import React from 'react'
import { Text, View } from 'react-native'

import { ExchangeRatesViewModel } from 'src/Model/ExchangeRatesViewModel'

interface IProps {
  model: ExchangeRatesViewModel
}

export class SymbolsFilter extends React.Component<IProps> {
  render() {
    const model = this.props.model
    return (
      <View>
        <Text>Фильтр: {model.filterText}</Text>
      </View>
    )
  }
}
