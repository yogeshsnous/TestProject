import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

type profileProps = {
    name: string;
}

type profileState = {
    age: number;
    dob: string;
}




class ProfileScreen extends React.Component<profileProps, profileState> {

    constructor(props: profileProps) {
        super(props);
        this.state = { age: 10, dob: '5/9/1994' }
        this.updateAge = this.updateAge.bind(this);
        this.updateDOB = this.updateDOB.bind(this);
        this.renderFirstText = this.renderFirstText.bind(this);
        this.renderButton = this.renderButton.bind(this);
    }

    componentDidMount(): void {
        console.log("Loaded Class Component")

    }
    componentWillUnmount(): void {
        console.log("Unloaded Class Component")
    }
    updateAge() {
        this.setState({
            age: 15,
        })
    }
    updateDOB() {
        this.setState({
            dob: '06/08/1996'
        })
    }

    renderFirstText() {

        return (
            <Text style={{ flex: 2, backgroundColor: 'red', fontSize: 20, color: 'white' }}>{this.state.age}</Text>
        )
    }

    renderButton() {
        return (<View style={{ flex: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}><Button title='Update DOB' onPress={this.updateDOB} />
        </View>)
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderFirstText()}
                <Text style={{ flex: 2, backgroundColor: 'yellow', fontSize: 20 }}>{this.state.dob}</Text>
                <View style={{ flex: 3, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}><Button title='Update Age' onPress={this.updateAge} />
                </View>

                {this.renderButton()}

            </View>
        )
    }

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
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
