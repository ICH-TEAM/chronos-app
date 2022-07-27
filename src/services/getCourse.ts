// import {Alert} from 'react-native'
import {Alert} from 'react-native'
import {DispatchType} from '../@types/models/api'
import {ActionType} from '../actions/types'
import {ApiLogin} from '../api/course'
import {CourseID, CourseIDResponseData, ListCourse} from '../@types/models'

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
        // console.log('response Get one Course: ')
        // console.log(JSON.stringify(response.data.message))
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

  const courseID = (args: string) => {
    try {
      dispatch({
        type: ActionType.COURSE_ID,
      })
      dispatch({
        type: ActionType.COURSE_ID_SUCCESS,
        payload: args,
      })
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
        type: ActionType.COURSE_ID_RESET,
      })
    }
  }

  const listCourse = async (args: CourseIDResponseData[]) => {
    try {
      dispatch({
        type: ActionType.LIST_COURSES,
      })
      const listCurse: ListCourse[] = []
      console.log('args: ' + args.length)

      args.map(arg => {
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
            '00 - ' +
            arg.sections[0].times[0].to +
            ':00 ',
          index: Math.floor(Math.random() * 3),
          createdAt: arg.createdAt,
          updatedAt: arg.updatedAt,
        })
      })
      dispatch({
        type: ActionType.LIST_COURSES_REEMPLAZED,
        payload: listCurse,
      })
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
        type: ActionType.LIST_COURSES_RESET,
      })
    }
  }

  const getAllCourse = async () => {
    try {
      dispatch({
        type: ActionType.GET_ALL_COURSE,
      })

      const response = await appApi.getAllcourse()
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: ActionType.GET_ALL_COURSE_SUCCESS,
          payload: response.data.message,
        })
        // console.log('response Get one Course: ')
        // console.log(JSON.stringify(response.data.message))
      } else {
        const {errors} = response.request
        console.log('Errors')
        console.log(errors)
        throw errors
      }
    } catch (err) {
      console.log('Errors')
      console.log(err)
      Alert.alert('Hubo un error en Get All Course', 'Intentalo de nuevo', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ])
      dispatch({
        type: ActionType.GET_ALL_COURSE_ERROR,
      })
    }
  }

  return {getOnecourse, listCourse, getAllCourse, courseID}
}
