import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, Dimensions, Button, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from "react-native"



type signupProps = {
    navigation?: any
}





const SignUpScreen = (props: signupProps) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");


    //https://dev-api.medugo.com/personProfile
    //Method: Post

    /*
    {
        "hlogPersonId": 0,
        "appPersonId": "string",
        "firstName": "string",
        "lastName": "string",
        "gender": "string",
        "height": "string",
        "weight": "string",
        "dob": "string",
        "emailId": "string",
        "personType": "string",
        "relationship": "string",
        "deviceId": "string",
        "personPictureBase64String": "string",
        "pictureFileName": "string",
        "hlogDeviceRegistrationId": 0,
        "emergencyContactFirstName": "string",
        "emergencyContactLastName": "string",
        "emergencyContactRelationship": "string",
        "emergencyContactPhoneNumber": "string",
        "isDeleted": true,
        "createdDate": "2024-06-25T03:40:07.066Z",
        "modifiedDate": "2024-06-25T03:40:07.066Z",
        "termsAndCondition": true,
        "bloodGroup": "string"
      }

*/

    const signUpAction = async () => {
        const personData = {
            hlogPersonId: 944,
            appPersonId: "537P1719255375593",
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            height: "5.5",
            weight: "70",
            dob: "05/09/1994",
            emailId: email,
            personType: "PR",
            relationship: "SL",
            deviceId: "f21371b2b7a5b809",
            personPictureBase64String: null,
            pictureFileName: null,
            hlogDeviceRegistrationId: 537,
            emergencyContactFirstName: null,
            emergencyContactLastName: null,
            emergencyContactRelationship: null,
            emergencyContactPhoneNumber: null,
            isDeleted: true,
            createdDate: "2024-06-25T03:40:07.066Z",
            modifiedDate: "2024-06-25T03:40:07.066Z",
            termsAndCondition: true,
            bloodGroup: "B+"
        }

        //await AsyncStorage.setItem('USER_INFO', JSON.stringify(personData));

        //   console.log("REQUEST: ", personData);

        //   const res = await fetch('https://dev-api.medugo.com/personProfile', {
        //     "method": 'POST',
        //     "body":  JSON.stringify(personData),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'x-sessiontoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJHVUlEIjoiQTlmT3BhMjZlSFJhZjJsR3RuL2lLMDhMOW9PaWRmaW9ONFBHQ1F0dSt6WWI4aG5YbVV0OGxvSWFmcWY4UFpLNU80RVp1Wjd3aE9BR0x6RjExNkhlc2c9PSIsIk1vYmlsZU5vIjoiNzA4MTI1ODgwOSIsIkNvdW50cnlDb2RlIjoiOTEiLCJEZXZpY2VJZCI6ImYyMTM3MWIyYjdhNWI4MDkiLCJDcmVhdGVkT24iOiIwNi8yNC8yMDI0IDE4OjU0OjMzIiwibmJmIjoxNzE5MjU1MjczLCJleHAiOjE3MTkyNTg4NzMsImlhdCI6MTcxOTI1NTI3MywiaXNzIjoibWVkdWdvLmNvbSIsImF1ZCI6IiouKiJ9.Gnt8P8074HgRJcqfAmgdhvEmFKaKlC5XfY54FZ3HBTU',
        //     },
        //    });

        //    const jsonOutput = await res.json();
        //    console.log("PERSON OUTPUT: ", jsonOutput)
        //    if(jsonOutput.errorMessage) {
        //     Alert.alert("Failed", jsonOutput.errorMessage)
        //    } else {
        //     Alert.alert("SUCCESS!!!")
        //    }

        const personData1 = {
            hlogPersonId: 944,
            appPersonId: "537P1719255375593",
            firstName: "John",
            lastName: "Smith",
        }
        const personData2 = {
            lastName: "SmithOne",
            gender: 'Male',
            height: "5.5",
        }

        await AsyncStorage.setItem('USER', JSON.stringify(personData1));
        await AsyncStorage.setItem('USER_TWO', JSON.stringify(personData2));


    }


    return (
        <View style={{ flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: "#DEDEDE" }}>
            <TextInput
                style={styles.textInput}
                onChangeText={setFirstName}
                placeholder='Enter First Name'
                placeholderTextColor="black"
                keyboardType='default'
            />

            <TextInput
                style={styles.textInput}
                onChangeText={setLastName}
                placeholder='Enter Last Name'
                placeholderTextColor="black"
                keyboardType='default'
            />

            <TextInput
                style={styles.textInput}
                onChangeText={setGender}
                placeholder='Enter Gender'
                placeholderTextColor="black"
                keyboardType='default'
            />

            <TextInput
                style={styles.textInput}
                onChangeText={setEmail}
                placeholder='Enter Email Id'
                placeholderTextColor="black"
                keyboardType='default'
            />

            <TouchableOpacity style={{ marginTop: 25 }} onPress={() => props.navigation.navigate('Web')}>
                <Text style={{ color: 'blue', fontSize: 14 }}>Terms and Conditions</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonView}
                onPress={signUpAction}
            >
                <Image
                    style={{ height: 50, width: 50 }}
                    source={require("./circle.png")}
                    resizeMode='center' />

                <Text style={{ fontSize: 20 }}>
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