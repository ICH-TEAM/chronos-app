import axios, {AxiosResponse} from 'axios'
import {CourseID, CourseIDResponseData} from '../@types/models'

type getOneCurseResponse = ApiResponseSimba<CourseIDResponseData>
type getAllCurseResponse = ApiResponseSimba<CourseIDResponseData[]>

export const ApiLogin = () => {
  const getOnecourse = (
    args: CourseID,
  ): Promise<AxiosResponse<getOneCurseResponse>> => {
    const data = {
      args: {
        ...args,
      },
    }

    const url = `https://chronos-uni.herokuapp.com/api/course/${data.args.id}`
    const config = {
      method: 'get',
      url: url,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    //console.log('AxiosRequest: ' + JSON.stringify(config, null, 2))

    return axios(config)
  }

  const getAllcourse = (): Promise<AxiosResponse<getAllCurseResponse>> => {
    const config = {
      method: 'get',
      url: 'https://chronos-uni.herokuapp.com/api/course',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    //console.log('AxiosRequest: ' + JSON.stringify(config, null, 2))

    return axios(config)
  }
  return {getOnecourse, getAllcourse}
}
