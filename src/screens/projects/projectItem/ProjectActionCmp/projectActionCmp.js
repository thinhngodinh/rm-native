import React from 'react';
import { Icon, Button, Text, Body, Left, Right } from 'native-base';
import { withNavigation } from 'react-navigation';

import projectActionStyle from './projectActionCmpStyle';
import { projectScreens } from '../../index';

const ProjectActionList = ({navigation, projectInfo}) => {
    return (
        <React.Fragment>
            <Left>
                <Button
                    onPress={() => navigation.navigate(projectScreens.ProjectAddTags, {projectInfo: projectInfo})}
                    small info iconLeft full transparent style={projectActionStyle.btnStyle}>
                    <Icon name='md-pricetags' />
                    <Text style={projectActionStyle.textAct}>Tag</Text>
                </Button>
            </Left>
            <Body>
                <Button
                    onPress={() => navigation.navigate(projectScreens.ProjectAddTasks, {projectInfo: projectInfo})}
                    small info iconLeft full transparent style={projectActionStyle.btnStyle}>
                    <Icon name='md-add' />
                    <Text style={projectActionStyle.textAct}>Task</Text>
                </Button>
            </Body>
            <Right>
                <Button
                    onPress={() => navigation.navigate(projectScreens.ProjectAddMembers, {projectInfo: projectInfo})}
                    small info iconLeft full transparent style={projectActionStyle.btnStyle}>
                    <Icon name='md-person-add' />
                    <Text style={projectActionStyle.textAct}>Member</Text>
                </Button>
            </Right>
        </React.Fragment>
    );
};

export default withNavigation(ProjectActionList);
