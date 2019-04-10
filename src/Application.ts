import { AppRegistry } from 'react-native'
import {
  createAppContainer,
  createStackNavigator,
  NavigationActions,
  NavigationContainerComponent,
} from 'react-navigation'

import Api from 'src/Api'
import { createAppComponentProvider } from 'src/appComponentProvider'
import { ExchangeRatesViewModel } from './Model/ExchangeRatesViewModel'

export default class Application {
  private static _instance: Application

  static get instance(): Application {
    if (!Application._instance) {
      Application._instance = new Application()
    }
    return Application._instance
  }

  private _api: Api = new Api({ endpoint: 'https://api.exchangeratesapi.io/latest' })
  private _navigator: NavigationContainerComponent | undefined

  get api(): Api {
    return this._api
  }

  get navigator(): NavigationContainerComponent {
    if (!this._navigator) throw new Error('Navigator still not settled')
    return this._navigator
  }

  bootstrap() {
    const AppNavigator = createStackNavigator(
      {
        Filter: { screen: require('src/Screens/FilterScreen').default },
        List: { screen: require('src/Screens/ListScreen').default },
        Main: { screen: require('src/Screens/MainScreen').default },
      },
      {
        initialRouteName: 'Main',
      },
    )
    const AppContainer = createAppContainer(AppNavigator)
    AppRegistry.registerComponent('DemoCurrencies', createAppComponentProvider(this, AppContainer))
  }

  showExchangeRates() {
    const model = new ExchangeRatesViewModel(this.api)
    model.load()
    this.navigator.dispatch(NavigationActions.navigate({ params: { model }, routeName: 'List' }))
  }

  showSymbolsFilter(model: ExchangeRatesViewModel) {
    this.navigator.dispatch(NavigationActions.navigate({ params: { model }, routeName: 'Filter' }))
  }

  setNavigator(navigator: NavigationContainerComponent) {
    this._navigator = navigator
  }
}
