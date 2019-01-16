import React from 'react';
import {ActionSheetIOS} from 'react-native';
import { Button, Text, ActionSheet } from 'native-base';

const renderOptions = (options, activeIndex) => {
    const defaultOptions = [];
    if ( Array.isArray(options) ) {
        options.forEach((item, itemIndex) => {
            defaultOptions.push({
                text: item.label,
                icon: activeIndex === itemIndex ? 'md-radio-button-on' :'md-radio-button-off'
            })
        });
    }
    console.log(defaultOptions);
    defaultOptions.push({
        text: 'Back',
        icon: 'md-arrow-back'
    });
    return defaultOptions;
};

const showOptions = (title, options, onValueChange, activeIndex) => {
    ActionSheet.show(
        {
            options: renderOptions(options, activeIndex),
            destructiveButtonIndex: activeIndex,
            cancelButtonIndex: options.length,
            title: title,
        },
        (selectedIndex) => {
            if (onValueChange && selectedIndex < options.length) {
                console.log(selectedIndex);
                onValueChange(options[selectedIndex].value);
            }
        }
    )
};

export const ActionSheetOptionsIos = ({
    triggerLabel = 'Select', options, value = null,
    onValueChange = null
}) => {
    const selectedItem = options.find(item => value === item.value);
    const activeIndex = options.indexOf(selectedItem);
    return (
        <Button 
            onPress={() => showOptions(triggerLabel, options, onValueChange, activeIndex)}
            rounded block bordered transparent>
            <Text>{triggerLabel}{selectedItem ? `: ${selectedItem.label}` : ''}</Text>
        </Button>
    );
};

