import { Image } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native';



type selectionLstScreenProps = {
    route: any
    navigation?: any,

}




const SelectionLstScreen = (props: selectionLstScreenProps) => {

    const data = [
        {name: "Acid Reflux", selected: false},
        {name: "Alcohol Abuse", selected: false},
        {name: "Anemia", selected: false},
        {name: "Asthma", selected: false},
        {name: "Fever", selected: false},
        {name: "Headache", selected: false}
    ]

    const [listData, setListData] = useState(data) 

    

    const renderItem = (item: any, index: number) => {
        const path = item.selected ? require('../screens/checkbox.png') : require('../screens/unchecked.png');

        return (
            <TouchableOpacity
                style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: 40}}
                onPress={() => {
                    let data = listData;
                    data[index].selected = !data[index].selected
                    setListData([...data])
                }}
            >
                <Image
                    source={path}
                    style={{width: 20, height: 20, marginLeft: 20}}
                />
                <Text style={{marginLeft: 20}}>
                    {item.name}
                </Text>

            </TouchableOpacity>
        )
    }


    const dataX = [
        {
            name: "ABC",
            class: "7th"
        },
        {
            name: "ABC",
            class: "8th"
        },
        {
            name: "XYZ",
            class: "7th"
        }
    ]
    


    return(
        <View style={styles.container}>
            <View style={styles.checkboxsView}>
            <FlatList
                data={listData}
                renderItem={({ index, item }) => renderItem(item, index)}
                style={{ width: '100%'}}
                extraData={listData}
                keyExtractor={(item) => "Abc"}
            />

            </View>
            <View style={styles.selectedItems}>
            {listData.map((item, index) => {
                if(item.selected) {
                    return (
                        <TouchableOpacity
                        onPress={() => {
                            let data = listData;
                            data[index].selected = !data[index].selected
                            setListData([...data])
                        }} style={{alignItems: 'center', justifyContent: 'center',  margin: 10, backgroundColor: '#A7D1DF', borderRadius: 20, height: 40, width: 80}}>
                            <Text>
                                {item.name}
                            </Text>
                        </TouchableOpacity>)

                } else {
                    return null
                }
            })}
                

            </View>
            <View style={styles.buttonView}>

            </View>

        </View>
    )

    
  

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
    },
    checkboxsView: {
        width: '100%',
        flex: 6,
        

    },
    selectedItems: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center'
        
    },
    buttonView: {
        width: '100%',
        flex: 1,
       
    }
})

export default SelectionLstScreen;


