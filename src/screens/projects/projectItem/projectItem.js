import React from 'react';

// third-party import
import { Card, CardItem, Text, Body, Label, Icon} from 'native-base';
import projectItemStyle from './projectItemStyle';
import ProjectProcess from './projectProcessCmp/projectProcessCmp';
import TagList from './ProjectTagCmp/projectTagCmp';
import MemberList from './projectMemberCmp/memberCmp';

class ProjectItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card style={projectItemStyle.mainCard}>
                <CardItem header style={projectItemStyle.cardHdr}>
                    <Text style={projectItemStyle.cardTextHdr}>Artsopolis Migration</Text>
                    <Label style={projectItemStyle.labelHdr}>#37</Label>
                    <Icon name='md-settings' style={projectItemStyle.actHdr}/>
                </CardItem>
                <CardItem>
                    <Body>
                        <ProjectProcess />
                        <TagList />
                    </Body>
                </CardItem>
                <CardItem footer style={{paddingTop: 5}}>
                    <Body style={projectItemStyle.memberJoined}>
                        <MemberList />
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default ProjectItem