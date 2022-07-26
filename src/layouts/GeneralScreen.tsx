import React, {FC} from 'react'
import {ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import {AppState} from '../store/state'
import {Navbar, Spinner} from './../components'

interface GeneralLayoutProps {
  children: JSX.Element
  navigation: (path: string) => void
}
const GeneralScreen: FC<GeneralLayoutProps> = props => {
  const {children, navigation} = props
  const loading = useSelector((state: AppState) => state.loading)
  const changeView = (path: string) => {
    navigation(path)
  }
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {loading && <Spinner />}
      {children}
      <Navbar navigate={changeView} />
    </ScrollView>
  )
}

export default GeneralScreen
