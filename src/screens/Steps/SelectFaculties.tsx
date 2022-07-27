import {Button, Separator, StepItem} from '../../components'
import {Text, View, StyleSheet, FlatList} from 'react-native'
import React, {FC, useEffect, useState} from 'react'
import {getRegisterInformationService} from '../../services/getRegisterInformation'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../../store/state'

const gap = 25

interface SelectFacultiesProps {
  changeStep: (value: number) => void
  saveChanges: (value: Record<string, any>) => void
}
const SelectFaculties: FC<SelectFacultiesProps> = props => {
  const {changeStep, saveChanges} = props
  const [selected, setSelected] = useState<string>('')
  const {faculties, loading} = useSelector((state: AppState) => state)
  const dispatch = useDispatch()
  const services = getRegisterInformationService(dispatch)
  const selectItem = (value: string) => {
    setSelected(value)
  }
  const goToNextStep = () => {
    const facultySelected = {
      faculty: selected,
    }
    if (selected) {
      saveChanges(facultySelected)
      changeStep(1)
    } else {
      console.log('\nSelecciona una facultad')
    }
  }
  useEffect(() => {
    services.getAllFaculties()
  }, [])

  return (
    <View style={styles.container}>
      {!loading && (
        <View style={styles.container}>
          <Text style={styles.title}>Elige tu facultad</Text>
          <View style={styles.itemsContainer}>
            <FlatList
              data={faculties}
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

export default SelectFaculties
