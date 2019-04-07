import { computed, observable, ObservableMap } from 'mobx'

export class ExchangeRates {
  @observable date: string = ''
  @observable base: string = ''
  @observable rates: ObservableMap<string, number> = observable(new Map())

  @computed get symbols(): string[] {
    const ret: string[] = []
    for (const k of this.rates.keys()) {
      ret.push(k)
    }
    return ret.sort()
  }
}
