import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Switch, Text, Dimensions, View, Platform } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker';
import CustomCheckbox from './CustomCheckbox';




type userOnboardProps = {
    route: any
    navigation?: any,

}

const UserOnboardScreen = (props: userOnboardProps) => {

    const pickerRef = useRef<Picker<string>>(null)


    const object = {
        list: [1,2,4],
        name: "Rajesh",
        details: {
            class: "12th",
            school: "ABC"
        }
    }

    const secondObject = {
        grade: "A",
        ...object
    }

    const a = [1,2,3]
    const b = [4,6,...a]

    console.log("Result", secondObject);


    



    const windowHeight = Dimensions.get('screen').height
    const windowWidth = Dimensions.get('screen').width
    const windowScale = Dimensions.get('screen').scale
    const windowFontScale = Dimensions.get('screen').fontScale

    const screenSize = Dimensions.get('screen');

    console.log(windowHeight, windowWidth, "Window Size");



    
    const [dob, setDoB] = useState(new Date())

    const [isDateShown, setIsDateShown] = useState(false)
    
    const [restricted, setRestricted] = useState(false)

    const [disableSwitch, setDisableSwitch] = useState(true);

    const [lang, setLang] = useState<string>("")

    const [termsAndConditions, setTermsAndConditions] = useState(false)
    const [privacyPolicy, setPrivacyPolicy] = useState(false)
    const [both, setBoth] = useState(false)


    useEffect(() => {
        Dimensions.addEventListener('change', (e) => {
            const { width, height } = e.screen;
            console.log("Changed", width, height)
          })

    },[])


    const validate = () => {
        setDisableSwitch(false)
    
    }

    const resArray = [
        "Accept Terms and Conditions",
        "Accept Privacy Policy",
        "Accept Both",
    ]

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

        <View style={{marginVertical: 50}}>
            {
                resArray.map((value) => <CustomCheckbox text={value} trueColor='green'falseColor='red'/>)            }
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


       <View style={style.platformView}>
          
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
    },
    smapleView: {
        backgroundColor: 'green',
        width: 200,
        height: 100,
        marginTop: 20,
    },
    platformView: Platform.select(
        {
        android: {
            backgroundColor: 'green',
        },
        ios: {
            backgroundColor: 'red',
        },
        default: {
            backgroundColor: 'gray',
        }}
    )
})

export default UserOnboardScreen;