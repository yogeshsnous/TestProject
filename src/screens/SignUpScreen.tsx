import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, Dimensions, Button, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from "react-native"



type signupProps = {
   navigation?: any
}





const SignUpScreen = (props: signupProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const signUpAction = () => {

    }


    return (
        <View style={{flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: "#DEDEDE"}}>
            <TextInput 
                style={styles.textInput}
                onChangeText={setName}
                placeholder='Enter Name'
                placeholderTextColor="black"
                keyboardType='default'  
            />

            <TextInput 
                style={styles.textInput}
                onChangeText={setEmail}
                placeholder='Enter Email Address'
                placeholderTextColor="black"
                keyboardType='default'  
            />

            <TextInput 
                style={styles.textInput}
                onChangeText={setPassword}
                placeholder='Enter Password'
                placeholderTextColor="black"
                keyboardType='default'  
                secureTextEntry={true}
            />

            <TextInput 
                style={styles.textInput}
                onChangeText={setConfirmPassword}
                placeholder='Confirm Password'
                placeholderTextColor="black"
                keyboardType='default'
                secureTextEntry={true}
            />

            <TouchableOpacity 
                style={styles.buttonView}
                onPress={signUpAction}
                >
                    <Image 
                    style={{height: 50, width: 50}}
                    source={require("./circle.png")}
                resizeMode='center'/>

                <Text style={{fontSize: 20}}>
                    Sign Up
                </Text>

                </TouchableOpacity>

        </View>

    )


}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',  
    },
    buttonView: {
        marginVertical: 50,
        width: '80%',
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ADD8E6',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: 10,
    },
    welcomeText: {
        fontSize: 70,
        fontWeight: '900',
        marginTop: 50
    },
    description: {
        fontSize: 26,
        fontWeight: '300',
        marginTop: 20,
        marginBottom: 20,
    },
    textInput: {
        width: '70%',
        height: 60,
        marginVertical: 20,
        backgroundColor: 'white',
        borderRadius: 8,
    }
})

export default SignUpScreen;