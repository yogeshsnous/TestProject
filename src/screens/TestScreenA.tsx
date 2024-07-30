import React, { useState } from "react"
import { View, TouchableOpacity, Image, Text } from "react-native"
import { getData } from "../api/Api"



type testScreenA = {
    navigation?: any,
    AppName: string,
}

const TestScreenA = (props: testScreenA) =>  {

    const onClickNaviagteTestB = async () => {

        const response = await getData("users");
        if (response.data.length > 0) {
            props.navigation.push("Share")
        }
    }

    

    return(
        <View style={{flex: 1, width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
            <Image testID="logoImage" style={{margin: 25, width: 100, height: 100}} source={require("./circle.png")}/>

            <Text accessibilityLabel="App UI" style={{margin: 10}}> Sample App UI</Text>
            <Text testID="description" accessibilityLabel="description" style={{margin: 10}}>App Description</Text>
            <Text testID="appName" style={{margin: 10}}>{props.AppName}</Text>
            
            <TouchableOpacity
            testID="NavigateTestB"
            style={{margin: 20, height: 50, borderRadius: 25, width: 220, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}
            onPress={() => onClickNaviagteTestB()}
            >
                <Text style={{color: 'white'}}>Naviagte to Test B</Text>
            </TouchableOpacity>
        </View>
    )

}
export default TestScreenA;