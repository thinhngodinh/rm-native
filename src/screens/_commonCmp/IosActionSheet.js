import React from 'react';
import {ActionSheetIOS} from 'react-native';
import { Button, Text } from 'native-base';

const renderOptions = (options, cancelLabel) => {
    const defaultOptions = [cancelLabel];
    if ( Array.isArray(options) ) {
        options.forEach(item => {
            defaultOptions.push(item.label)
        });
    }
    console.log(defaultOptions);
    return defaultOptions;
};

const showOptions = (cancelLabel, title, options, onValueChange, activeIndex) => {
    ActionSheetIOS.showActionSheetWithOptions(
        {
            options: renderOptions(options, cancelLabel),
            destructiveButtonIndex: activeIndex + 1,
            title: title,
            cancelButtonIndex: 0,
        },
        (selectedIndex) => {
            if (onValueChange && selectedIndex > 0) {
                console.log(selectedIndex);
                onValueChange(options[selectedIndex - 1].value);
            }
        }
    )
};

export const ActionSheetOptionsIos = ({
    triggerLabel = 'Select', cancelLabel = 'Cancel', options, value = null,
    onValueChange = null
}) => {
    const selectedItem = options.find(item => value === item.value);
    const activeIndex = options.indexOf(selectedItem);
    return (
        <Button 
            onPress={() => showOptions(cancelLabel, triggerLabel, options, onValueChange, activeIndex)}
            rounded block bordered transparent small>
            <Text>{triggerLabel}{selectedItem ? `: ${selectedItem.label}` : ''}</Text>
        </Button>
    );
};

