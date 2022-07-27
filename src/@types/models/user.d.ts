export interface Auth {
  email: string
  password: string
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

// Register User
export interface RegisterUser {
  name: string
  email: string
  password: string
  lastName: string
  faculty: string
  career: string
  courses: string[]
}

export interface Course {
  id: string
  code: string
  name: string
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
  courses: Course[]
}
