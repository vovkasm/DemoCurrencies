import { observable, ObservableMap } from 'mobx'

export class ExchangeRates {
  @observable date: string = ''
  @observable base: string = ''
  @observable rates: ObservableMap = observable(new Map())
}
