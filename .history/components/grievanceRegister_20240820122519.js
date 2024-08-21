import React from 'react';

import { Text, TextInput, Pressable, Button, StyleSheet, View, Image, ScrollView, TextArea } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Dropdown } from 'react-native-element-dropdown';
import Textarea from 'react-native-textarea';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { ScrollView } from 'react-native-gesture-handler';

const GrievanceRegister = ({ navigation }) => {

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
                    <Text style={styles.headerBoxTxt}>GRIEVANCE REGISTRATION FORM</Text>
                </View>

                <Text style={styles.headerBoxPreTxt}>Kindly Provide All Details Before Submitting</Text>
                <View style={styles.view12}>
                    <ScrollView  style={styles.ScrollView}>
                        <View style={styles.State}>
                            <Text style={styles.StateTxt}>State</Text>
                            <Dropdown
                                style={styles.dropdown}
                                data={options}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="State"
                                value={selectedValue}
                                onChange={item => {
                                setSelectedValue(item.value);
                                }}
                            />
                        </View>

                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>LGA</Text>

                            <Dropdown
                                style={styles. dropdown}
                                data={options}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="LGA"
                                value={selectedValue}
                                onChange={item => {
                                setSelectedValue(item.value);
                                }}
                            />
                            
                        </View>

                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>WARD</Text>

                            <Dropdown
                                style={styles. dropdown}
                                data={options}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="WARD"
                                value={selectedValue}
                                onChange={item => {
                                setSelectedValue(item.value);
                                }}
                            />
                            
                        </View>

                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>COMMUNITY</Text>

                            <Dropdown
                                style={styles. dropdown}
                                data={options}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="LGA"
                                value={selectedValue}
                                onChange={item => {
                                setSelectedValue(item.value);
                                }}
                            />
                            
                        </View>

                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>IS BENEFICIARY</Text>

                            <Dropdown
                                style={styles. dropdown}
                                data={options}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="BENEFICIARY"
                                value={selectedValue}
                                onChange={item => {
                                setSelectedValue(item.value);
                                }}
                            />
                            
                        </View>

                        {/* // complaint nsr number */}
                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>COMPLAINT NSR NO.</Text>

                            {/* <Dropdown
                                style={styles. dropdown}
                                data={options}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="LGA"
                                value={selectedValue}
                                onChange={item => {
                                setSelectedValue(item.value);
                                }} */}

                        <TextInput 
                            style={styles.dropdownText}
                            placeholder="NSR NUmber"
                        />
                            
                        </View>
                        
                        {/* complaint name */}
                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>COMPLAINT NAME</Text>

                            <TextInput 
                                style={styles.dropdownText}
                                placeholder="Full Name"
                            />
                        </View>

                        {/* complaint PHONE */}
                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>COMPLAINT PHONE</Text>

                            <TextInput 
                                style={styles.dropdownText}
                                placeholder="Phone Number"
                            />
                            
                        </View>

                        {/* GENDER */}
                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>GENDER</Text>

                            <Dropdown
                                style={styles. dropdown}
                                data={options}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="GENDER"
                                value={selectedValue}
                                onChange={item => {
                                setSelectedValue(item.value);
                                }}
                            />
                            
                        </View>
                        
                        {/* CATEGORY */}
                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>CATEGORY</Text>

                            <Dropdown
                                style={styles. dropdown}
                                data={options}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="CATEGORY"
                                value={selectedValue}
                                onChange={item => {
                                setSelectedValue(item.value);
                                }}
                            />
                            
                        </View>

                        {/* SUB CATEGORY */}
                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>SUB CATEGORY</Text>

                            <Dropdown
                                style={styles. dropdown}
                                data={options}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="SUB CATEGORY"
                                value={selectedValue}
                                onChange={item => {
                                setSelectedValue(item.value);
                                }}
                            />
                            
                        </View>
                        
                        {/* AGE */}
                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>AGE</Text>

                            <TextInput 
                                style={styles.dropdownText}
                                placeholder="AGE"
                            />
                            
                        </View>

                        {/* complaint MODE */}
                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>COMPLAINT MODE</Text>

                            <Dropdown
                                style={styles. dropdown}
                                data={options}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="COMPLAINT MODE"
                                value={selectedValue}
                                onChange={item => {
                                setSelectedValue(item.value);
                                }}
                            />
                            
                        </View>

                        {/* complaint EMAIL */}
                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>COMPLAINT EMAIL</Text>

                            <Dropdown
                                style={styles. dropdown}
                                data={options}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="EMAIL ADDRESS"
                                value={selectedValue}
                                onChange={item => {
                                setSelectedValue(item.value);
                                }}
                            />
                            
                        </View>

                        {/* RESOLVED */}
                        <View style={styles.lga}>
                            <Text style={styles.StateTxt}>RESOLVED?</Text>

                            <Dropdown
                                style={styles. dropdown}
                                data={options}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="YES OR NO"
                                value={selectedValue}
                                onChange={item => {
                                setSelectedValue(item.value);
                                }}
                            />
                            
                        </View>

                        {/* RESOLVED COMMENT */}
                        <View style={styles.lga1}>
                            <Text style={styles.StateTxt}>RESOLVED COMMENT</Text>

                            <Textarea
                                containerStyle={styles.dropdownTextArea}
                                // style={styles.textarea}
                                onChangeText={this.onChange}
                                // defaultValue={this.state.text}
                                maxLength={120}
                                placeholder={'How was it resolved'}
                                placeholderTextColor={'#c7c7c7'}
                                underlineColorAndroid={'transparent'}
                            />
                            
                        </View>

                        {/* DESCRIPTION OF PROBLEM */}
                        <View style={styles.lga2}>
                            <Text style={styles.StateTxt}>DESCRIPTION</Text>

                            <Textarea
                                containerStyle={styles.dropdownTextArea}
                                // style={styles.textarea}
                                onChangeText={this.onChange}
                                // defaultValue={this.state.text}
                                maxLength={120}
                                placeholder={'How was it resolved'}
                                placeholderTextColor={'#c7c7c7'}
                                underlineColorAndroid={'transparent'}
                            />
                            
                        </View>




                        <Pressable style={styles.SubmitButton}
                            onPress={ () =>  
                                navigation.navigate('Account')
                            }
                        >
                            <Text style={styles.submit1}>Submit</Text>     
                        </Pressable>

                        

                    </ScrollView>
                </View>
        </SafeAreaView>
    )
}

export  default GrievanceRegister;

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
        left: 70
    },

    headerBoxPreTxt: {
        color: '#052600',
        top: 10,
        left: 40
    },

    ScrollView: {
        
        
        height: 600,
    },

    view12: {
        paddingBottom: 30,
        // backgroundColor: "red",
        top: 20,
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
        
    },

    

    // ward: {
    //     top: 10,
    //     height: 40,
    //     // backgroundColor: 'blue',
    // },
});