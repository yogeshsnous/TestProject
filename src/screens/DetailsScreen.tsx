import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Button, FlatList, Image, ScrollView, SectionList, StyleSheet, Text, View} from 'react-native'
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




    return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       

        {loading ? <ActivityIndicator size={"large"} color={"red"}/> : 
        <FlatList 
        data={users}
        renderItem={({item}) => <Text style={{fontSize: 14, margin: 10}}>{item.first_name}</Text>}
        />}
        
        
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


   