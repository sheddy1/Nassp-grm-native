import React from 'react';

import { Text, TextInput, Pressable, Button } from "react";

const Login = () => {
    return(
        <View>
            <Image source={require('./images/back.png')}  style={styles.back}/>
        </View>
    );
};

export default  Login;

const styles = StyleSheet.create({
    back: {
        top: 20,
        left: 20,
    },
})