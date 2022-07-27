import {
  CourseIDResponseData,
  Course as typCourse,
  ListCourse,
  AuthResponseData,
} from 'src/@types/models'

export function listCurses(
  user: AuthResponseData,
  courses: CourseIDResponseData[],
) {
  const listCurse: ListCourse[] = []
  const idcourses: typCourse[] | null | undefined = user?.courses
  const listCurseInfo: CourseIDResponseData[] | null | undefined = []
  courses?.map(arr1 => {
    return idcourses?.map(arr2 => {
      if (arr2.id === arr1.id) {
        listCurseInfo.push(arr1)
      }
    })
  })
  listCurseInfo.map(arg => {
    listCurse.push({
      id: arg.id,
      code: arg.code,
      career: arg.career,
      faculty: arg.faculty,
      name: arg.name,
      section: arg.sections[0].section,
      teacher: arg.sections[0].times[0].teacher,
      time:
        arg.sections[0].times[0].from +
        ':00 - ' +
        arg.sections[0].times[0].to +
        ':00 ',
      index: Math.floor(Math.random() * 3),
      createdAt: arg.createdAt,
      updatedAt: arg.updatedAt,
    })
  })
  return listCurse
}
