import { FontAwesome } from "@expo/vector-icons"
import { FC } from "react"

interface IconProps {
  name: React.ComponentProps<typeof FontAwesome>["name"]
  color: string
}

const Icon: FC<IconProps> = (props) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}

export default Icon
