import * as React from 'react'
import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native'
import {Separator, CardCourse} from '../../components'
import GeneralScreen from '../../layouts/GeneralScreen'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../../store/state'
import {
  CourseIDResponseData,
  ListCourse,
  Course as typCourse,
} from 'src/@types/models'
import {getCourseService} from '../../services/getCourse'
//import {CourseID, CourseIDResponseData, Course} from 'src/@types/models'

const Courses = ({navigation}: RootTabScreenProps<'Home'>) => {
  const {user, courses, loading} = useSelector((state: AppState) => state)
  const dispatch = useDispatch()
  const services = getCourseService(dispatch)

  const listCurse: ListCourse[] = []
  const listCurses = () => {
    const idcourses: typCourse[] | null | undefined = user?.courses
    const listCurseInfo: CourseIDResponseData[] | null | undefined = []
    courses?.map(arr1 => {
      return idcourses?.map(arr2 => {
        if (arr2.id === arr1.id) {
          listCurseInfo.push(arr1)
        }
      })
    })
    listCurseInfo.map(arg => {
      listCurse.push({
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
        index: Math.floor(Math.random() * 3),
        createdAt: arg.createdAt,
        updatedAt: arg.updatedAt,
      })
    })
  }

  listCurses()

  const gap = 15
  //let loading = false
  const cursosInfo = (
    <FlatList
      data={listCurse}
      renderItem={dato => (
        <>
          <CardCourse
            title={dato.item.name}
            code={dato.item.code}
            time={dato.item.time}
            onPress={() => {
              services.courseID(dato.item.id)
              navigation.navigate('Course')
            }}
            index={dato.index}
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
        {courses?.length > 2 ? <Separator value={170} /> : null}
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
