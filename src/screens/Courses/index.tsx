import * as React from 'react'
import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native'
import {Separator, CardCourse} from '../../components'
import GeneralScreen from '../../layouts/GeneralScreen'

interface time {
  from: number
  to: number
  day: number
  teacher: string
}
interface section {
  section: string
  times: time[]
}
interface info {
  code: string
  career: string
  faculty: string
  name: string
  sections: section[]
  id: string
}
const sections = {
  section: 'A',
  times: [
    {
      from: 10,
      to: 12,
      day: 1,
      teacher: 'C. LARA',
    },
  ],
}
const data: info[] = [
  {
    code: 'CC451',
    career: 'Ciencias de la computacion',
    faculty: 'Facultad de ciencias',
    name: 'Interacción Humano-Computador',
    sections: [sections],
    id: '62c5d20488525d976c427a10',
  },
  {
    code: 'CC3S2',
    career: 'Ciencias de la computacion',
    faculty: 'Facultad de ciencias',
    name: 'DESARROLLO DE SOFTWARE',
    sections: [sections],
    id: '62c5ce15ca468fa02347220a',
  },
  {
    code: 'CC411',
    career: 'Ciencias de la computacion',
    faculty: 'Facultad de ciencias',
    name: 'SEGURIDAD EN SISTEMAS INFORMATICOS',
    sections: [sections],
    id: '62c5cec3ca468fa02347220c',
  },
]

const Courses = ({navigation}: RootTabScreenProps<'Home'>) => {
  const gap = 15
  let loading = false
  const cursosInfo = (
    <FlatList
      data={data}
      renderItem={dato => (
        <>
          <CardCourse
            title={dato.item.name}
            code={dato.item.code}
            time={
              dato.item.sections[0].times[0].from +
              '00 - ' +
              dato.item.sections[0].times[0].to +
              ':00 '
            }
            onPress={() => {}}
            index={Math.floor(Math.random() * 3)}
          />
          <Separator value={gap} />
        </>
      )}
    />
  )
  return (
    <GeneralScreen navigation={navigation.navigate}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.textTitle}>
            <Text style={styles.title1}>Cursos</Text>
            <Separator value2={250} />
            <Text style={styles.title2}>Editar</Text>
          </View>
          <View style={styles.coursesList}>
            <ScrollView horizontal={true}>
              {loading ? <Text>Loading...</Text> : cursosInfo}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </GeneralScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  paragraph: {
    marginTop: 8,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
  },
  title1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6C92F4',
  },
  selectButton: {
    backgroundColor: '#F7F9FC',
    borderColor: '#E7E7E7',
    paddingVertical: 10,
    paddingLeft: 20,
    borderWidth: 1,
    width: 250,
    borderRadius: 5,
  },
  textTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectText: {
    fontSize: 15,
    color: '#7B7B7B',
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
  textLogIn: {
    display: 'flex',
    alignItems: 'center',
  },
  textLogInColor: {
    color: '#797979',
  },
  form: {
    marginTop: 30,
    marginBottom: 50,
  },
  coursesList: {
    width: '100%',
    marginTop: 20,
  },
})

export default Courses
