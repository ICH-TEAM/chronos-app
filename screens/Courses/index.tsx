import { Text, View } from "../../components/Themed"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Input, Button, Separator } from "../../components"
const gap = 30
const title = "Calculo Diferencial"
const profesor = "Victor Huanca"
const codigo = "CC1035-B"
const horario = ["Lunes", "Miercoles"]
interface Props {
    title: string,
    profesor: string,
    codigo: string,
    horario: string[],
}
export default function Course({ navigation }: RootTabScreenProps<"Course">) {
    const props: Props = { title, profesor, codigo, horario }
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{props.title}</Text>
                <Separator value={20} />
            <View style={styles.container2}>
                <Text style={styles.text}>Profesor</Text>
                <Input style={{ ...styles.input }} editable={false} value={props.profesor} textAlign={"left"} />
                <Separator value={5} />
                <Text style={styles.text}>Codigo de Curso</Text>
                <Input style={{ ...styles.input }} editable={false} value={props.codigo} textAlign={"left"} />
                <Separator value={5} />
                <Text style={styles.text}>horario</Text>
                <Input style={{ ...styles.input }} editable={false} value={props.horario[0]} textAlign={"left"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    container2: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",

    },
    text: {
        fontSize: 16,
        fontWeight: "normal",
        color: "black",
    },
    input: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
    },
})
