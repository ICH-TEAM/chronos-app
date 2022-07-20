import axios, {AxiosResponse} from 'axios'
import {ApiResponseSimba, Auth, AuthResponseData} from '../@types/models/user'

type AuthResponse = ApiResponseSimba<AuthResponseData>

export const ApiLogin = () => {
  const auth = (args: Auth): Promise<AxiosResponse<AuthResponse>> => {
    const data = {
      args: {
        ...args,
      },
    }

    const config = {
      method: 'post',
      url: 'https://chronos-uni.herokuapp.com/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    return axios(config)
  }
  return {auth}
}
