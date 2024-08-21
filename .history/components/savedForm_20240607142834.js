import React from 'react';

import { Text, TextInput, Pressable, Button, StyleSheet, View, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'; 

const SavedForm = ({ navigation }) => {
    return(
        <SafeAreaView >
            <Pressable
                onPress={ () =>  
                    navigation.navigate('GrmForm')
                }
            >
                <Text style={styles.header}>Grievance center</Text>
            </Pressable>
            <View style={styles.headerView}>
                <Text style={styles.headerViewFormTxt}>GRM FORM</Text>
                <View style={styles.headerViewForm}>
                    <Pressable
                        onPress={ () =>  
                            navigation.navigate('Saved Form')
                        }
                    >
                        <Text style={styles.headerViewSavedTxt}>SAVED FORM</Text>
                    </Pressable>
                </View>
                <Pressable
                    onPress={ () =>  
                        navigation.navigate('GrievanceRegister')
                    }
                >
                    <Text style={styles.headerViewAccountTxt}>ACCOUNT</Text>     
                </Pressable>          
            </View>

            <Image source={require('./images/logo1.png')}  style={styles.logo}/>

            <Text style={styles.headerViewBodyTxt1}>COMPLETED GRIEVANCE FORM</Text>
        </SafeAreaView>
    );
};

export default SavedForm;

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
        top: -10,
        borderRadius: 5,
        left:130
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
        top:100,
        left: 20,
        borderRadius: 5,
        zIndex: 1
    },

    headerViewBodyTxt1: {
        fontWeight: 'bold',
        top: -360,
        left: 50
    },
});