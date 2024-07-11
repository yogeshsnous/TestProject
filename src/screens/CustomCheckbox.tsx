import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { Dimensions, View, Text } from 'react-native';





type checkboxProps = {
    text: string,
    trueColor?: string,
    falseColor?: string,
}



const CustomCheckbox = (props: checkboxProps) => {
    const [value, setValue] = useState(false)

    return (
        <View style={{width: Dimensions.get('screen').width -100, height: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{props.text}</Text>
            <CheckBox
             value={value}
             tintColors={{
                true: props.trueColor,
                false: props.falseColor,
            }}
            onValueChange={setValue}
            />
        </View>
    )

};

export default CustomCheckbox;


