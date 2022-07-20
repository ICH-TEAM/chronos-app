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

import {AuthResponseData} from '../@types/models/user'

// } from 'models'
export interface AppState {
  loading: boolean
  user: AuthResponseData | null
}

export const initialState: AppState = {
  loading: false,
  user: null,
}
