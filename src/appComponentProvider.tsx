import React from 'react'
import { ComponentProvider } from 'react-native'
import { NavigationContainer, NavigationContainerComponent } from 'react-navigation'

import Application from 'src//Application'

export function createAppComponentProvider(NavContainer: NavigationContainer): ComponentProvider {
  return () => {
    return class AppContainer extends React.Component {
      render() {
        return <NavContainer ref={(ref) => this.setNavigatorRef(ref)} />
      }
      private setNavigatorRef(navigator: NavigationContainerComponent | null) {
        if (navigator) {
          Application.instance.setNavigator(navigator)
        }
      }
    }
  }
}
