import React, {FC} from 'react'
import {View} from 'react-native'

interface SeparatorProps {
  value?: number
  value2?: number
}

const Separator: FC<SeparatorProps> = ({value = 10, value2 = 200}) => {
  return <View style={{height: value, width: value2}} />
}

export default Separator
