import React from 'react';
import {StyleSheet} from 'react-native';
import { Button, Text, ActionSheet, Icon } from 'native-base';
const filterStyle = StyleSheet.create(
    {
        selectBtn: {
            marginBottom: 10,
            borderRadius: 0,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0
        },
        changeBorder: {
            borderBottomWidth: 1,
            borderBottomColor: '#aaa'
        },
        customText: {
            paddingLeft: 0,
            flexGrow: 2
        }
    }
)

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
            rounded block bordered transparent
            style={[filterStyle.selectBtn, filterStyle.changeBorder]}
            iconRight
        >
            <Text style={filterStyle.customText}>{triggerLabel}{selectedItem ? `: ${selectedItem.label}` : ''}</Text>
            <Icon name='md-arrow-dropdown' />
        </Button>
    );
};

