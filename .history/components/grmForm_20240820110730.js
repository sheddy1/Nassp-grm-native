import React from 'react';

import { Text, TextInput, Pressable, Button, StyleSheet, View, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'; 

const GrmForm = ({ navigation }) => {
    return(
        <SafeAreaView >
            <Text style={styles.header}>Grievance center</Text>
            <View style={styles.headerView}>
                <View style={styles.headerViewForm}>
                    <Text style={styles.headerViewFormTxt}>GRM FORM</Text>
                </View>
                <Pressable
                    onPress={ () =>  
                        navigation.navigate('SavedForm')
                    }
                >
                    <Text style={styles.headerViewSavedTxt}>SAVED FORM</Text>
                </Pressable>
                <Pressable
                    onPress={ () =>  
                        navigation.navigate('Account')
                    }
                >
                    <Text style={styles.headerViewAccountTxt}>ACCOUNT</Text>     
                </Pressable>          
            </View>

            <Pressable style={styles.nsr}
                    onPress={ () =>  
                        navigation.navigate('GrievanceRegister')
                    }
                > 
                    <Text style={styles.grievanceTxt}>Register a Grieviance</Text>
                </Pressable>

                <Pressable style={styles.nsr1}
                    onPress={ () => 
                        navigation.navigate('NsrRegister')
                    }
                > 
                    <Text style={styles.grievanceTxt}>Register NSR Data</Text>
                </Pressable>

                <Image source={require('./images/logo1.png')}  style={styles.logo}/>
        </SafeAreaView>
    );
};

export default GrmForm;

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
        top:7,
        left:10
    },

    headerViewFormTxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 13
    },

    headerViewSavedTxt: {
        color: 'white',
        fontSize: 13,
        left: 150,
        top:-13
    },

    headerViewAccountTxt: {
        color: 'white',
        fontSize: 13,
        left: 270,
        top:-30
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
        top:130,
        left: 20,
        borderRadius: 5,
        zIndex: 1
    },
    nsr1: {
        width:320,
        height: 50,
        backgroundColor: '#052600',
        top:180,
        left: 20,
        borderRadius: 5,
        zIndex: 1
    },
});