export interface Auth {
  email: string
  password: string
}

export interface ApiResponseSimba<T> {
  error: boolean
  message: T
}

export interface AuthResponseData {
  id: string
  name: string
  email: string
  lastName: string
  faculty: {
    name: string
    id: string
  }
  career: {
    name: string
    id: string
  }
  courses: string[]
}
