import { AppRegistry } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import MainScreen from 'src/Screens/MainScreen'

export default class Application {
  private static _instance: Application

  static get instance(): Application {
    if (!Application._instance) {
      Application._instance = new Application()
    }
    return Application._instance
  }

  bootstrap() {
    const AppNavigator = createStackNavigator({
      Main: { screen: MainScreen },
    })
    const AppContainer = createAppContainer(AppNavigator)
    AppRegistry.registerComponent('DemoCurrencies', () => AppContainer)
  }
}
