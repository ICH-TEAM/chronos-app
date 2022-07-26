// import {Alert} from 'react-native'
import {Alert} from 'react-native'
import {DispatchType} from '../@types/models/api'
import {ActionType} from '../actions/types'
import {ApiLogin} from '../api/steps'

export const getRegisterInformationService = (dispatch: DispatchType) => {
  const appApi = ApiLogin()

  const getAllFaculties = async () => {
    try {
      dispatch({
        type: ActionType.GET_ALL_FACULTIES,
      })

      const response = await appApi.getAllFaculties()
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: ActionType.GET_ALL_FACULTIES_SUCCESS,
          payload: response.data.message,
        })
        console.log(response.data.message)
      } else {
        const {errors} = response.request

        throw errors
      }
    } catch (err) {
      Alert.alert('Hubo un error', 'Intentalo de nuevo', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ])
      dispatch({
        type: ActionType.GET_ALL_FACULTIES_ERROR,
      })
    }
  }

  return {getAllFaculties}
}
