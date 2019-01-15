import React from 'react';

import { View } from 'react-native';
import { Button, Text } from 'native-base';

import { userActions } from '../../../static/actionsIndex';
import ProjectFilterView from './projectFilterView';

const updateFilter = (caller, filter) => {
    caller(userActions.changeProjectFilter.invoke(filter));
};

const updateProjectList = (caller) => {
    caller(userActions.getProjectList.invoke());
}

const ProjectFilter = ({dispatch}) => {
    return (
        <ProjectFilterView
            dispatch={dispatch}
            updateFilter={updateFilter}
            updateProjectList={updateProjectList}
        />
    )
};
export default ProjectFilter