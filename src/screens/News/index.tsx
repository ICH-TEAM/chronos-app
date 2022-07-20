import React from 'react'
import {Separator} from '../../components'
import {Text, View, StyleSheet, Image} from 'react-native'
import {useState} from 'react'

const gap = 10
const News = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selected, setSelected] = useState<string>('')

  return (
    <View style={styles.container}>
      <View style={styles.textTitle}>
        <Text style={styles.title}> Novedades</Text>
      </View>
      <View style={styles.itemsContainer}>
        <View style={styles.itemQR}>
          <Image source={require('./../../assets/images/qr.png')} />
          <Text> Yape</Text>
        </View>
        <View style={styles.itemQR}>
          <Image source={require('./../../assets/images/qr.png')} />
          <Text> Plin</Text>
        </View>
      </View>
      <Text> Comedor Universitario Uni</Text>
      <Text> MENU DEL DIA VIERNES 01 DE JULIO 2022</Text>
      <Image source={require('./../../assets/images/menu.png')} />
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
  },
  itemText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemQR: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
})

export default News
