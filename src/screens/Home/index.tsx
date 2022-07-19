import React from 'react'
import Avatar from '../../assets/svg/Avatar'
import {View, ScrollView, StyleSheet, Text} from 'react-native'
import {CardCourse, Separator} from '../../components'

const gap = 20

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.userCard}>
          <Avatar gender="male" />
          <View style={styles.avatarInformation}>
            <Text style={styles.avatarName}>Diego Salazar</Text>
            <Text style={styles.avatarSchool}>C. de la Computacion</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.date}>Lunes, 03 de mayo</Text>
          <Text style={styles.coursesListTitle}>Cursos en el día</Text>
          <View style={styles.coursesList}>
            <CardCourse
              title="Calculo diferencial"
              code="C1FA3"
              time="10:00 - 12:00"
              index={0}
            />
            <Separator value={gap} />
            <CardCourse
              title="Calculo diferencial"
              code="C1FA3"
              time="10:00 - 12:00"
              index={1}
            />
            <Separator value={gap} />
            <CardCourse
              title="Calculo diferencial"
              code="C1FA3"
              time="10:00 - 12:00"
              index={2}
            />
          </View>
        </View>
      </View>
    </ScrollView>
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
    fontSize: 16,
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
