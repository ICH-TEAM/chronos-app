import { LinkingOptions } from "@react-navigation/native"
import * as Linking from "expo-linking"


const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: "one",
            },
          },
          TabTwo: {
            screens: {
              SignIn: "two",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
}

export default linking
