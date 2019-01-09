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
    const workloadStatus = props.workloadStatus
    return (
        <ListItem avatart style={memberStyle.memberItem}> 
            <Left>
                <Thumbnail style={memberStyle.memberImage} source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
            </Left>
            <Badge style={[memberStyle.statusMemberProcess, getWorkloadStatus(workloadStatus)]}>
                <Text>2</Text>
            </Badge>
        </ListItem>
    );
}

class MemberList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            viewMore: true
        }
    }
    
    render() {
        return(
            <Grid>
                <Text style={memberStyle.totalMemberLabel}>10 members joined</Text>
                <Row>
                    <Col>
                        <List style={memberStyle.memberList}>
                            <MemberItem 
                                workloadStatus = {WORKLOAD_PERCENT.LOW}
                            />
                            <MemberItem 
                                workloadStatus = {WORKLOAD_PERCENT.MEDIUM}
                            />
                            {this.state.viewMore &&
                                <Label style={memberStyle.viewMore}>...</Label>
                            }
                        </List>
                    </Col>
                </Row>
            </Grid>            
        );
    }
}

export default MemberList
