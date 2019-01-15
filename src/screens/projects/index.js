import React from 'react';
import { createStackNavigator } from "react-navigation";
import { Icon } from 'native-base';

// App Source import

import ScreenAddMembers from './projectAddMembers';
import ScreenAddTags from './projectAddTags';
import ScreenAddTasks from './projectAddTasks';
import ScreenUserWorkload from './projectUserWorkload';
import ScreenProjectList from './projectsList'

export const projectRoute = {
    list: 'list',
    detail: 'details/:projectId',
    addTags: 'tags/:projectId',
    addTasks: 'tasks/:projectId',
    addMembers: 'members/:projectId',
    userWorload: 'userWorload/:projectId/:userId'
};

export const projectScreens = {
    ProjectList: 'ProjectList',
    ProjectAddTasks: 'ProjectAddTasks',
    ProjectAddTags: 'ProjectAddTags',
    ProjectAddMembers: 'ProjectAddMembers',
    ProjectUserWorkload: 'ProjectUserWorkload'
};

const ProjectStack = createStackNavigator(
    {
        [projectScreens.ProjectList]: {
            screen: ScreenProjectList,
            path: projectRoute.list
        },
        [projectScreens.ProjectAddTasks]: {
            screen: ScreenAddTasks,
            path: projectRoute.addTasks,
        },
        [projectScreens.ProjectAddTags]: {
            screen: ScreenAddTags,
            path: projectRoute.addTags,
        },
        [projectScreens.ProjectAddMembers]: {
            screen: ScreenAddMembers,
            path: projectRoute.addMembers,
        },
        [projectScreens.ProjectUserWorkload]: {
            screen: ScreenUserWorkload,
            path: projectRoute.userWorload
        }
    },
    {
        initialRouteName: 'ProjectList',
        headerMode: 'none'
    }
)

ProjectStack.navigationOptions = {
    ...ProjectStack.navigationOptions,
    drawerLabel: 'Projects',
    drawerIcon: () => <Icon name='md-folder' style={{ color: '#fff' }} />
}

export default ProjectStack;