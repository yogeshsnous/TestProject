import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Button, FlatList, Image, ScrollView, Linking, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { listData } from './HomeScreen';




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

    const [loading, setLoading] = useState(false)
    const [users, setUser] = useState([])

    const data: any = {
        firstName: "Michael",
        lastName: "Jphn"
    }

    useEffect(() => {
        fetchUserList()

    }, [])

    const fetchUserList = async () => {
        setLoading(true);
    


        try{
            const res = await fetch("https://reqres.in/api/users?page=2", {method: "GET"})
            const responseJson = await res.json();
            setUser(responseJson.data)

            

        } catch {
           

        } finally {
            setLoading(false)
        }
       
       
    }

    const openURL = async () => {
          const res = await Linking.canOpenURL("sms: 9999999999");
           console.log(res, "RESULT");
        //if(res) {
        //Linking.openURL("revolvemarket://open?link_click_id=link-1292144151051241678")
        //}

       // Linking.openURL("mailto: support@expo.io")
    }




    return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       

        <TouchableOpacity onPress={() => openURL()}>
            <Text style={{color: 'blue'}}>Open Amazon</Text>
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


   