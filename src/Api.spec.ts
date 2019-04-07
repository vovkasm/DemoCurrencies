import 'jest'

import Api from 'src/Api'

declare var global: any

it('fetches with default params', () => {
  const api = new Api({ endpoint: 'https://api.exchangeratesapi.io/latest' })
  global.fetch = jest.fn().mockResolvedValue({
    status: 200,
    json() {
      return Promise.resolve({
        base: 'USD',
        date: '2019-04-05',
        rates: {
          RUB: 65,
          USD: 1,
        },
      })
    },
  })
  return api.fetchExchangeRates().then((res) => {
    expect(res).toEqual({
      base: 'USD',
      date: '2019-04-05',
      rates: {
        RUB: 65,
        USD: 1,
      },
    })
    expect(global.fetch).toHaveBeenCalledWith('https://api.exchangeratesapi.io/latest?base=USD')
  })
})

it('fetches with symbols', () => {
  const api = new Api({ endpoint: 'https://api.exchangeratesapi.io/latest' })
  global.fetch = jest.fn().mockResolvedValue({
    status: 200,
    json() {
      return Promise.resolve({
        base: 'USD',
        date: '2019-04-05',
        rates: {
          RUB: 65,
          USD: 1,
        },
      })
    },
  })
  return api.fetchExchangeRates({ symbols: ['USD', 'RUB'] }).then((res) => {
    expect(res).toEqual({
      base: 'USD',
      date: '2019-04-05',
      rates: {
        RUB: 65,
        USD: 1,
      },
    })
    expect(global.fetch).toHaveBeenCalledWith('https://api.exchangeratesapi.io/latest?base=USD&symbols=USD%2CRUB')
  })
})
