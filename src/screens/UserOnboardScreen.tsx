import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';




type userOnboardProps = {
    route: any
    navigation?: any,

}

const UserOnboardScreen = (props: userOnboardProps) => {

    const pickerRef = useRef<Picker<string>>(null)

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [dob, setDoB] = useState("")
    const [pan, setPan] = useState("")
    const [restricted, setRestricted] = useState(false)

    const [disableSwitch, setDisableSwitch] = useState(true);

    const [lang, setLang] = useState<string>("")

    const [termsAndConditions, setTermsAndConditions] = useState(false)
    const [privacyPolicy, setPrivacyPolicy] = useState(false)
    const [both, setBoth] = useState(false)


    const validate = () => {
        setDisableSwitch(false)
    
    }

    return (
    <View style={style.container}>
        <TextInput style={style.textInput} placeholder={"Name"} value={name} onChangeText={(value) => {
            setName(value)
            }}/> 

        <TextInput style={style.textInput} placeholder={"Age"} value={age} onChangeText={setName}/>
        
        {<TextInput style={style.textInput} placeholder={"DOB"} value={dob} onChangeText={setName}/> }
        {<TextInput style={style.textInput} placeholder={"PAN"} value={pan} 
         onChangeText={(value) => {
            if(value.length > 0) {
                setDisableSwitch(false)
            } else {
                setDisableSwitch(true)
            }
            console.log("text chnaged")
            setName(value)
            }}
            />
            }

       
        <Picker
        selectedValue={lang}

        ref={pickerRef}
        onValueChange={(itemValue, itemIndex) =>{
            setLang(itemValue)
            if(itemIndex > 0) {
                props.navigation.navigate("Home")
            }
        }
        }
        style={{width: 250, height: 50, marginTop: 20}}>
            <Picker.Item label="Select Value" value="Please Select" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Typescript" value="ts" />
        </Picker>

        <View style={style.switchView}>
            <Text>Accept Terms and Conditions</Text>
            <CheckBox 
            value={termsAndConditions}
            onValueChange={setTermsAndConditions}
            />
        </View>

        <View style={style.switchView}>
            <Text>Accept Privacy Policy</Text>
            <CheckBox 
            tintColors={{
                true: "green",
                false: "red"
            }
            }
            value={privacyPolicy}
            onValueChange={setPrivacyPolicy}
            />
        </View>

        <View style={style.switchView}>
            <Text>Accept Both</Text>
            <CheckBox 
            value={ termsAndConditions && privacyPolicy ? true : false} 
            onValueChange={() => {
                
                setTermsAndConditions(!both);
                setPrivacyPolicy(!both);
                setBoth(!both)

            }}
            />
        </View>

       
        <View style={style.switchView}>
            <Text>Resticted Information Only</Text>
            <Switch 
                trackColor={{false: 'red', true: 'blue'}}
                thumbColor={restricted ? '#000000' : '#ffffff'}
                ios_backgroundColor="#3e3e3e"
                value={restricted}
                onValueChange={(value) => setRestricted(value)}
                disabled={disableSwitch}
            />
        </View>
        <Button title='close Dropdown' onPress={() => pickerRef.current?.focus()}/>

    </View>)
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textInput: {
        marginTop: 20,
        borderWidth: 1,
        width: 250,
        height: 50,
    },
    switchView: {
        flexDirection: 'row',
        width: 250,
        justifyContent: 'space-between',
        marginTop: 20,
    }
})

export default UserOnboardScreen;