import React from "react";
import {View, Text} from 'react-native';

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

    let res: string | number | null | undefined= "fifty";
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
    { name: string, age: number, address:string,  classes: string[]}  = {
        name: "Rahul", age: 25, address: "Delhi", classes: ["Maths", "Science"]
    }

    type Employee = {
        name: string,
        age: number,
        id:string, 
        salary: number,
    }

    type customString = string;


    const employeeOne: Employee = {
        name: "John",
        age: 34,
        id: "3298hfwhedhfwasfds",
        salary: 10000
    }


    const firstName: customString = "David"


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
   
    



    return (
        <View>
            <Text>Basics</Text>
        </View>
    )
}

export default TestScreen;