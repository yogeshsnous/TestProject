import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TestScreenA from '../TestScreenA';
import { render, fireEvent } from '@testing-library/react-native'; 
import { getData } from '../../api/Api';



const mockNaviagtion = {
    navigate: jest.fn(),
    push: jest.fn(),
}

const users = {data: [
    {
      "id": 1,
      "name": "Test A",
      "username": "Bret",
      "email": "xyx@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
        "id": 3,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      }
]}

jest.mock('../../api/Api', () => {
    return {
        getData: jest.fn(() => Promise.resolve(users)),
        postData: jest.fn(),
    }
})


describe('Test Screen A Snapshot', () => {

    test('SnapShot tets', () => {
        const testATree = renderer.create(<TestScreenA AppName='Sample App'/>);
        expect(testATree).toMatchSnapshot();
    })

})

describe("Test screen", () => {

    const profile = {
        name: "",
        class: ''
    }

    test("Check image is present", () => {
        const {getByTestId} = render(<TestScreenA AppName=''/>)
        const image = getByTestId('logoImage');
        expect(image).toBeTruthy();
    })
    test("Check App Text is present", () => {
        const {getByLabelText} = render(<TestScreenA AppName='Rahul'/>)
        const text = getByLabelText('App UI');
        expect(text).toBeTruthy();
    })
   
    test("Check Navigation button  is present", () => {
        const {getByTestId} = render(<TestScreenA AppName='abc' />)
        const naviagteButton = getByTestId('NavigateTestB');
        expect(naviagteButton).toBeTruthy();
    })

    test("Check navigation button navigates to next screen on click", async () => {
        const spyNaviagte = jest.spyOn(mockNaviagtion, 'push')
        const {getByTestId} = render(<TestScreenA AppName='XYZ' navigation={mockNaviagtion}/>)
        const naviagteButton = getByTestId('NavigateTestB');
        await fireEvent.press(naviagteButton);
        expect(spyNaviagte).toHaveBeenCalled();
    })
})