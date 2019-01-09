import React from 'react';
import { Icon, Button, Text, Body, Left, Right } from 'native-base';
import projectActionStyle from './projectActionCmpStyle';

class ProjectActionList extends React.Component {
    render() {
        return [
            <Left>
                <Button small iconLeft full transparent style={projectActionStyle.btnStyle}>
                    <Icon name='md-pricetags' />
                    <Text style={projectActionStyle.textAct}>Add Tag</Text>
                </Button>
            </Left>,
            <Body>
                <Button small iconLeft full transparent style={projectActionStyle.btnStyle}>
                    <Icon name='md-add' />
                    <Text style={projectActionStyle.textAct}>Add Task</Text>
                </Button>
            </Body>,
            <Right>
                <Button small iconLeft full transparent style={projectActionStyle.btnStyle}>
                    <Icon name='md-person-add' />
                    <Text style={projectActionStyle.textAct}>Add Member</Text>
                </Button>
            </Right>
        ];
    }
}

export default ProjectActionList
