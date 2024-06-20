import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Button, FlatList, Image, ScrollView, SectionList, StyleSheet, Text, View} from 'react-native'
import { listData } from './HomeScreen';




type detailsProps = {
    route: any
    navigation?: any,
    
}




const DetailsScreen = (props: detailsProps) => {

    const [loading, setLoading] = useState(true)

    const data = [
        {day: "Monday", data: ["50Rs", "120Rs", "30Rs", "100Rs"]},

        {day: "Wednesday", data: ["150Rs", "220Rs", "20Rs"]},
        {day: "Tuesday", data: ["30Rs", "40Rs", "50Rs"]},
    ]

    useEffect(() => {
        fetchAPI()
    }, [])

    const fetchAPI =  async () => {

       

        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(

      )
      .then(json => console.log(json))

      console.log()
       
    }



    return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <SectionList 
        sections={data}
        keyExtractor={(item, index) => item+index}
        renderSectionHeader={({section: {day}}) => (
            <Text style={{height: 50, width: 200, fontSize: 22 }}>{day}</Text>
        )}
        renderItem={({item}) => (
            <Text style={{height: 50, width: 200, fontSize: 15 }}>{item}</Text>
        )}
        /> */}

        {loading ? <ActivityIndicator size={"large"} color={"red"}/> : <Text>Loaded Data</Text>}

        <View style={{marginTop: 50}}>
            <Button title='Done' onPress={() => {setLoading(!loading)}} />
        </View>
        
        
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


   