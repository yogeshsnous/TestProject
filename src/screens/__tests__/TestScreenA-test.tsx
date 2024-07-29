import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TestScreenA from '../TestScreenA';
import { render, fireEvent } from '@testing-library/react-native'; 


const mockNaviagtion = {
    navigate: jest.fn(),
    push: jest.fn(),
}


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

    test("Check navigation button navigates to next screen on click", () => {
        const spyNaviagte = jest.spyOn(mockNaviagtion, 'push')
        const {getByTestId} = render(<TestScreenA AppName='XYZ' navigation={mockNaviagtion}/>)
        const naviagteButton = getByTestId('NavigateTestB');
        fireEvent.press(naviagteButton);
        expect(spyNaviagte).toHaveBeenCalled();
    })
})