export interface CourseID {
  id: string
}
interface Time {
  from: number
  to: number
  day: number
  teacher: string
}
interface Section {
  section: string
  times: Time[]
}
export interface CourseIDResponseData {
  id: string
  name: string
  code: string
  career: string
  faculty: string
  sections: Section[]
  createdAt: string
  updatedAt: string
}
