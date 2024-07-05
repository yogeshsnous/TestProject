import React, { useState } from 'react';
import { Alert, Button, Dimensions, Share, StyleSheet, TextInput, View} from 'react-native'
import WebView from 'react-native-webview';




type detailsProps = {
    route: any
    navigation?: any,

}



const WebScreen = (props: detailsProps) => {

    const [shareText, setShareText] = useState("");

    const shareAction =  async () => {
        try {
            const rest = await Share.share({title: "Text Message!!", message: shareText, url: "https://google.com"}, {dialogTitle: "Android Title"})
            if (rest.action === Share.sharedAction) {
                Alert.alert("Success")

            } else if (rest.action === Share.dismissedAction) {
                Alert.alert("Cancelled")

            }
          } catch (error: any) {
            Alert.alert("Error")
          }
    }

    return (
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style={styles.container}>
            <WebView source={{ uri: 'https://termly.io/resources/templates/terms-and-conditions-template/' }} style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height/2 }} />
        </View>

        <TextInput style={{marginTop: 40, width: 200, backgroundColor: 'white', borderWidth: 1}} value={shareText}  onChangeText={setShareText}/>
        <View style={{marginTop: 20}}>
        <Button title='Share' color='blue' onPress={() => shareAction()}/>

        </View>
       
        </View>
    )

};

const styles = StyleSheet.create({
    container: { width: Dimensions.get('screen').width, height: Dimensions.get('screen').height/2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' },
})

export default WebScreen;


