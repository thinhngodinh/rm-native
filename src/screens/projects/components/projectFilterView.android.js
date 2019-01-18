import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Button, Text, Item, Input, Label, Icon } from 'native-base';

import { ActionSheetOptionsIos } from '../../_commonCmp/IosActionSheet';
import DateRange from '../../_commonCmp/dateRange/dateRange';

const inputStyle = StyleSheet.create(
    {
        wrapperIpt: { 
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#aaa',
            position: 'relative'
        },
        fieldLabel: {
            color: '#a9a9a9',
            fontSize: 12,
            paddingRight: 0,
            position: 'absolute',
            left: 0,
            top: -5,
        },
        fieldValue: {
            fontSize: 14,
            paddingLeft: 0
        },
        submitSearch: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-end'
        }
    }
)

const ProjectFilterView = ({ dispatch, updateFilter, updateProjectList, filter }) => {
    return (
        <View style={{flex: 1, marginLeft: 5, paddingTop: 10, padding: 5, position: 'absolute', top: 0, right: 0, left: 0 }}>
            <Item style={inputStyle.wrapperIpt}>
                <Label style={inputStyle.fieldLabel}>Search</Label>
                <Input
                    value={filter.tags}
                    onChangeText={(text) => updateFilter(dispatch, { tags: text, key: text})}
                    placeholder='Input text, tags'
                    placeholderTextColor='#a9a9a9'
                    style={inputStyle.fieldValue}
                />
            </Item>
            <ActionSheetOptionsIos
                options={[
                    { label: 'Ascending', value: 'asc' },
                    { label: 'Descending', value: 'desc' }
                ]}
                value={filter.order}
                triggerLabel='Order'
                onValueChange={(value) => updateFilter(dispatch, { order: value })}
            />
            <ActionSheetOptionsIos
                options={[
                    {
                        label: 'All Issues',
                        value: 'issues'
                    },
                    {
                        label: 'Percent Loading',
                        value: 'percent_complete'
                    },
                    {
                        label: 'Closed Issues',
                        value: 'closed_issues'
                    },
                    {
                        label: 'Open Issues',
                        value: 'open_issues'
                    },
                    {
                        label: 'Estimated Hours',
                        value: 'est_hours'
                    },
                    {
                        label: 'Spent Hours',
                        value: 'spent_hours'
                    }
                    
                ]}
                triggerLabel='Order By'
                value={filter.order_by}
                onValueChange={(value) => updateFilter(dispatch, { order_by: value })}
            />
            <DateRange
                updateFilter={updateFilter}
                dispatch={dispatch}
            />
            <View style={inputStyle.submitSearch}>
                <Button
                    onPress={() => updateProjectList(dispatch)}
                    info small>
                    <Text>Search</Text>
                </Button>
            </View>
        </View>
    )
};
export default ProjectFilterView