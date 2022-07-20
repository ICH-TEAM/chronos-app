import {Dispatch} from 'react'
import {AppAction} from '../../actions/action'

export enum StatusCode {
  Ok = 200,
  Created = 201,
  NotFound = 404,
}

export type DispatchType = Dispatch<AppAction>
