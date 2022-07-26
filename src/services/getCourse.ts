// import {Alert} from 'react-native'
import {Alert} from 'react-native'
import {DispatchType} from '../@types/models/api'
import {ActionType} from '../actions/types'
import {ApiLogin} from '../api/course'
import {CourseID} from '../@types/models'

export const getCourseService = (dispatch: DispatchType) => {
  const appApi = ApiLogin()

  const getOnecourse = async (args: CourseID) => {
    try {
      dispatch({
        type: ActionType.GET_ONE_COURSE,
      })

      const response = await appApi.getOnecourse(args)
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: ActionType.GET_ONE_COURSE_SUCCESS,
          payload: response.data.message,
        })
        console.log('response Get one Course: ' + response.data.message)
      } else {
        const {errors} = response.request

        throw errors
      }
    } catch (err) {
      console.log('Errors')
      console.log(err)
      Alert.alert('Hubo un error en Get one course', 'Intentalo de nuevo', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ])
      dispatch({
        type: ActionType.GET_ONE_COURSE_ERROR,
      })
    }
  }

  return {getOnecourse}
}