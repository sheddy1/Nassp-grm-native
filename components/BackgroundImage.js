import React from 'react';

import {Text, View, Pressable, TextInput, Button, ImageBackground, Image, StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const BackgroundImg = () => {
    return(
        <View>
            
            <ImageBackground 
                source={
                    require('./images/background1.png')
                } 
                resizeMode="stretch"
                style={styles.img}> 
                <Image source={require('./images/logo1.png')}  style={styles.logo}/>
                <Image source={require('./images/logo_line.png')}  style={styles.logoLine}/>
                <Text style={styles.txt1}>NASSP-SU</Text>
                <Text style={styles.txt1}>GRIEVANCE</Text>
                <Text style={styles.txt1}>CENTRE</Text>
                <Text style={styles.txt1}>TOOLKIT</Text>
                {/* <Button style={styles.button1}>Hellow</Button> */}
                <Pressable style={styles.button1} >
                    <Text style={styles.text1}>Register</Text>
                </Pressable>
                <Pressable style={styles.button2} >
                    <Text style={styles.text2}>Login</Text>
                </Pressable>
            </ImageBackground> 
            
        </View>
    );
};

export default BackgroundImg;

const styles = StyleSheet.create({
    img: {
        height: 800,
        width: screenWidth,
    },
    
    logo: {
        top: 250,
        left: 70
    },
    logoLine: {
        top: 140,
        left: 170
    },
    txt1: {
        fontSize: 25,
        left: 180,
        top: 10,
        fontWeight : 'bold',
        color: 'white',
    },
    registerButton: {
        width: 50,
        height: 80,
    },
        button1: { 
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: 'white',
          width: 150,
          left: 20,
          top: 340,
        },

        text1: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: '#052600',
        },
        button2: { 
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: '#052600',
            width: 150,
            left: 190,
            top: 295,
          },
  
          text2: {
              fontSize: 16,
              lineHeight: 21,
              fontWeight: 'bold',
              letterSpacing: 0.25,
              color: 'white',
          },
});