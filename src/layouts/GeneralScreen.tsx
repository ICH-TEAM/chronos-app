import React, {FC} from 'react'
import {ScrollView} from 'react-native'

interface GeneralLayoutProps {
  children: JSX.Element
}
const GeneralScreen: FC<GeneralLayoutProps> = props => {
  const {children} = props
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {children}
    </ScrollView>
  )
}

export default GeneralScreen
