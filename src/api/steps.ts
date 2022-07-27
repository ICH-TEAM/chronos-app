import axios, {AxiosResponse} from 'axios'
import {
  CareersResponseData,
  CoursesResponseData,
  FacultiesResponseData,
} from 'src/@types/models'

type getAllFacultiesResponse = ApiResponseSimba<FacultiesResponseData[]>
type getAllCareersResponse = ApiResponseSimba<CareersResponseData[]>
type getAllCoursessResponse = ApiResponseSimba<CoursesResponseData[]>

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

  const getAllCareers = (
    facultyID: string,
  ): Promise<AxiosResponse<getAllCareersResponse>> => {
    const config = {
      method: 'get',
      url: `https://chronos-uni.herokuapp.com/api/career/${facultyID}`,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    console.log('\nconfig')
    console.log(config)

    return axios(config)
  }

  const getAllCourses = (
    facultyID: string,
  ): Promise<AxiosResponse<getAllCoursessResponse>> => {
    const config = {
      method: 'get',
      url: `https://chronos-uni.herokuapp.com/api/course/faculty/${facultyID}`,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    console.log('\nconfig')
    console.log(config)

    return axios(config)
  }

  return {getAllFaculties, getAllCareers, getAllCourses}
}
