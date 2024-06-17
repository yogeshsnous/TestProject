import React, { useState } from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native'



type homeProps = {

}



const HomeScreen = (props: homeProps) => {

    const listData = [
        {
            title: "Monday",
            description: "address one sample",
            imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
        },
        {
            title: "Tuesday",
            description:  "address one sample",
            imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
        },
        {
            title: "Wednesday",
            description:  "address one sample",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp-pLW6OYgbcdMoP-jiLSYseLcpI4f7NWjg&s",
        },
        {
            title: "Thursday",
            description:  "address one sample",
            imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
        },
        {
            title: "Friday",
            description:  "address one sample",
            imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
        },
        {
            title: "Monday",
            description: "address one sample",
            imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
        },
        {
            title: "Tuesday",
            description:  "address one sample",
            imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
        },
        {
            title: "Wednesday",
            description:  "address one sample",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp-pLW6OYgbcdMoP-jiLSYseLcpI4f7NWjg&s",
        },
        {
            title: "Thursday",
            description:  "address one sample",
            imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
        },
        {
            title: "Friday",
            description:  "address one sample",
            imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
        }
    ]


    const renderItem = ({item}: any) => {
        return(<View style={{width: '100%', height: 80, marginVertical: 5, marginHorizontal: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: "#808080"}}>
            <View style={{width: '20%', height: 70, marginLeft: 20}}>
                <Image 
                source={{uri: item.imageUrl}}
                style={{width: 70, height: 70, borderRadius: 35}}
                />
            </View>

            <View style={{width: '70%', height: 70, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{fontSize: 21, fontWeight: '600', color: "#ADD8E6"}}>
                    {item.title}
                </Text>
                <Text style={{fontSize: 16, fontWeight: '300', color: 'black'}}>
                    {item.description}
                </Text>

            </View>

        </View>)

    }

    return (
    <View style={styles.container}>
        <FlatList 
            data={listData}
            renderItem={({item}) => renderItem({item})}
            horizontal={false}
            style={{width: '100%'}}
            ListHeaderComponent={() => <Text style={{fontSize: 24}}>Days List</Text>}
            keyExtractor={({item}) => {item.title}}
        />
    </View>
    )
        
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DEDEDE',
        flex: 1,
    }
})

export default HomeScreen;


   