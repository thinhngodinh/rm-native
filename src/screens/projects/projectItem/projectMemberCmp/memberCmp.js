import React from 'react';
import { List, ListItem, Left, Thumbnail, Text, Badge, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import memberStyle from './memberCmpStyle';
import { withNavigation } from 'react-navigation';
import { projectScreens } from '../../index';

function getWorkloadStatus(workloadPercent) {
    let workloadStatus = '';
    if (workloadPercent < 30) {
        workloadStatus = memberStyle.statusYellow;
    } else if ((workloadPercent >= 30) && (workloadPercent < 50)) {
        workloadStatus = memberStyle.statusBlue;
    } else if ((workloadPercent >= 50) && (workloadPercent < 80)) {
        workloadStatus = memberStyle.statusGreen;
    } else if ((workloadPercent >= 80) && (workloadPercent < 100)) {
        workloadStatus = memberStyle.statusOrange;
    } else if (workloadPercent >= 100) {
        workloadStatus = memberStyle.statusRed;
    }
    return workloadStatus;
}

const MemberItem = (props) => {
    return (
        <Col style={{position: 'relative'}}>
            <Thumbnail style={memberStyle.memberImage} source={{ uri: props.projectMember.profile_picture }} />
            <Badge style={[memberStyle.statusMemberProcess, getWorkloadStatus(props.projectMember.percent_workload)]}>
                <Text>{props.projectMember.opened_issues}</Text>
            </Badge>
        </Col>
    );
}

const MemberList = ({navigation, projectInfo, projectInfo: { members } }) => {
    return(
        <Grid>
            <Text style={memberStyle.totalMemberLabel}>{members.length} members joined</Text>
            <Row>
                {members.length && members.slice(0,4).map((member, index) => 
                    (
                        <MemberItem 
                            key={index}
                            projectMember={member}
                        />
                    )
                )}
                <Col>
                    <Button
                        onPress={() => navigation.navigate(projectScreens.ProjectAddMembers, {projectInfo: projectInfo})}
                        style={memberStyle.btnViewMore} light
                    >
                        <Text style={memberStyle.viewMore}>...</Text>
                    </Button>
                </Col>
            </Row>
        </Grid>            
    );
};

export default withNavigation(MemberList)
