import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, Dimensions, Button, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from "react-native"



type loginProps = {
    loginTitle?: string,
    imageUrl?: string,
}





const LoginScreen = (propsOne: loginProps) => {


    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [isTextVisible, setTextVisible] = useState(true)


    const onLoginPress = () => {
        if(userName.length < 6) {
            Alert.alert("Error", "Invalid UserName")
        } else if (password.length < 8) {
            Alert.alert("Error", "Invalid Password")
        } else {
            Alert.alert("Success", "Logged in to App!!")
        }
        
    }


    return (<View style={styles.container}>
        <ScrollView style={{width: '100%'}}>
        
            <View style={{width: '100%', backgroundColor: '#DEDEDE', alignItems: 'center'}}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={100}
                style={{flex: 1, width: '100%', backgroundColor: '#DEDEDE', alignItems: 'center'}}
             >
            <Image
                style={styles.logo}
                source={require("./circle.png")}
                resizeMode='center'
            />
            
            <Text style={styles.welcomeText}>upTime</Text>

            <Text style={styles.description}>
                    {propsOne.loginTitle}
            </Text>

            <TextInput 
                style={styles.textInput}
                onChangeText={setUserName}
                placeholder='Enter User Name'
                placeholderTextColor="black"
                keyboardType='default'
                
                />

                <TextInput 
                style={styles.textInput}
                onChangeText={setPassword}
                placeholder='Enter Password'
                placeholderTextColor="black"
                maxLength={10} 
                secureTextEntry={isTextVisible}
                keyboardType='numeric'
                />


                <TouchableOpacity 
                style={styles.buttonView}
                onPress={onLoginPress}
                >
                    <Image 
                    style={{height: 50, width: 50}}
                    source={require("./circle.png")}
                resizeMode='center'/>

                <Text style={{fontSize: 20}}>
                    CLICK TO LOGIN
                </Text>

                </TouchableOpacity>
                

                </KeyboardAvoidingView>

            </View>
       

       
        </ScrollView>
    </View>)

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

export default LoginScreen;