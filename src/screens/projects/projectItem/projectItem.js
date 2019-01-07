import React from 'react';
import { Platform } from 'react-native'
// third-party import
import { Card, CardItem, Text, Body, List, ListItem, Left, Thumbnail, Label, Icon, View } from 'native-base';
import projectItemStyle from './projectItemStyle';
import { Col, Row, Grid } from 'react-native-easy-grid';

const headerProps = Platform.select({
    ios: () => ({
        iosBarStyle: 'dark-content'
    }),
    android: () => ({
        androidStatusBarColor: '#232323'
    })
})

class ProjectItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const bar = {
            process: '90%'
        }
        return (
            <Card style={projectItemStyle.mainCard}>
                <CardItem header style={projectItemStyle.cardHdr}>
                    <Text style={projectItemStyle.cardTextHdr}>Artsopolis Migration</Text>
                    <Label style={projectItemStyle.labelHdr}>#37</Label>
                    <Icon name='md-settings' style={projectItemStyle.actHdr}/>
                </CardItem>
                <CardItem>
                    <Body>
                        <View style={projectItemStyle.projectProcess}>
                            <Label style={projectItemStyle.labelPercentComplete}>90% completed</Label>
                            <View style={{height: 5, backgroundColor: '#64cfe6', width: `${bar.process}`}}></View>
                            <Label style={projectItemStyle.labelProcessIssues}>22 uncompleted issues</Label>
                        </View>
                        <Row>
                            <Col style={projectItemStyle.itemProcess}>
                                <Text style={projectItemStyle.itemProcessText}>676 issues</Text>
                            </Col>
                            <Col style={projectItemStyle.itemProcess}>
                                <Text style={projectItemStyle.itemProcessText}>Spent 3304 hrs</Text>
                            </Col>
                            <Col style={projectItemStyle.itemProcess}>
                                <Text style={projectItemStyle.itemProcessText}>Est. 3000 hrs</Text>
                            </Col>
                        </Row>
                        <Row style={projectItemStyle.cardTag}>
                            <Col>
                                <View style={projectItemStyle.cardTagItem}>
                                    <Text style={projectItemStyle.cardTagTextItem}>Tags: </Text>
                                    <Text style={projectItemStyle.cardTagTextItem}>apollo, </Text>
                                    <Text style={projectItemStyle.cardTagTextItem}>Jeff, </Text>
                                    <Text style={projectItemStyle.cardTagTextItem}>arsopolis</Text>
                                </View>
                            </Col>
                        </Row>
                    </Body>
                </CardItem>
                <CardItem footer style={{paddingTop: 5}}>
                    <Body style={projectItemStyle.memberJoined}>
                        <Row>
                            <Col>
                                <Text style={{ fontSize: 16, color: '#232323', fontWeight: '400' }}>18 members joined</Text>
                            </Col>
                        </Row>
                        <List style={projectItemStyle.memberList}>
                            <ListItem avatart style={projectItemStyle.memberItem}> 
                                <Left>
                                    <Thumbnail style={projectItemStyle.memberImage} source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
                                </Left>
                                <Label style={projectItemStyle.statusMemberProcess}>0</Label>
                            </ListItem>
                            <ListItem avatart style={projectItemStyle.memberItem}> 
                                <Left>
                                    <Thumbnail style={projectItemStyle.memberImage} source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
                                </Left>
                                <Label style={projectItemStyle.statusMemberProcess}>0</Label>
                            </ListItem>
                            <Label style={projectItemStyle.viewMore}>...</Label>
                        </List>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default ProjectItem