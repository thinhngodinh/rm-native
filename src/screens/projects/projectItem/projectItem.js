import React from 'react';

// third-party import
import { Card, CardItem, Text, Body, Label, Icon, Button, Left, Right, View } from 'native-base';
import projectItemStyle from './projectItemStyle';
import { ProjectProcess, TagList, MemberList, ProjectActionList } from './index';

const ProjectItem = ({project}) => (
    <Card style={projectItemStyle.mainCard}>
        <CardItem header style={projectItemStyle.cardHdr}>
            <Text style={projectItemStyle.cardTextHdr}>Artsopolis Migration</Text>
            <Label style={projectItemStyle.labelHdr}>#37</Label>
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
        <CardItem footer style={{paddingTop: 5}}>
            <View style={projectItemStyle.actionWrapper}>
                <ProjectActionList />
            </View>
        </CardItem>
    </Card>
);

export default ProjectItem
