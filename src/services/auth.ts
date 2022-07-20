// import {Alert} from 'react-native'
import {Alert} from 'react-native'
import {DispatchType} from '../@types/models/api'
import {Auth} from '../@types/models/user'
import {ActionType} from '../actions/types'
import {ApiLogin} from '../api/user'

export const authService = (dispatch: DispatchType) => {
  const appApi = ApiLogin()

  const auth = async (args: Auth) => {
    try {
      dispatch({
        type: ActionType.AUTH_USER,
      })

      const response = await appApi.auth(args)
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: ActionType.AUTH_USER_SUCCESS,
          payload: response.data.message,
        })
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
        type: ActionType.AUTH_USER_ERROR,
      })
    }
  }
  return {auth}
}
