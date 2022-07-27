import {Button, Separator, StepItem} from '../../components'
import {Text, View, StyleSheet, FlatList} from 'react-native'
import React, {FC, useEffect, useState} from 'react'
import {getRegisterInformationService} from '../../services/getRegisterInformation'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../../store/state'

const gap = 25

interface SelectSchoolProps {
  changeStep: (value: number) => void
  saveChanges: (value: Record<string, any>) => void
  currentInformation: Record<string, any>
}
const SelectSchool: FC<SelectSchoolProps> = props => {
  const {changeStep, saveChanges, currentInformation} = props
  const [selected, setSelected] = useState<string>('')
  const {careers, loading} = useSelector((state: AppState) => state)
  const dispatch = useDispatch()
  const services = getRegisterInformationService(dispatch)
  const selectItem = (value: string) => {
    setSelected(value)
  }
  const goToNextStep = () => {
    const schoolSelected = {
      school: selected,
    }
    if (selected) {
      saveChanges(schoolSelected)
      changeStep(1)
    } else {
      console.log('\nSelecciona un curso')
      console.log(careers)

      console.log('\ncurrentInformation.faculty')
      console.log(currentInformation.faculty)
    }
  }
  useEffect(() => {
    console.log('\ncurrentInformation.faculty')
    console.log(currentInformation.faculty)
    services.getAllCareers(currentInformation.faculty)
  }, [])

  return (
    <View style={styles.container}>
      {!loading && (
        <View style={styles.container}>
          <Text style={styles.title}>Elige tu carrera</Text>
          <View style={styles.itemsContainer}>
            <FlatList
              data={careers}
              renderItem={({item}) => (
                <View>
                  <StepItem
                    selectedValue={selected}
                    label={`${item.name}`}
                    selectItem={selectItem}
                    itemID={item.id}
                  />
                  <Separator value={gap} />
                </View>
              )}
            />
          </View>
          <Button label="Continuar" onPress={goToNextStep} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  itemsContainer: {
    marginVertical: 30,
    minHeight: 400,
  },
})

export default SelectSchool
