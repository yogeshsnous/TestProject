import React, { useState } from "react"
import { View, TouchableOpacity, Image, Text, Alert, NativeModules, Button } from "react-native"
import { launchImageLibrary } from "react-native-image-picker"
import Share from 'react-native-share'


type shareScreenProps = {
    route: any
    navigation?: any,
}

const ShareScreen = (props: shareScreenProps) =>  {

    const {CalendarModule} = NativeModules;

    const [image, setImage] = useState<string | null>(null)

    const openImages = async () => {
        launchImageLibrary({mediaType: 'photo'}, (res) => {
            if(res?.assets) {
                setImage(res?.assets[0].uri ?? "")
                console.log(res?.assets[0].uri);
            }
        })
    }

    const shareSelectedImage = async () => {
        if(image) {
            const options = {
                url: image
            }
            const res = await Share.open(options)
        } else {
            Alert.alert("Please select a image");
        }
        
    }

    const callCalendar = () => {

        CalendarModule.getMessageFromNative((res: string) => {
            Alert.alert(res)
        }, (err: Error)=> {
            Alert.alert("Error", err.message);
        })
    }


    return(
        <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
            <TouchableOpacity
                onPress={() => openImages()}>
                <Image source={{uri: image ?? ""}} style={{marginVertical: 20, width: 150, height: 150, borderRadius: 75, backgroundColor: 'gray'}}/>
            </TouchableOpacity>

            <TouchableOpacity
                style={{width: 150, height: 50, borderRadius: 25, backgroundColor: '#FEB601', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                onPress={() => shareSelectedImage()}
                >
                <Image source={require("./share.png")} style={{width: 28, height: 28}}/>
                <Text style={{marginLeft: 5, fontSize: 20}}>Share</Text>
            </TouchableOpacity>

            <Button title="Call Native" onPress={() => callCalendar()}/>


        </View>
    )

}

export default ShareScreen;