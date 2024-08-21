import React from 'react';

import { Text, TextInput, Pressable, Button, StyleSheet, View, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import axios from 'axios';
import { Axios } from 'axios';

const Register = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [emailVerify, setEmailVerify] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState(false);

    const [phone, setPhone] = useState('');
    const [phoneVerify, setPhoneVerify] = useState(false);

    const [showPAssword, setShowPassword] = useState(false);

    // Register = () => {

    //     let InsertAPIURL = "https://localhost/nassp-grm-native/api/insert.php";

    //     let headers ={
    //         'Accept' : 'application/json',
    //         'Content-Type' : 'application/json' 
    //     };

    //     let Data = {
    //         email: email,
    //         password: password,
    //         phone: phone
    //     }

    //     fetch(InsertAPIURL, {
    //         method: 'POST',
    //         header: headers,
    //         body : JSON.stringify(Data)
    //     })
    //     .then((response)=> response.json())
    //     .then((response) =>{
    //         alert(response[0].Message);
    //     })
    //     .catch((error) => {
    //         alert((error) => {
    //             alert("Error" + error);
    //         })
    //     })
    // }

    function handleSubmit() {


        const userData ={
            email:email, 
            password: password,
            phone: phone,
        };
        // alert(phone);

        if(email == '' && password == '' && phone=='')
        {
            alert('input details');
        }
        

        // const insert = axios
        //     .post('http://192.168.186.108:5001/register', userData)
        //     .then(res => console.log(res.data)) 
        //     .catch(e=>console.log(e));

        //  const insert = 
        // fetch('https://192.168.89.101/nassp-grm-native/api/insert.php', {
        //     method: 'POST',
        //     body: JSON.stringify(userData),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // })
        // // .then((response)=> response.json())
        // .then((response) =>{
        //     alert(response[0].Message);
        // })
        // .catch((error) => {
        //     alert((error) => {
        //         alert("Error" + error);
        //     })
        // })

        // alert(res);

        // alert()

        // if (!insert )
        // {
        //     alert ("data has been inserted")
        // }
        // else{
        //     alert("there was an error")
        // }
    }

    function handleEmail(e){
        // console.log(e.nativeEvent.text);
        const emailVar=e.nativeEvent.text;
        setEmail(emailVar);
        setEmailVerify(false);
        if(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)){
            setEmail(emailVar);
            setEmailVerify(true);
        }
    }

    function handlePassword(e){
        // console.log(e.nativeEvent.text);
        const passwordVar=e.nativeEvent.text;
        setPassword(passwordVar);
        setPasswordVerify(false);
        if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar))
        {
            setPassword(passwordVar);
            setPasswordVerify(true);

        }
    }

    function handlePhone(e){
        // console.log(e.nativeEvent.text);
        const phoneVar=e.nativeEvent.text;
        setPhone(phoneVar);
        setPhoneVerify(false);
        if(/[6-9]{1}[0-9]{9}/.test(phoneVar))
        {
            setPhone(phoneVar);
            setPhoneVerify(true)
        }
    }

    userRegister = () =>{
        //alert('ok');
        const {email} = this.state;
        const {password} = this.state;
        const {phone} = this.state;

        fetch('server link', {

        })
    }

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
                    onChange={e => handleEmail(e)}
                    // onChangeText = {email => this.setState({email})}
                />
                {email.length < 1?null : emailVerify?(<Text style={styles.verify1} > Valid Email</Text>)
                : (<Text  style={styles.verify2}  >Invalid Email</Text>)}
            </View>

            <View style={styles.loginPassword}>
                <Text style={styles.loginEmailHead}>Password</Text>
                <TextInput 
                    secureTextEntry={true} 
                    style={styles.loginEmailInput}
                    placeholder="Enter Password"
                    onChange={e => handlePassword(e)}
                    // onChangeText = {password => this.setState({password})}
                />
                {password.length < 1?null : passwordVerify?(<Text style={styles.verify1} > Valid Password</Text>)
                : (<Text  style={styles.verify2}  >Invalid Name</Text>)}
            </View>

            <View style={styles.loginPhone}>
                <Text style={styles.loginEmailHead}>Phone Number</Text>
                <TextInput 
                    style={styles.loginEmailInput}
                    placeholder="Phone Number"
                    onChange={e => handlePhone(e)}
                    maxLength={11}
                    // onChangeText = {phone => this.setState({phone})}
                />
                {phone.length < 1?null : phoneVerify?(<Text style={styles.verify1} > Valid Phone Number</Text>)
                : (<Text  style={styles.verify2}  >Invalid Phone Number</Text>)}
            </View>

            <Pressable style={styles.loginButton}
                onPress={() => handleSubmit()}
                // onPress={() =>
                //     navigation.navigate('Login')
                // }
            > 
                <Text style={styles.loginButtonTxt}>Register</Text>
            </Pressable>

        </SafeAreaView>
    );
};

export default Register;

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
    verify1:{
        color: "green",
        fontSize: 15,
    },

    verify2:{
        color: "red",
        fontSize: 15,
    },
});

