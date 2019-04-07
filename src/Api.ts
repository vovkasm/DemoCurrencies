import qs from 'query-string'

interface IApiConfig {
  endpoint: string
}

export interface IExchangeRatesParams {
  symbols?: string[]
  base?: string
}

interface IApiResult {
  base: string
  date: string
  rates: Record<string, number>
}

export default class Api {
  private endpoint: string

  constructor(config: IApiConfig) {
    this.endpoint = config.endpoint
  }

  fetchExchangeRates(params: IExchangeRatesParams = {}): Promise<IApiResult> {
    const query: { [x: string]: any } = {}
    query.base = params.base ? params.base : 'USD'
    if (params.symbols) {
      query.symbols = params.symbols.join(',')
    }
    return fetch(`${this.endpoint}?${qs.stringify(query)}`).then((res) => res.json())
  }
}
