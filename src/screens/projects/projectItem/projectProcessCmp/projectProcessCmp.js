import React from 'react';
import { View,Label, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import projectProcessStyle from './projectProcessCmpStyle';

const BAR_PROCESS = {
    INPROGRESS: '90%'
}

const ProcessBar = (props) => {
    return (
        <View style={projectProcessStyle.projectProcess}>
            <Label style={projectProcessStyle.labelPercentComplete}>90% completed</Label>
            <View style={{height: 5, backgroundColor: '#64cfe6', width: `${BAR_PROCESS.INPROGRESS}`}}></View>
            <Label style={projectProcessStyle.labelProcessIssues}>22 uncompleted issues</Label>
        </View>
    );
}

const ProjectInformation = (props) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Col style={projectProcessStyle.itemProcess}>
                <Text style={projectProcessStyle.itemProcessText}>676 issues</Text>
            </Col>
            <Col style={projectProcessStyle.itemProcess}>
                <Text style={projectProcessStyle.itemProcessText}>Spent 3304 hrs</Text>
            </Col>
            <Col style={projectProcessStyle.itemProcess}>
                <Text style={projectProcessStyle.itemProcessText}>Est. 3000 hrs</Text>
            </Col>
        </View>
    );
}

class ProjectProcess extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <ProcessBar />
                </Row>
                <Row>
                    <ProjectInformation />
                </Row>
            </Grid>
        );
    }
}

export default ProjectProcess