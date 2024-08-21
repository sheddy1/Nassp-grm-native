import React from 'react';

import { Text, TextInput, Pressable, Button, StyleSheet, View, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'; 

const Account = ({ navigation }) => {
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
        top: -60,
        left: 150
    },

    MaleIcon: {

        top: 100,
        width: 80,
        height: 80,
        left: 135
    },

    BodyName: {
        fontWeight: "bold",
        fontSize: 20,
        left: 110,
        top: 90
    },

    BodyEmail: {
        fontSize: 20,
        left: 70,
        top: 90
    },

    BodyTitle: {
        fontSize: 20,
        left: 60,
        top: 90,
    },

    BodyHeaderView: {
        height: 5,
        width: 250,
        backgroundColor: "#052600",
        borderRadius: 4,
        left: 30,
        top: 90,
    }
});