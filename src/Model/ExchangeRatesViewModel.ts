import { action, computed, IObservableArray, observable } from 'mobx'

import Api, { IExchangeRatesParams } from 'src/Api'
import { ExchangeRates } from 'src/Model/ExchangeRates'

export class ExchangeRatesViewModel {
  @observable symbols: IObservableArray<string> = observable([])
  @observable rates: ExchangeRates = new ExchangeRates()
  @observable loading: boolean = true

  private api: Api

  @computed
  get filterText(): string {
    if (this.symbols.length === 0) return 'нет'
    return this.symbols.sort().join(',')
  }

  constructor(api: Api) {
    this.api = api
  }

  load() {
    const params: IExchangeRatesParams = {}
    if (this.symbols.length > 0) {
      params.symbols = this.symbols
    }
    this.api
      .fetchExchangeRates(params)
      .then((res) => {
        const rates = this.rates
        rates.base = res.base
        rates.date = res.date
        rates.rates.clear()
        for (const key of Object.keys(res.rates)) {
          rates.rates.set(key, res.rates[key])
        }
      })
      .finally(() => {
        this.loading = false
      })
  }

  @action
  setFilter(text: string) {
    const symbols = text
      .split(',')
      .map((val) => val.trim())
      .filter((val) => !!val)
    this.symbols.replace(symbols)
  }
}
