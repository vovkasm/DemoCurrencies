import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface IProps {
  symbol: string
  value: number
}

export const ExchangeRow: React.FC<IProps> = (props) => {
  return (
    <View style={s.row}>
      <Text style={s.col1}>{props.symbol}</Text>
      <Text style={s.col2}>{props.value}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  col1: {
    flex: 1,
  },
  col2: {
    flex: 2,
  },
  row: {
    flexDirection: 'row',
  },
})
