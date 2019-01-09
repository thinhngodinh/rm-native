import React from 'react';
import { Icon, Button, Text, Body, Left, Right } from 'native-base';
import projectActionStyle from './projectActionCmpStyle';

class ProjectActionList extends React.Component {
    render() {
        return [
            <Left key={1}>
                <Button small iconLeft full info transparent style={projectActionStyle.btnStyle}>
                    <Icon name='md-pricetags' />
                    <Text style={projectActionStyle.textAct}>Tag</Text>
                </Button>
            </Left>,
            <Body key={2}>
                <Button small iconLeft full info transparent style={projectActionStyle.btnStyle}>
                    <Icon name='md-add' />
                    <Text style={projectActionStyle.textAct}>Task</Text>
                </Button>
            </Body>,
            <Right key={3}>
                <Button small iconLeft full info transparent style={projectActionStyle.btnStyle}>
                    <Icon name='md-person-add' />
                    <Text style={projectActionStyle.textAct}>Member</Text>
                </Button>
            </Right>
        ];
    }
}

export default ProjectActionList
