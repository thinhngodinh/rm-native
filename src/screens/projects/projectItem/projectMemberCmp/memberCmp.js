import React from 'react';
import { List, ListItem, Left, Thumbnail, Label, Text, Badge } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import memberStyle from './memberCmpStyle';

const WORKLOAD_PERCENT = {
    LOW: 15,
    MEDIUM: 60
};

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
    constructor(props) {
        super(props)
        this.state = {
            viewMore: false
        }
    }
    
    render() {
        return(
            <Grid>
                <Text style={memberStyle.totalMemberLabel}>{this.props.members.length} members joined</Text>
                <Row>
                    <Col>
                        <List style={memberStyle.memberList}>
                            {this.props.members.length && this.props.members.map((member, index) => {
                                if (index <= 4 ) {
                                    return (
                                        <MemberItem 
                                            key={index}
                                            projectMember={member}
                                        />
                                    );
                                } else if (index === 5 ) {
                                    return (
                                        <Label style={memberStyle.viewMore} key={index}>...</Label>
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

export default MemberList
