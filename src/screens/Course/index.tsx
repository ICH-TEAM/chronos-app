import * as React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {Separator, Input} from '../../components'

const data = [
  {
    code: 'CC451',
    career: 'Ciencias de la computacion',
    faculty: 'Facultad de ciencias',
    name: 'Interacción Humano-Computador',
    teacher: 'Ciro Nunez',
    id: '62c5d20488525d976c427a10',
    times: [
      {
        from: 10,
        to: 12,
        day: 1,
      },
      {
        from: 12,
        to: 15,
        day: 1,
      },
    ],
  },
]
const Course = () => {
  const gap = 15
  let loading = true
  const cursosInfo = data.map(res => {
    loading = false
    return (
      <View style={styles.coursesList}>
        <Text style={styles.title}> {res.name}</Text>
        <Text style={styles.textLabel}> Profesor</Text>
        <Input
          placeholder={res.teacher}
          editable={false}
          placeholderTextColor={'#000000'}
        />
        <Separator value={gap} />
        <Text style={styles.textLabel}> Codigo del Curso</Text>
        <Input
          placeholder={res.code}
          editable={false}
          placeholderTextColor={'#000000'}
        />
        <Separator value={gap} />
        <Text style={styles.textLabel}> Carrera</Text>
        <Input
          placeholder={res.career}
          editable={false}
          placeholderTextColor={'#000000'}
        />
        <Separator value={gap} />
        <Text style={styles.textLabel}> Horario</Text>
        {res.times.map(time => {
          return (
            <>
              <Input
                placeholder={time.from + ':00 - ' + time.to + ':00 '}
                editable={false}
                placeholderTextColor={'#000000'}
              />
              <Separator value={gap} />
            </>
          )
        })}
      </View>
    )
  })
  return (
    <View style={styles.container}>
      {loading ? <Text>Loading...</Text> : cursosInfo}
      <Separator value={70} />
      <View style={styles.textTitle}>
        <Text style={styles.itemText}>Regresar</Text>
      </View>
      <Separator value={35} />
    </View>
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
