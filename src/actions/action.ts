import {
  FacultiesResponseData,
  CourseIDResponseData,
  ListCourse,
} from 'src/@types/models'
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

// - - - - - obtener facultades
type GetAllFaculties = {
  type: ActionType.GET_ALL_FACULTIES
}

type GetAllFacultiesSuccess = {
  type: ActionType.GET_ALL_FACULTIES_SUCCESS
  payload: FacultiesResponseData[]
}

type GetAllFacultiesError = {
  type: ActionType.GET_ALL_FACULTIES_ERROR
}

// - - - - - obtener 1 curso
type GetOneCourse = {
  type: ActionType.GET_ONE_COURSE
}

type GetOneCourseSuccess = {
  type: ActionType.GET_ONE_COURSE_SUCCESS
  payload: CourseIDResponseData
}

type GetOneCourseError = {
  type: ActionType.GET_ONE_COURSE_ERROR
}

// - - - - - Guardar la info de los cursos
type ListCourses = {
  type: ActionType.LIST_COURSES
}

type ListCoursesReemplazed = {
  type: ActionType.LIST_COURSES_REEMPLAZED
  payload: ListCourse[]
}

type ListCoursesReset = {
  type: ActionType.LIST_COURSES_RESET
}

// - - - - - obtener los cursos
type GetAllCourse = {
  type: ActionType.GET_ALL_COURSE
}

type GetAllCourseSuccess = {
  type: ActionType.GET_ALL_COURSE_SUCCESS
  payload: CourseIDResponseData[]
}

type GetAllCourseError = {
  type: ActionType.GET_ALL_COURSE_ERROR
}

export type AppAction =
  | AuthUser
  | AuthUserSuccess
  | AuthUserError
  | RegisterUser
  | RegisterUserSuccess
  | RegisterUserError
  | GetAllFaculties
  | GetAllFacultiesSuccess
  | GetAllFacultiesError
  | GetOneCourse
  | GetOneCourseSuccess
  | GetOneCourseError
  | ListCourses
  | ListCoursesReemplazed
  | ListCoursesReset
  | GetAllCourse
  | GetAllCourseSuccess
  | GetAllCourseError
