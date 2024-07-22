import React from 'react';
import { Button, View, Alert, StyleSheet, TextInput, Image, TouchableOpacity, PermissionsAndroid } from 'react-native';
import {launchCamera, launchImageLibrary } from 'react-native-image-picker';

type profileProps = {
    name: string;
}

type profileState = {
    firstName: string;
    lastName: string;
    age: string;
    dob: string;
    profileImage?: string;
}




class ProfileScreen extends React.Component<profileProps, profileState> {

    constructor(props: profileProps) {
        super(props);
        this.state = { firstName: "John", lastName: "Smith", age: "10", dob: '5/9/1994'}
        this.openGallery = this.openGallery.bind(this);
        this.openCamera = this.openCamera.bind(this);
        this.getCameraPermission = this.getCameraPermission.bind(this);
    }

    componentDidMount(): void {
        console.log("Loaded Class Component")

    }
    componentWillUnmount(): void {
        console.log("Unloaded Class Component")
    }

    async getCameraPermission(){
        try {
          const grantedRes = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Cool Photo App Camera Permission',
              message:
                'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );

          if (grantedRes === PermissionsAndroid.RESULTS.GRANTED) {
            launchCamera({mediaType: 'photo', includeBase64: true, saveToPhotos: true}, (res) => {
                this.setState({profileImage: res?.assets[0].uri ?? ""})
                console.log(res?.assets[0])
             }) 
          } else {
            Alert.alert("Please enable camera permission")
          }
        } catch (err) {
          console.warn(err);
        }
      };


    openGallery() {
        launchImageLibrary({mediaType: 'photo'}, (res) => {
            this.setState({profileImage: res?.assets[0].uri ?? ""})

            
        })
    }

    openCamera() {

        this.getCameraPermission();
        
    }

    


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                onPress={() => this.openGallery()}>
                <Image source={{uri: this.state.profileImage}} style={{marginVertical: 20, width: 150, height: 150, borderRadius: 75, backgroundColor: 'white'}}/>
                </TouchableOpacity>
                
                <TextInput value={this.state.firstName} style={{fontSize: 20, color: 'white'}} />
                <TextInput value={this.state.lastName} style={{fontSize: 20, color: 'white',  }} />
                <TextInput value={this.state.age} style={{fontSize: 20, color: 'white',  }} />
                <TextInput value={this.state.dob} style={{fontSize: 20, color: 'white',  }} />
                
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Button title='Save' onPress={() => {}} />
                </View>

                <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Button title='DeletePhoto' onPress={() => {this.setState({profileImage: undefined})}} />
                </View>


            </View>
        )
    }

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
    },
    buttonView: {
        marginVertical: 25,
        width: '80%',
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ADD8E6',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: 10,
    },
    welcomeText: {
        fontSize: 70,
        fontWeight: '900',
        marginTop: 50
    },
    description: {
        fontSize: 26,
        fontWeight: '300',
        marginTop: 20,
        marginBottom: 20,
    },
    textInput: {
        width: '70%',
        height: 60,
        marginVertical: 20,
        backgroundColor: 'white',
        borderRadius: 8,
    }
})

export default ProfileScreen;
