import React from 'react';

// third-party import
import { Card, CardItem, Text, Body, Label, View } from 'native-base';
import projectItemStyle from './projectItemStyle';
import { ProjectProcess, TagList, MemberList, ProjectActionList } from './index';

const ProjectItem = ({projectInfo}) => {
    return (
        <Card style={projectItemStyle.mainCard}>
            <CardItem header style={projectItemStyle.cardHdr}>
                <Text style={projectItemStyle.cardTextHdr}>{projectInfo.name}</Text>
                <Label style={projectItemStyle.labelHdr}>#{projectInfo.id}</Label>
            </CardItem>
            <CardItem>
                <Body>
                    <ProjectProcess
                        percentComplete={projectInfo.percent_complete}
                        openIssues={projectInfo.open_issues}
                        issues={projectInfo.issues}
                        spentHours={projectInfo.spent_hours}
                        estHours={projectInfo.est_hours}
                    />
                    <TagList
                        tags={projectInfo.tags}
                    />
                </Body>
            </CardItem>
            <CardItem footer style={{paddingTop: 5}}>
                <Body style={projectItemStyle.memberJoined}>
                    <MemberList
                        members={projectInfo.members}
                    />
                </Body>
            </CardItem>
            <CardItem footer style={{paddingTop: 5}}>
                <View style={projectItemStyle.actionWrapper}>
                    <ProjectActionList />
                </View>
            </CardItem>
        </Card>
    );
}

export default ProjectItem
