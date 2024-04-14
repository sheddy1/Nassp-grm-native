import React from 'react';

import { Text, TextInput, Pressable, Button, StyleSheet, View, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ navigation }) => {
    return(
        <SafeAreaView>
            
            <Pressable style={styles.loginBack}
                onPress={() =>
                    navigation.navigate('Home')
                }
            >
                <Image source={require('./images/back.png')}  style={styles.back}/>
            </Pressable>

            <Text style={styles.loginHeader}>Register</Text>

            <View style={styles.loginEmail}>
                <Text style={styles.loginEmailHead}>Email</Text>
                <TextInput 
                    style={styles.loginEmailInput}
                    placeholder="Email Address"
                />
            </View>

            <View style={styles.loginPassword}>
                <Text style={styles.loginEmailHead}>Password</Text>
                <TextInput 
                    secureTextEntry={true} 
                    style={styles.loginEmailInput}
                    placeholder="Enter Password"
                />
            </View>

            <View style={styles.loginPhone}>
                <Text style={styles.loginEmailHead}>Phone Number</Text>
                <TextInput 
                    style={styles.loginEmailInput}
                    placeholder="Phone Number"
                />
            </View>

            <Pressable style={styles.loginButton}
                onPress={() =>
                    navigation.navigate('Home')
                }
            >
                <Text style={styles.loginButtonTxt}>Register</Text>
            </Pressable>

        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    back: {
        top: 0,
        left: 0,
        width: 20,
        height: 20,
    },
    loginBack:{
        width: 20,
        height: 20,
        top: 50,
        left: 30,
        // backgroundColor: 'red',
    },
    loginHeader:{
        top: 80,
        left: 30,
        fontSize: 36,
        color: '#052600',
    },
    loginEmail:{
        top: 100,
        left: 30,
        // backgroundColor: 'red',
        width: 300,
        height: 60,
    },
    loginEmailHead:{
        top: 0,
        left: 0,
        fontSize: 15,
        color: '#052600',
    },
    loginEmailInput:{
        width: 300,
        height: 40,
        top: 0,
        left: 0,
        borderWidth: 2,
        borderColor: '#052600',
        textAlign: "justify",
    },
    loginPassword:{
        top: 120,
        left: 30,
        // backgroundColor: 'red',
        width: 300,
        height: 60,
    },
    loginPhone:{
        top: 140,
        left: 30,
        // backgroundColor: '#052600',
        width: 300,
        height: 40,
        borderRadius: 4,
    },
    loginButtonTxt:{
        textAlign: 'center',
        color: 'white',
        top: 10,
    },

    loginButton:{
        top: 180,
        left: 30,
        backgroundColor: '#052600',
        width: 300,
        height: 40,
        borderRadius: 4,
    },
});

