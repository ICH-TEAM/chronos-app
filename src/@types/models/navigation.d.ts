import {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import {
  CompositeScreenProps,
  // NavigatorScreenParams,
} from '@react-navigation/native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
  type RootStackParamList = {
    // Root: NavigatorScreenParams<RootTabParamList> | undefined
    Home: undefined
    Settings: undefined
    Courses: undefined
    Course: undefined
    News: undefined
    Modal: undefined
    NotFound: undefined
    SelectFaculties: undefined
    StepSchooll: undefined
    StepCourse: undefined
  }

  type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>

  type RootTabParamList = {
    Home: undefined
    Settings: undefined
    Courses: undefined
    News: undefined
    SignIn: undefined
    SignUp: undefined
    SelectFaculties: undefined
    SelectSchooll: undefined
    SelectCourse: undefined
  }

  type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
      BottomTabScreenProps<RootTabParamList, Screen>,
      NativeStackScreenProps<RootStackParamList>
    >
}
