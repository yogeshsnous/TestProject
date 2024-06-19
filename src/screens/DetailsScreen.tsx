import React, { useEffect, useState } from 'react';
import {Button, FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import { listData } from './HomeScreen';




type detailsProps = {
    navigation?: any,
    route: any
}




const DetailsScreen = (props: detailsProps) => {

    const [list, setList] = useState(props.route.params.item)

    useEffect(()=> {
       

    }, [])
 
    


    return(
    <View>
        <View style={{width: '100%', height: 80, marginVertical: 5, marginHorizontal: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: "#808080"}}>
            <View style={{width: '20%', height: 70, marginLeft: 20}}>
                <Image 
                source={{uri: list?.imageUrl}}
                style={{width: 70, height: 70, borderRadius: 35}}
                />
            </View>

            <View style={{width: '70%', height: 70, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{fontSize: 21, fontWeight: '600', color: "#ADD8E6"}}>
                    {list?.title}
                </Text>
                <Text style={{fontSize: 16, fontWeight: '300', color: 'black'}}>
                    {list?.description}
                </Text>

            </View>


        </View>
        <Button title='Done' onPress={() => {}}></Button>
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


   