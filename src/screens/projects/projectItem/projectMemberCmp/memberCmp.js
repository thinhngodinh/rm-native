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
        <ListItem avatart style={memberStyle.memberItem}> 
            <Left>
                <Thumbnail style={memberStyle.memberImage} source={{ uri: props.projectMember.profile_picture }} />
            </Left>
            <Badge style={[memberStyle.statusMemberProcess, getWorkloadStatus(props.projectMember.percent_workload)]}>
                <Text>{props.projectMember.opened_issues}</Text>
            </Badge>
        </ListItem>
    );
}

class MemberList extends React.Component {
    render() {
        const {navigation, projectInfo, members} = this.props;
        return(
            <Grid>
                <Text style={memberStyle.totalMemberLabel}>{members.length} members joined</Text>
                <Row>
                    <Col>
                        <List style={memberStyle.memberList}>
                            {members.length && members.map((member, index) => {
                                if (index <= 3 ) {
                                    return (
                                        <MemberItem 
                                            key={index}
                                            projectMember={member}
                                        />
                                    );
                                } else if (index === 4 ) {
                                    return (
                                        <Button
                                            onPress={() => navigation.navigate(projectScreens.ProjectAddMembers, {projectInfo: projectInfo})}
                                            style={memberStyle.btnViewMore} light key={index}
                                        >
                                            <Text style={memberStyle.viewMore}>...</Text>
                                        </Button>
                                    );
                                }
                            })}
                            
                        </List>
                    </Col>
                </Row>
            </Grid>            
        );
    }
}

export default withNavigation(MemberList)
