import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker';




type userOnboardProps = {
    route: any
    navigation?: any,

}

const UserOnboardScreen = (props: userOnboardProps) => {

    const pickerRef = useRef<Picker<string>>(null)

    
    const [dob, setDoB] = useState(new Date())

    const [isDateShown, setIsDateShown] = useState(false)
    
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

        <DatePicker
        modal
        theme='dark'
        open={isDateShown}
        date={dob}
        mode='datetime'
        onConfirm={(date) => {
            setDoB(date)
            setIsDateShown(false)
            Alert.alert("Success")
        }}
        onCancel={() => {
            Alert.alert("Cancelled")
          }}
        buttonColor='red'

        />

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

        <Text style={{margin: 5, fontSize: 20}}>{dob.toDateString()}</Text>

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
        <Button title='Select DOB' onPress={() =>setIsDateShown(true)}/>

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