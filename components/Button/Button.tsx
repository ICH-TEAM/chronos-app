import { FC } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

interface Butstyle {
    color?: string;
    onPress?: () => void;
    text?: string;
}
interface ButProps {
    Butstyle?: Butstyle;
}

const CustomButton: FC<ButProps> = ({ Butstyle }) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                backgroundColor: Butstyle?.color,
            }}
            onPress={Butstyle?.onPress}
        >
            <View>
                <Text
                    style={{
                        ...styles.buttonText,
                        color: Butstyle?.color,
                        fontWeight: 'bold',
                    }}>
                    {Butstyle?.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        borderRadius: 5,
        padding: '5px',
        width: '100%',
    },

    buttonText: {
        textAlign: 'center',
    }
});

export default CustomButton;