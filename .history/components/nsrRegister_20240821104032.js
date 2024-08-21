import React from 'react';

import { Text, TextInput, Pressable, Button, StyleSheet, View, Image, ScrollView, TextArea } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Dropdown } from 'react-native-element-dropdown';
import Textarea from 'react-native-textarea';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { ScrollView } from 'react-native-gesture-handler';

const NsrRegister = ({ navigation }) => {

    //creating drop down for state
    const [selectedValue, setSelectedValue] = useState(null);

    const placeholder = {
        label: 'State',
        value: null,
      };
    
      const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ];

    return(
        <SafeAreaView >
            <Text style={styles.header}>Grievance Center</Text>
                <View style={styles.headerBox}>
                    <Pressable style={styles.Back1}
                    onPress={() =>
                        navigation.navigate('GrmForm')
                    }
                    >
                        <Image source={require('./images/back1.png')}  style={styles.Back2}/>
                    </Pressable>
                    <Text style={styles.headerBoxTxt}>NSR REGISTRATION FORM</Text>
                </View>

                <Text style={styles.headerBoxPreTxt}>Kindly Provide All Details Before Submitting</Text>
            
        </SafeAreaView>
    )
}

export  default NsrRegister;

const styles = StyleSheet.create({
    header: {
        fontSize: 23,
        textAlign: 'center',
        fontWeight: '700',
    },

    Back2: {
        top: 0,
        left: 0,
        width: 15,
        height: 15,
    },
    Back1:{
        width: 15,
        height: 15,
        top: 9,
        left: 10,
        // backgroundColor: 'red',
    },
    headerBox:{
        height: 35,
        top:7,
        backgroundColor: "#052600",
    },

    headerBoxTxt:{
        color:'white',
        top: -10,
        left: 100
    },

    headerBoxPreTxt: {
        color: '#052600',
        top: 10,
        left: 40
    },

    ScrollView: {
        // backgroundColor: 'red',
        top: 20,
        height: 620,
        paddingVertical: 0

    },

    State: {
        top: 18,
        height: 60,
        backgroundColor: 'blue',
        backgroundColor: 'rgba(52, 52, 52, alpha)',
        overflow: 'auto'
    },

    StateTxt: {
        color: "#052600",
        fontSize: 13,
        top: 8,
        left: 15,
        fontWeight: '700'
    },

    StateSelect: {
        borderBlockColor: '#052600',
        // backgroundColor: 'green',
        borderWidth: 1,
        color: 'white',
        width: 230,
        left: 110,
        top: -25,
        height: 40,
        fontSize: 10
    },

    dropdown: {
        borderBlockColor: '#052600',
        borderWidth: 1,
        color: 'white',
        width: 180,
        left: 160,
        top: -25,
        height: 40,
        fontSize: 10.,
      },

    lga: {
        top: 20,
        height: 60,
        // backgroundColor: 'blue',
    },

    lga1: {
        top: 20,
        height: 100,
        // backgroundColor: 'blue',
    },

    lga2: {
        top: 40,
        height: 120,
        // backgroundColor: 'blue',
    },


    dropdownText:{
        borderWidth: 1,
        color: 'white',
        width: 180,
        left: 160,
        top: -25,
        height: 40,
        fontSize: 15.,
    },

    dropdownTextArea:{
        borderWidth: 1,
        color: 'white',
        width: 180,
        left: 160,
        top: -25,
        height: 90,
        fontSize: 15.,
    },

    SubmitButton: {
        width: 330,
        height: 40,
        backgroundColor: "#052600",
        top: 20,
        left: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },

    submit1: {
        color: 'white',
        fontStyle: 'bold',
        
    }

    // ward: {
    //     top: 10,
    //     height: 40,
    //     // backgroundColor: 'blue',
    // },
});