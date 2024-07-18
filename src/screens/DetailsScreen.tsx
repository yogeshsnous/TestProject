import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Image, ScrollView, Linking, StyleSheet, Text, View, TouchableOpacity, BackHandler, Alert } from 'react-native'
import { listData } from './HomeScreen';
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";




type detailsProps = {
    route: any
    navigation?: any,

}

type user = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}


const DetailsScreen = (props: detailsProps) => {

    const actionSheetRef = useRef<ActionSheetRef>(null);

    const [loading, setLoading] = useState(false)
    const [users, setUser] = useState([])

    const data: any = {
        firstName: "Michael",
        lastName: "Jphn"
    }

    const backPressed = () => {

    
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
            {
              
            },
            {text: 'YES', onPress: () => props.navigation.pop()},
          ]);
        return true;
    }


    useEffect(() => {
        const back = BackHandler.addEventListener('hardwareBackPress', backPressed)
        console.log()


        return () => back.remove()

    }, [])

    useEffect(() => {
        fetchUserList()

    }, [])

    const fetchUserList = async () => {
        setLoading(true);



        try {
            const res = await fetch("https://reqres.in/api/users?page=2", { method: "GET" })
            const responseJson = await res.json();
            setUser(responseJson.data)



        } catch {


        } finally {
            setLoading(false)
        }


    }

    const openURL = async () => {
       Linking.openSettings();
        //Linking.openURL("revolvemarket://open?link_click_id=link-1292144151051241678")
        //}

        // Linking.openURL("mailto: support@expo.io")
    }




    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActionSheet ref={actionSheetRef}>
                <Text>Hi, I am here.</Text>

                <Text>Hi, I am here.</Text>
                <Text>Hi, I am here.</Text>

                <Text>Hi, I am here.</Text>
                <Text>Hi, I am here.</Text>
                <Text>Hi, I am here.</Text>
            </ActionSheet>


            <TouchableOpacity onPress={() => openURL()}>
                <Text style={{ color: 'blue' }}>Open Amazon</Text>
            </TouchableOpacity>


        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DEDEDE',
        flex: 1,
    }
})

export default DetailsScreen;


