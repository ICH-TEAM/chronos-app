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

import {FacultiesResponseData, CourseIDResponseData} from 'src/@types/models'
import {AuthResponseData} from '../@types/models/user'

// } from 'models'
export interface AppState {
  loading: boolean
  user: AuthResponseData | null
  faculties: FacultiesResponseData[] | null
  course: CourseIDResponseData | null
  courses: CourseIDResponseData[] | null
  courseListInfo: CourseIDResponseData[] | []
}

export const initialState: AppState = {
  loading: false,
  user: null,
  faculties: null,
  course: null,
  courses: null,
  courseListInfo: [],
}
