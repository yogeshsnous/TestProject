import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, Dimensions, Button, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, ActivityIndicator } from "react-native"



type loginProps = {
    loginTitle?: string,
    imageUrl?: string,
}









const LoginScreen = ({ navigation }) => {


    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [loading, setLoading] = useState(true)

    const [isTextVisible, setTextVisible] = useState(true)


    useEffect(() => {
        checkUserLoggedIn();

    }, [])

    const checkUserLoggedIn = async () => {
        const result = await AsyncStorage.getItem("USER_TOKEN");
        const userData = await AsyncStorage.getItem("USER");
        const userData2 = await AsyncStorage.getItem("USER_TWO");
        const value = AsyncStorage.flushGetRequests()

        console.log(userData);
        console.log(userData2);
        if (result && result !== null) {
            navigation.navigate("Home");
        }
        setLoading(false);
    }



    const onLoginPress = async () => {
        const userData = {
            email: userName,
            password: password
        }


        const res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

        const output = await res.json();

        if (output.token) {
            await AsyncStorage.setItem("USER_TOKEN", output.token);
            navigation.navigate("Home");
        } else {
            Alert.alert("Error", output.error);
        }

        console.log(output);



    }

    const patchAPI = async (data: any) => {
        const res = await fetch("https://reqres.in/api/users/2", {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

        const output = await res.json();

        console.log("PATCH OUTPUT", output);

    }




    //https://reqres.in/api/users/{userID}

    const putAPI = async (data: any) => {
        const res = await fetch("https://reqres.in/api/users/2", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

        const output = await res.json();

        console.log("PUT OUTPUT", output);

    }

    const deleteAPI = async () => {
        const res = await fetch(`/api/users/2`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

        const output = await res.json();

        console.log("DELETE OUTPUT", output);

    }


    if (loading) {
        return <View style={{ flex: 1 }}><ActivityIndicator /></View>
    } else {
        return (<View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>

                <View style={{ width: '100%', backgroundColor: '#DEDEDE', alignItems: 'center' }}>
                    <KeyboardAvoidingView
                        keyboardVerticalOffset={100}
                        style={{ flex: 1, width: '100%', backgroundColor: '#DEDEDE', alignItems: 'center' }}
                    >
                        <Image
                            style={styles.logo}
                            source={require("./circle.png")}
                            resizeMode='center'
                        />

                        <Text style={styles.welcomeText}>upTime</Text>

                        <Text style={styles.description}>
                            {"Welcome"}
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
                                style={{ height: 50, width: 50 }}
                                source={require("./circle.png")}
                                resizeMode='center' />

                            <Text style={{ fontSize: 20 }}>
                                CLICK TO LOGIN
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonView}
                            onPress={() => { navigation.navigate("SignUp") }}
                        >
                            <Image
                                style={{ height: 50, width: 50 }}
                                source={require("./circle.png")}
                                resizeMode='center' />

                            <Text style={{ fontSize: 14 }}>
                                Don't Have an Account?, Click Here!
                            </Text>

                        </TouchableOpacity>


                    </KeyboardAvoidingView>

                </View>



            </ScrollView>
        </View>)

    }



}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    buttonView: {
        marginVertical: 25,
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