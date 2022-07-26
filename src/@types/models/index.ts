declare global {
  interface ApiResponseSimba<T> {
    error: boolean
    message: T
  }
}

export * from './user'
export * from './faculties'
export * from './course'
