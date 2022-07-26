import axios, {AxiosResponse} from 'axios'
import {FacultiesResponseData} from 'src/@types/models'

type getAllFacultiesResponse = ApiResponseSimba<FacultiesResponseData[]>

export const ApiLogin = () => {
  const getAllFaculties = (): Promise<
    AxiosResponse<getAllFacultiesResponse>
  > => {
    const config = {
      method: 'get',
      url: 'https://chronos-uni.herokuapp.com/api/faculty',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    return axios(config)
  }

  return {getAllFaculties}
}
