import React, {FC} from 'react'
import {ScrollView} from 'react-native'
import {Navbar} from './../components'

interface GeneralLayoutProps {
  children: JSX.Element
  navigation: (path: string) => void
}
const GeneralScreen: FC<GeneralLayoutProps> = props => {
  const {children, navigation} = props
  const changeView = (path: string) => {
    navigation(path)
  }
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {children}
      <Navbar navigate={changeView} />
    </ScrollView>
  )
}

export default GeneralScreen
