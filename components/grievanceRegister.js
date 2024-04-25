import React from 'react';

import { Text, TextInput, Pressable, Button, StyleSheet, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Dropdown } from 'react-native-element-dropdown';
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
                        <Image source={require('./images/back.png')}  style={styles.Back2}/>
                    </Pressable>
                    <Text style={styles.headerBoxTxt}>GRIEVANCE REGISTRATION FORM</Text>
                </View>

                <Text style={styles.headerBoxPreTxt}>Kindly Provide All Details Before Submitting</Text>
            <ScrollView  style={styles.ScrollView}>
                <View style={styles.State}>
                    <Text style={styles.StateTxt}>State</Text>
                    <Dropdown
                        style={styles. dropdown}
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
            </ScrollView>
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
        top: 6,
        left: 5,
        backgroundColor: 'red',
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
        // backgroundColor: 'red',
        top: 20,
        height: 900,

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
        fontSize: 17,
        top: 8,
        left: 15,
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
        width: 230,
        left: 110,
        top: -25,
        height: 40,
        fontSize: 10.,
      },

    lga: {
        top: 20,
        height: 60,
        // backgroundColor: 'blue',
    },

    ward: {
        top: 10,
        height: 40,
        // backgroundColor: 'blue',
    },
});