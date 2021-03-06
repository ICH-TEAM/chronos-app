// import {
//   AuthResponseData,
//   HeatMapResponseData,
//   ResponseDailyFollow,
//   ResponseEvolAdherence,
//   ResponseISectionData,
//   ResponseISKUData,
//   ResponseMessuringData,
//   ResponseRanking,
//   ResponseRankSellersData,
//   ResponseScheduledData,
//   ResponseScheduledVSData,
//   Rooms,
//   Tables,
//   ZVS,

import {
  FacultiesResponseData,
  CourseIDResponseData,
  CareersResponseData,
  CoursesResponseData,
} from 'src/@types/models'
import {AuthResponseData} from '../@types/models/user'

// } from 'models'
export interface AppState {
  loading: boolean
  user: AuthResponseData | null
  faculties: FacultiesResponseData[] | null
  careers: CareersResponseData[] | null
  allCourses: CoursesResponseData[] | null
  course: CourseIDResponseData | null
  courses: CourseIDResponseData[] | null
  courseListInfo: CourseIDResponseData[] | null
  courseID: string | null
}

export const initialState: AppState = {
  loading: false,
  user: null,
  faculties: null,
  careers: null,
  allCourses: null,
  course: null,
  courses: null,
  courseListInfo: null,
  courseID: null,
}
