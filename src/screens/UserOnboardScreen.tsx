import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';




type userOnboardProps = {
    route: any
    navigation?: any,

}

const UserOnboardScreen = (props: userOnboardProps) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [dob, setDoB] = useState("")
    const [pan, setPan] = useState("")
    const [restricted, setRestricted] = useState(false)

    const [disableSwitch, setDisableSwitch] = useState(true);

    const [lang, setLang] = useState()

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
        onValueChange={(itemValue, itemIndex) =>{
            setLang(itemValue)
            console.log("value changed")
        }
        }
        style={{width: 250, height: 50, marginTop: 20}}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Typescript" value="ts" />
        </Picker>

       
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