import React from "react"
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

interface Butstyle {
    color?: string;
    onPress?: () => void;
    text?: string;
}
interface ButProps {
    Butstyle?: Butstyle;
}
export function CustomButton(props: ButProps){
    const { Butstyle }  = props;
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
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                backgroundColor: Butstyle?.color,
            }}
            onPress={Butstyle?.onPress}
        >
            <Text
                style={{
                    ...styles.buttonText,
                    color: Butstyle?.color,
                    fontWeight: 'bold',
                }}>
                {Butstyle?.text}
            </Text>

        </TouchableOpacity>
    )
}

