// import {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
// import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {useEffect} from 'react'
import Avatar from '../../assets/svg/Avatar'
import {View, StyleSheet, Text, FlatList, ScrollView} from 'react-native'
import {CardCourse, Separator} from '../../components'
import GeneralScreen from '../../layouts/GeneralScreen'

import {getCourseService} from '../../services/getCourse'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../../store/state'
import {
  CourseIDResponseData,
  Course as typCourse,
  ListCourse,
} from 'src/@types/models'

//import {listCurses} from './../Util'
// import {
//   CompositeScreenProps,
//   NavigatorScreenParams,
// } from '@react-navigation/native'

const gap = 20

const Home = ({navigation}: RootTabScreenProps<'Home'>) => {
  const {user, courses, loading} = useSelector((state: AppState) => state)
  const dispatch = useDispatch()
  const services = getCourseService(dispatch)

  useEffect(() => {
    services.getAllCourse()
  }, [])

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
  // if (user != null && courses != null) {
  //   listCurse.concat(listCurses(user, courses))
  // }

  console.log('arrs: ' + JSON.stringify(listCurse, 0, 2))

  const cursosInfo = (
    <FlatList
      data={listCurse}
      renderItem={(dato: {item: any}) => (
        <>
          <CardCourse
            title={dato.item.name}
            code={dato.item.code}
            time={dato.item.time}
            onPress={() => {
              services.courseID(dato.item.id)
              navigation.navigate('Course')
            }}
            index={dato.item.index}
          />
          <Separator value={gap} />
        </>
      )}
    />
  )

  return (
    <GeneralScreen navigation={navigation.navigate}>
      <View style={styles.container}>
        <View style={styles.userCard}>
          <Avatar gender="male" />
          <View style={styles.avatarInformation}>
            <Text style={styles.avatarName}>
              {user?.name + ' ' + user?.lastName}
            </Text>
            <Text style={styles.avatarSchool}>{user?.career.name}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.date}>{new Date(Date.now()).toDateString()}</Text>
          <Text style={styles.coursesListTitle}>Cursos en el día</Text>
          <View style={styles.coursesList}>
            <ScrollView horizontal={true}>
              {loading ? <Text>Loading...</Text> : cursosInfo}
            </ScrollView>
          </View>
        </View>
      </View>
    </GeneralScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userCard: {
    backgroundColor: '#3C72FF',
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  avatar: {
    width: 90,
    height: 90,
  },
  avatarName: {
    fontSize: 30,
    backgroundColor: '#3C72FF',
    fontWeight: '700',
    color: 'white',
  },
  avatarSchool: {
    fontSize: 20,
    backgroundColor: '#3C72FF',
    color: 'white',
    fontWeight: '400',
  },
  avatarInformation: {
    marginLeft: 20,
  },
  content: {
    padding: 25,
  },
  date: {
    fontSize: 23,
  },
  coursesListTitle: {
    fontSize: 25,
    fontWeight: '500',
  },
  coursesList: {
    width: '100%',
    marginTop: 20,
  },
})

export default Home
