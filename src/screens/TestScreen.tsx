import React, { useState } from "react";
import { View, Text, Button, Animated, Image, Easing } from 'react-native';

const TestScreen = () => {


    const name = "John";


    let lastName: string = "Smith";
    lastName = "David"


    let isRunning: boolean = false;
    isRunning = true;
    isRunning = false;

    let totalValue: number;
    totalValue = 34;

    totalValue = 100.56;

    let totalStudents: any;

    totalStudents = 5000;
    totalStudents = "50";
    totalStudents = true;

    let res: string | number | null | undefined = "fifty";
    res = 50.0

    res = null;
    res = undefined;


    let employeeNames: string[] = [];
    employeeNames = ["Rahul, Ramesh"]
    console.log(employeeNames);
    employeeNames.push("Rajesh");
    console.log(employeeNames);

    const employeeAge: number[] = [];
    employeeAge.push(45);
    employeeAge.push(63.5);


    const studentData:
        { name: string, age: number, address: string, classes: string[] } = {
        name: "Rahul", age: 25, address: "Delhi", classes: ["Maths", "Science"]
    }

    type Employee = {
        name: string,
        age: number,
        id: string,
        salary: number,
    }

    type customString = string;
    type Digits = number;


    const employeeOne: Employee = {
        name: "John",
        age: 34,
        id: "3298hfwhedhfwasfds",
        salary: 10000
    }


    const firstName: customString = "David";


    interface Student {
        name: String,
        age: Number,
    }

    const student1: Student = {
        name: "",
        age: 57
    }

    enum Directions {
        North = 'North',
        South = "South",
        East = "East",
        West = 'West'
    }

    let homeDirection: Directions = Directions.North;
    homeDirection: Directions.South;


    enum Relationship {
        Father = "FATHER",
        Mother = "MOTHER",
        Son = "Son",
        Daughter = "DAUGHTER",
    }

    const relation: Relationship = Relationship.Mother;

    enum Env {
        dev = "DEV",
        qa = "QA",
        prod = "PROD"
    }

    const environment: Env = Env.prod;




    const [rotateValueHolder] = useState(new Animated.Value(0));

    const Animate = () => {
        Animated.loop(Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.ease,
            useNativeDriver: true,
        })).start();
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.Image
                style={{
                    width: 20,
                    height: 20,
                    transform:
                        [
                            {
                                rotate: rotateValueHolder.interpolate(
                                    {
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '360deg'],
                                    }
                                )
                            },
                            {
                                translateX: rotateValueHolder.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 120]
                                })
                            },
                            {
                                translateY: rotateValueHolder.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -25]
                                })
                            },
                            {
                                scaleX: rotateValueHolder.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 15]
                                })
                            },
                            {
                                scaleY: rotateValueHolder.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 12.5]
                                })
                            }
                        ],
                }}
                source={require("./arrowRound.png")}
            />

            <View style={{ bottom: 40, position: 'absolute' }}><Button title="Animate" onPress={() => Animate()} /></View>



        </View>
    )
}

export default TestScreen;