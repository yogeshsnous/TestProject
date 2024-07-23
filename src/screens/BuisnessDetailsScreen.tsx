import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text,TextInput, View } from 'react-native';
import axios from 'axios';
import { getData, postData } from '../api/Api';



type buisnessDetailsScreenProps = {
    route: any
    navigation?: any,

}




const BuisnessDetailsScreen = (props: buisnessDetailsScreenProps) => {

    const [data, setData] = useState([])

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchAll = () => {
        const calls = [
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/posts')
        ]
        Promise.all(calls)
        .then((result) => {
            console.log(result[0]?.data, result[1].data);
            setData(result[0].data)
        })
        .catch((err) => {
            console.log(err);
        });

    }

    const fetchUser = async () => {
        const url = "users"
            const result = await getData(url);
            setData(result.data);
    }

    const fetchPost = async () => {
        const bodyData = {
            title: title,
            body: body,
            userId: 1,
        }


        console.log(bodyData)
        try {
            const res = await postData('posts', bodyData);
            console.log(res);
            if(res.data?.id) {
                Alert.alert("Success!!", res.data?.id.toString() )
            } else {
                Alert.alert("Unable to save the post")
            }
           
        } catch (err) {
            console.log(err);
        }

        
    }


    const renderItem = (item: any) => {
        return(
            <View style={{width: '90%', margin: 10, borderRadius: 5, borderWidth: 1}}>
                <View style={{width: '100%'}}>
                    <Text style={{margin: 5}}>{"Name: "+item.name}</Text>
                    <Text style={{margin: 5}}>{"Username: "+item.username}</Text>
                    <Text style={{margin: 5}}>{"Email Address: "+item.email}</Text>
                </View>
                <View style={{width: '100%', marginTop: 10}}>
                    <Text style={{margin: 5}}>{"Address: "+ item.address.street + ", " + item.address.suit + ", " + item.address.city +  ", " + item.address.zipcode}</Text>
                    <Text style={{margin: 5}}>{"Location: "+ item?.address?.geo?.lat + ", " + item?.address?.geo?.lng}</Text>
                </View>
                <View style={{width: '100%', marginTop: 10}}>
                    <Text style={{margin: 5}}>{"Name: "+ item.company.name}</Text>
                     <Text style={{margin: 5}}>{item?.company.catchPhrase}</Text>

                </View>

            </View>
        )

    }
  

    return(
        <View style={styles.container}>
            <TextInput style={{width: 220, height: 50, borderWidth: 1, margin: 2}} onChangeText={setTitle}/>
            <TextInput style={{width: 220, height: 50, borderWidth: 1, margin: 2}} onChangeText={setBody}/>
            <Button title="POST Data" onPress={() => fetchPost()}/>

            <FlatList
            data={data}
            renderItem={({ item }) => renderItem(item)}
            style={{marginTop: 15,  width: '100%' }}
            />
            

        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        alignItems: 'center',
    }
})

export default BuisnessDetailsScreen;


