import React from 'react';

import { View } from 'react-native';
import { Button, Text, Item, Input, Label } from 'native-base';

import { ActionSheetOptionsIos } from '../../_commonCmp/IosActionSheet';

const ProjectFilterView = ({ dispatch, updateFilter, updateProjectList, filter }) => {
    return (
        <View>
            <Text>Android Filter</Text>
            <Item inlineLabel style={{marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#aaa' }}>
                <Label style={{color: '#04b6fe'}}>Search:</Label>
                <Input
                    value={filter.tags}
                    placeholder='Input text, tags'
                    placeholderTextColor='#aaa'
                    onChangeText={(text) => updateFilter(dispatch, { tags: text, key: text})}
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

            <Button
                onPress={() => updateProjectList(dispatch)}
                primary small>
                <Text>Search</Text>
            </Button>
        </View>
    )
};
export default ProjectFilterView