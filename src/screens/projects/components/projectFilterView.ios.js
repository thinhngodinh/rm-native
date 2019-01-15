import React from 'react';

import { View } from 'react-native';
import { Button, Text } from 'native-base';

const ProjectFilterView = ({dispatch, updateFilter, updateProjectList}) => {
    return (
        <View>
            <Text>Ios Filter</Text>
            <Button
                onPress={() => updateFilter(dispatch, {page: 2})}
                primary small>
                <Text>Set Page 2</Text>
            </Button>
            <Button
                onPress={() => updateProjectList(dispatch)}
                primary small>
                <Text>Search</Text>
            </Button>
        </View>
    )
};
export default ProjectFilterView