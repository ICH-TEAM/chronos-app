import {initialState} from './state'
import {AppAction} from '../actions/action'
import {ActionType} from '../actions/types'

const reducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case ActionType.AUTH_USER:
      return {
        ...state,
        loading: true,
        user: null,
      }
    case ActionType.AUTH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
    case ActionType.AUTH_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
      }

    case ActionType.REGISTER_USER:
      return {
        ...state,
        loading: true,
        user: null,
      }
    case ActionType.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
    case ActionType.REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
      }
    case ActionType.GET_ALL_FACULTIES:
      return {
        ...state,
        loading: true,
        faculties: null,
      }
    case ActionType.GET_ALL_FACULTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        faculties: action.payload,
      }
    case ActionType.GET_ALL_FACULTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        faculties: null,
      }
    default:
      return {
        ...state,
      }
  }
}

export default reducer
