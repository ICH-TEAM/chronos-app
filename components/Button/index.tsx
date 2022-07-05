import { FC} from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';


interface ButProps {
    title: string;
    onPress?: ()=>void;
}
const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: "#3c72ff",
        height: 40, 
        width: 90,
        margin: 5
    },

    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: "#ffffff",
    },
});
const Button: FC<ButProps> = (ButProps)=> {
    const { title, onPress } = ButProps
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <View>
                <Text
                    style={styles.buttonText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;