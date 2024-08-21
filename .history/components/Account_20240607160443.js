import React from 'react';

import { Text, TextInput, Pressable, Button, StyleSheet, View, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

const Account = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState(null);
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ];

    return(
        <SafeAreaView >
            <Text style={styles.header}>Grieviance Center</Text>
            
            <View style={styles.headerView}>
                <Pressable
                    onPress={ () =>  
                        navigation.navigate('GrmForm')
                    }
                >
                    <Text style={styles.headerViewFormTxt}>GRM Form</Text>
                </Pressable>
                
                
                <Pressable
                    onPress={ () =>  
                        navigation.navigate('SavedForm')
                    }
                    >
                    <Text style={styles.headerViewSavedTxt}>SAVED FORM</Text>
                </Pressable>
                
                <View style={styles.headerViewForm}>
                    <Pressable style={styles.SyncButton}
                        onPress={ () =>  
                            navigation.navigate('Account')
                        }
                    >
                        <Text style={styles.headerViewAccountTxt}>ACCOUNT</Text>     
                    </Pressable>   
                </View>       
            </View>

            <Image source={require('./images/man.png')}  style={styles.MaleIcon}/>


            <Text style={styles.headerViewBodyTxt1}>Profile</Text>

            <Text style={styles.BodyName}>Amber Daniel</Text>

            <Text style={styles.BodyEmail}>damba@nassp.gov.ng</Text>

            <Text style={styles.BodyTitle}>GRM Manager, NASSCO</Text>

            <View style={styles.BodyHeaderView}></View>

            <Pressable style={styles.BodyEdit}
                
            >
            <Text style={styles.BodyEditTxt}>Edit</Text>     
            </Pressable> 
            
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

            <View style={styles.Lga}>
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

            <View style={styles.Ward}>
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

            <Pressable style={styles.FetchData}>
                    <Text style={styles.FetchDatatxt}>Fetch Data</Text>     
            </Pressable>
            
        </SafeAreaView>
    );
};

export default Account;

const styles = StyleSheet.create({
    header: {
        fontSize: 23,
        textAlign: 'center',
        fontWeight: '700',
    },

    headerView: {
        height: 35,
        top:7,
        backgroundColor: "#599154",
    },

    headerViewForm: {
        width: 100,
        height: 20,
        backgroundColor: "#052600",
        top: -27,
        borderRadius: 5,
        left:250
    },

    headerViewFormTxt: {
        left: 30,
        top: 8,
        color: 'white',
        fontSize: 13
    },

    headerViewSavedTxt: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
        top: -9
    },

    headerViewAccountTxt: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
    },

    logo:{
       opacity: 0.1,
       width: 360,
       height: 400,
       top: 30,
    },

    grievance: {
        width:320,
        height: 50,
        backgroundColor: '#052600',
        top:250,
        left: 20,
        borderRadius: 5,
        zIndex: 1
    },

    grievanceTxt: {
        color: 'white',
        fontSize: 17,
        textAlign:'center',
        top: 12
    },

    nsr: {
        width:320,
        height: 50,
        backgroundColor: '#052600',
        top:100,
        left: 20,
        borderRadius: 5,
        zIndex: 1
    },

    headerViewBodyTxt1: {
        fontWeight: 'bold',
        fontSize: 17,
        top: -50,
        left: 150
    },

    MaleIcon: {

        top: 80,
        width: 70,
        height: 70,
        left: 135
    },

    BodyName: {
        fontWeight: "bold",
        fontSize: 17,
        left: 115,
        top: 63
    },

    BodyEmail: {
        fontSize: 16,
        left: 90,
        top: 60
    },

    BodyTitle: {
        fontSize: 16,
        left: 85,
        top: 60,
    },

    BodyHeaderView: {
        height: 3,
        width: 220,
        backgroundColor: "#052600",
        borderRadius: 4,
        left: 60,
        top: 65,
    },

    BodyEdit: {
        width: 55,
        height: 30,
        backgroundColor: "#052600",
        top: 75,
        left: 140
    },

    BodyEditTxt: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
        top: 5
    },

    StateTxt: {
        color: "#052600",
        fontSize: 13,
        top: 8,
        left: 15,
        fontWeight: '700'
    },

    dropdown: {
        borderBlockColor: '#052600',
        borderWidth: 1,
        color: 'white',
        width: 180,
        left: 90,
        top: -25,
        height: 40,
        fontSize: 10.,
      },

      State: {
        top: 110,
        height: 60,
        left: 30,
        backgroundColor: 'blue',
        backgroundColor: 'rgba(52, 52, 52, alpha)',
        overflow: 'auto'
    },

    Lga: {
        top: 110,
        height: 60,
        left: 30,
        backgroundColor: 'blue',
        backgroundColor: 'rgba(52, 52, 52, alpha)',
        overflow: 'auto'
    },

    Ward: {
        top: 110,
        height: 60,
        left: 30,
        backgroundColor: 'blue',
        backgroundColor: 'rgba(52, 52, 52, alpha)',
        overflow: 'auto'
    },

    FetchData: {
        width: 80,
        height: 40,
        backgroundColor: "#052600",
        top: 150
    }
});