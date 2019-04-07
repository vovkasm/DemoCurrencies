import React from 'react'
import { Button, Text, View } from 'react-native'

import Application from 'src/Application'
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
        <Button title="Изменить" onPress={this.onPress} />
      </View>
    )
  }

  private onPress = () => {
    Application.instance.showSymbolsFilter(this.props.model)
  }
}
