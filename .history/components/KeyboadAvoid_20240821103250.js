import React from "react";

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native-web";
import { ScrollView } from "react-native-web";

const keyboardAvoidingWrapper = ({Children}) => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {Children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
export default keyboardAvoidingWrapper;