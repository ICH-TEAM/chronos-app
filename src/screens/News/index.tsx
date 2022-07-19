import React from 'react'
import {Separator} from '../../components'
import {Text, View, StyleSheet} from 'react-native'
import {useState} from 'react'

const gap = 25
const News = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selected, setSelected] = useState<string>('')

  return (
    <View style={styles.container}>
      <View style={styles.textTitle}>
        <Text style={styles.title}> Novedades</Text>
      </View>
      <View style={styles.itemsContainer}>
        <View>
          <Text> Yape</Text>
        </View>
        <Separator value={gap} />
        <View>
          <Text> Plin</Text>
        </View>
      </View>
      <Text> Comedor Universitario Uni</Text>
      <Text> MENU DEL DIA VIERNES 01 DE JULIO 2022</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
    margin: 10,
  },
  textTitle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 30,
  },
  itemText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

export default News
