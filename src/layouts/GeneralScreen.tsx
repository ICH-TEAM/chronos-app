import React, {FC} from 'react'
import {ScrollView} from 'react-native'
import {Navbar} from './../components'

interface GeneralLayoutProps {
  children: JSX.Element
}
const GeneralScreen: FC<GeneralLayoutProps> = props => {
  const {children} = props
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {children}
      <Navbar />
    </ScrollView>
  )
}

export default GeneralScreen
