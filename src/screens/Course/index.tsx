import * as React from 'react'
import {Text, View, StyleSheet, FlatList, ScrollView} from 'react-native'
import {AppState} from '../../store/state'
import {Separator, Input} from '../../components'
import GeneralScreen from '../../layouts/GeneralScreen'
import {useSelector} from 'react-redux'
import {ListCourse} from 'src/@types/models'

const Course = ({navigation}: RootTabScreenProps<'Home'>) => {
  const {user, courses, courseID, loading} = useSelector(
    (state: AppState) => state,
  )
  const cursosInf: ListCourse[] = []
  courses?.map(arg => {
    if (courseID === arg.id) {
      cursosInf.push({
        id: arg.id,
        code: arg.code,
        career: arg.career,
        faculty: arg.faculty,
        name: arg.name,
        section: arg.sections[0].section,
        teacher: arg.sections[0].times[0].teacher,
        time:
          arg.sections[0].times[0].from +
          ':00 - ' +
          arg.sections[0].times[0].to +
          ':00 ',
        times: arg.sections[0].times,
        index: Math.floor(Math.random() * 3),
        createdAt: arg.createdAt,
        updatedAt: arg.updatedAt,
      })
    }
  })

  console.log(courseID)
  const gap = 15
  const data = cursosInf[0]
  const times = data.times
  const cursosInfo = (
    <View style={styles.coursesList}>
      <Text style={styles.title}> {data.name}</Text>
      <Text style={styles.textLabel}> Profesor</Text>
      <Input
        placeholder={data.teacher}
        editable={false}
        placeholderTextColor={'#000000'}
      />
      <Separator value={gap} />
      <Text style={styles.textLabel}> Codigo del Curso</Text>
      <Input
        placeholder={data.code}
        editable={false}
        placeholderTextColor={'#000000'}
      />
      <Separator value={gap} />
      <Text style={styles.textLabel}> Carrera</Text>
      <Input
        placeholder={user?.career.name}
        editable={false}
        placeholderTextColor={'#000000'}
      />
      <Separator value={gap} />
      <Text style={styles.textLabel}> Horario</Text>
      <ScrollView horizontal={true}>
        <FlatList
          data={times}
          renderItem={({item}) => (
            <>
              <Input
                placeholder={item.from + ':00 - ' + item.to + ':00 '}
                editable={false}
                placeholderTextColor={'#000000'}
              />
              <Separator value={gap} />
            </>
          )}
        />
      </ScrollView>
    </View>
  )

  return (
    <GeneralScreen navigation={navigation.navigate}>
      <View style={styles.container}>
        {loading ? <Text>Loading...</Text> : cursosInfo}
        <Separator value={20} />
        <View style={styles.textTitle}>
          <Text
            style={styles.itemText}
            onPress={() => {
              navigation.navigate('Home')
            }}>
            Regresar
          </Text>
        </View>
        <Separator value={20} />
      </View>
    </GeneralScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 30,
    color: 'black',
  },
  textTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textLabel: {
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    fontSize: 17,
    marginBottom: 15,
  },
  coursesList: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginTop: 20,
  },
  itemInput: {},
})

export default Course
