import {
  FacultiesResponseData,
  CourseIDResponseData,
  ListCourse,
  CoursesResponseData,
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

// Obtener lista de carreras
type GetAllCareers = {
  type: ActionType.GET_CAREERS_BY_FACULTY
}

type GetAllCareersSuccess = {
  type: ActionType.GET_CAREERS_BY_FACULTY_SUCCESS
  payload: FacultiesResponseData[]
}

type GetAllCareersError = {
  type: ActionType.GET_CAREERS_BY_FACULTY_ERROR
}

// Obtener lista de cursos
type GetAllCourses = {
  type: ActionType.GET_COURSES_BY_FACULTY
}

type GetAllCoursesSuccess = {
  type: ActionType.GET_COURSES_BY_FACULTY_SUCCESS
  payload: CoursesResponseData[]
}

type GetAllCoursesError = {
  type: ActionType.GET_COURSES_BY_FACULTY_ERROR
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

// - - - - - obtener 1 curso
type InfoCourseID = {
  type: ActionType.COURSE_ID
}

type InfoCourseIDSuccess = {
  type: ActionType.COURSE_ID_SUCCESS
  payload: string
}

type InfoCourseIDError = {
  type: ActionType.COURSE_ID_RESET
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
  | GetAllCareers
  | GetAllCareersSuccess
  | GetAllCareersError
  | GetAllCourses
  | GetAllCoursesSuccess
  | GetAllCoursesError
  | GetOneCourse
  | GetOneCourseSuccess
  | GetOneCourseError
  | ListCourses
  | ListCoursesReemplazed
  | ListCoursesReset
  | GetAllCourse
  | GetAllCourseSuccess
  | GetAllCourseError
  | InfoCourseID
  | InfoCourseIDSuccess
  | InfoCourseIDError
