import { observable } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { NavigationEvents, NavigationScreenProps } from 'react-navigation'

import { ExchangeRatesViewModel } from 'src/Model/ExchangeRatesViewModel'

interface IProps {
  model: ExchangeRatesViewModel
}

@observer
export default class FilterScreen extends React.Component<NavigationScreenProps<IProps>> {
  @observable private text: string = ''

  private get model(): ExchangeRatesViewModel {
    return this.props.navigation.getParam('model')
  }

  componentDidMount() {
    this.text = this.model.symbols.join(',')
  }

  render() {
    return (
      <View style={s.container}>
        <NavigationEvents onDidFocus={this.onFocus} onWillBlur={this.onBack} />
        <TextInput placeholder="RUB,USD for ex." style={s.input} onChangeText={this.onChange} value={this.text} />
      </View>
    )
  }

  private onChange = (text: string) => {
    this.text = text
  }

  private onFocus = () => {
    this.text = this.model.symbols.join(',')
  }

  private onBack = () => {
    this.model.setFilter(this.text)
    this.model.load()
  }
}

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    width: '100%',
  },
})
