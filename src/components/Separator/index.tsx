import React, {FC} from 'react'
import {View} from 'react-native'

interface SeparatorProps {
  value?: number
}

const Separator: FC<SeparatorProps> = ({value = 10}) => {
  return <View style={{height: value, width: 200}} />
}

export default Separator
