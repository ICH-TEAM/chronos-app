import {Button, Separator, CoursesSelector} from '../../components'
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import React, {FC, useEffect, useState} from 'react'
import {getRegisterInformationService} from '../../services/getRegisterInformation'
import {authService} from '../../services/auth'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../../store/state'

const gap = 25
type FilterSelected = (selected: string[], value: string) => string[]
const filterSelected: FilterSelected = (selected, value) => {
  if (selected.find(e => e === value)) {
    return selected.filter(e => e !== value)
  }

  return [...selected, value]
}
interface SelectCoursesProps {
  changeStep: (value: number) => void
  saveChanges: (value: Record<string, any>) => void
  currentInformation: Record<string, any>
}
const SelectCourses: FC<SelectCoursesProps> = props => {
  const {changeStep, saveChanges, currentInformation} = props
  const [selected, setSelected] = useState<string[]>([])
  const {allCourses, loading} = useSelector((state: AppState) => state)
  const dispatch = useDispatch()
  const services = getRegisterInformationService(dispatch)
  const auth = authService(dispatch)

  const selectItem = (value: string) => {
    const items = filterSelected(selected, value)
    const coursesSelected = {
      courses: items
    }
    saveChanges(coursesSelected)
    setSelected(items)
  }
  const registerUser = () => {
    if (selected.length > 0) {
      console.log('\n\n\n\nFINAL DATA')
      console.log(currentInformation)
      auth.registerUser(currentInformation)
      // changeStep(1)
    } else {
      console.log('\nSelecciona un curso')
      console.log(allCourses)

      console.log('\ncurrentInformation.faculty')
      console.log(currentInformation.faculty)
    }
  }

  useEffect(() => {
    console.log('\ncurrentInformation.faculty')
    console.log(currentInformation.faculty)
    services.getAllCourses(currentInformation.faculty)
  }, [])

  return (
    <View style={styles.container}>
      {!loading && (
        <View style={styles.container}>
          <Text style={styles.title}>Elige tu carrera</Text>
          <View style={styles.itemsContainer}>
            <FlatList
              data={allCourses}
              renderItem={({item}) => (
                <View>
                  <CoursesSelector
                    selectedValues={selected}
                    label={`${item.name}`}
                    selectItem={selectItem}
                    itemID={item.id}
                  />
                  <Separator value={gap} />
                </View>
              )}
            />
          </View>
          <Button label="Registrar" onPress={registerUser} />
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => changeStep(-1)}>
            <Text>Regresar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  itemsContainer: {
    marginVertical: 30,
    minHeight: 400
  }
})

export default SelectCourses
