import React from 'react';
import { View,Label, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import projectProcessStyle from './projectProcessCmpStyle';

const ProcessBar = (props) => (
    <View style={projectProcessStyle.projectProcess}>
        <Label style={projectProcessStyle.labelPercentComplete}>{props.percentComplete}% completed</Label>
        <View style={{height: 5, backgroundColor: '#64cfe6', width: `${props.percentComplete}%`}}></View>
        <Label style={projectProcessStyle.labelProcessIssues}>{props.openIssues} uncompleted issues</Label>
    </View>
);

const ProjectInformation = (props) => {
    const spentHoursCvt = Number(props.spentHours);
    const estHoursCvt = Number(props.estHours);
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Col style={projectProcessStyle.itemProcess}>
                <Text style={projectProcessStyle.itemProcessText}>{props.issues.toLocaleString()} issues</Text>
            </Col>
            <Col style={projectProcessStyle.itemProcess}>
                <Text style={projectProcessStyle.itemProcessText}>Spent {spentHoursCvt.toLocaleString()} hrs</Text>
            </Col>
            <Col style={projectProcessStyle.itemProcess}>
                <Text style={projectProcessStyle.itemProcessText}>Est. {estHoursCvt.toLocaleString()} hrs</Text>
            </Col>
        </View>
    );
}

const ProjectProcess = ({percentComplete, openIssues, issues, spentHours, estHours}) => (
    <Grid>
        <Row>
            <ProcessBar
                percentComplete={percentComplete}
                openIssues={openIssues}
            />
        </Row>
        <Row>
            <ProjectInformation
                issues={issues}
                spentHours={spentHours}
                estHours={estHours}
            />
        </Row>
    </Grid>
);

export default ProjectProcess