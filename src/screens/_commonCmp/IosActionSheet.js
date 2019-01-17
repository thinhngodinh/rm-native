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
        fieldWrapper: {
            position: 'relative',
        },
        setBorder: {
            borderBottomWidth: 1,
            borderBottomColor: '#aaa'
        },
        fieldLabel: {
            fontSize: 12,
            position: 'absolute',
            left: 0,
            top: -5,
            paddingLeft: 0,
            color: '#a9a9a9'
        },
        fieldValue: {
            paddingLeft: 0,
            flexGrow: 2,
            color: '#141414'
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
            style={[filterStyle.selectBtn, filterStyle.setBorder, filterStyle.fieldWrapper]}
            iconRight
        >
            <Text style={filterStyle.fieldLabel}>{triggerLabel}</Text>
            <Text style={filterStyle.fieldValue}>{selectedItem ? `${selectedItem.label}` : ''}</Text>
            <Icon name='md-arrow-dropdown' style={{color: '#e0e0e0'}} />
        </Button>
    );
};

