import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";



interface InputProps {
    value: string;
    type: 'default' | 'numeric';
    maxlength?: number;
    placeholder?: string;
    placeholderTextColor?: string;
    editable?: boolean;
    onChangeText?: (value: string) => void;
}
const UselessTextInput = (props: InputProps) => {
    const { value, type, placeholder, placeholderTextColor,
        maxlength, editable, onChangeText } = props;
    return (
        <SafeAreaView>
            <TextInput
                style = {styles.input}
                value = {value}
                onChangeText = {onChangeText}
                maxLength = {maxlength}
                placeholder = {placeholder}
                placeholderTextColor = {"#7b7b7b"}
                autoCorrect = {false}
                keyboardType= {type}
                editable = {editable}
                textAlign = {"left"}
                autoCapitalize = {"none"}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor:"#e7e7e7",
        margin: 10,
        borderWidth: 1,
        height: 50
    },
});

export default UselessTextInput;