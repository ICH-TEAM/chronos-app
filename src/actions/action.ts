import {AuthResponseData} from '../@types/models/user'
import {ActionType} from './types'

type AuthUser = {
  type: ActionType.AUTH_USER
}

type AuthUserSuccess = {
  type: ActionType.AUTH_USER_SUCCESS
  payload: AuthResponseData
}

type AuthUserError = {
  type: ActionType.AUTH_USER_ERROR
}
// - - - - - Registrar
type RegisterUser = {
  type: ActionType.REGISTER_USER
}

type RegisterUserSuccess = {
  type: ActionType.REGISTER_USER_SUCCESS
  payload: AuthResponseData
}

type RegisterUserError = {
  type: ActionType.REGISTER_USER_ERROR
}

export type AppAction =
  | AuthUser
  | AuthUserSuccess
  | AuthUserError
  | RegisterUser
  | RegisterUserSuccess
  | RegisterUserError
