import React from "react"
import { View, TouchableOpacity, Image, Text, Alert } from "react-native"
import { getData } from "../api/Api"
import Realm, { BSON, ObjectSchema } from "realm";
import { useQuery } from "@realm/react";
import Post from "../models/Post";

class Person extends Realm.Object<Person> {
    _id!: Realm.BSON.ObjectId;
    name!: string;
    age?: number;
    static schema: ObjectSchema = {
      name: 'Person',
      primaryKey: '_id',
      properties: {
        _id: 'objectId',
        name: 'string',
        age: 'int?',
      },
    };
  }
  


type testScreenA = {
    navigation?: any,
}

const LocalProfileScreen = (props: testScreenA) =>  {

    let realm = new Realm({schema: [Post]});

    const getDataFromAPI = async () => {
        
        const postsList = await getData("posts");



        postsList.data.map((item: any) => {
            realm.write(() => {
                const POST_ID = new BSON.ObjectId();
                const res = realm.create('Post',  {
                    _id: POST_ID,
                    userId: item.userId,
                    postId: item.id,
                    title: item.title,
                    body: item.body,
                })
            })
            

        })
        
    }

    const writeData = async () => {
        realm.write(() => {
            const PERSON_ID = new BSON.ObjectId();
            const res = realm.create('Person',  {
                _id: PERSON_ID,
                name: 'John Smith',
                age: 28,
            })
            console.log(res, "WRITE DATA")
        })
    }

    const readDataDB = (schema: Realm.Object, param: any) => {

    }

    const readData = () => {
        const postsList = realm.objects(Post);
        console.log(postsList.length, "Items", postsList);
        if(postsList.length > 1) {
            Alert.alert("Local Data", postsList[0].title)
        }
        
    }

    const deleteData = () => {
        realm.write(() =>
            realm.delete(
              realm.objects(Post).filter(post => post.userId == 10),
            ),
          );
    }

    const deleteAllData = () => {
        realm.write(() =>
            realm.delete(
              realm.objects(Post)
            ),
          );

    }

    const updateData = () => {
        const postsList = realm.objects(Post);
        realm.write(() => {
            postsList[0].title = "NEW TITLE UPDATED Again"
        })

        
    }

    

    return(
        <View style={{flex: 1, width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
            
            
            <TouchableOpacity
            testID="NavigateTestB"
            style={{margin: 20, height: 50, borderRadius: 25, width: 220, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}
            onPress={() => getDataFromAPI()}
            >
                <Text style={{color: 'white'}}>Write Data TO DB FROM API</Text>
            </TouchableOpacity>

            <TouchableOpacity
            testID="NavigateTestB"
            style={{margin: 20, height: 50, borderRadius: 25, width: 220, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}
            onPress={() => readData()}
            >
                <Text style={{color: 'white'}}>Read Data</Text>
            </TouchableOpacity>

            <TouchableOpacity
            testID="NavigateTestB"
            style={{margin: 20, height: 50, borderRadius: 25, width: 220, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}
            onPress={() => updateData()}
            >
                <Text style={{color: 'white'}}>Update Data</Text>
            </TouchableOpacity>

            <TouchableOpacity
            testID="NavigateTestB"
            style={{margin: 20, height: 50, borderRadius: 25, width: 220, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}
            onPress={() => deleteData()}
            >
                <Text style={{color: 'white'}}>Delete Data</Text>
            </TouchableOpacity>

            <TouchableOpacity
            testID="NavigateTestB"
            style={{margin: 20, height: 50, borderRadius: 25, width: 220, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}
            onPress={() => deleteAllData()}
            >
                <Text style={{color: 'white'}}>Delete All Data</Text>
            </TouchableOpacity>
        </View>
    )

}
export default LocalProfileScreen;