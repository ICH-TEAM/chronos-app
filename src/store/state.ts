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

import {FacultiesResponseData} from 'src/@types/models'
import {AuthResponseData} from '../@types/models/user'

// } from 'models'
export interface AppState {
  loading: boolean
  user: AuthResponseData | null
  faculties: FacultiesResponseData[] | null
}

export const initialState: AppState = {
  loading: false,
  user: null,
  faculties: null,
}
