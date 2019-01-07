import React from "react";
// third-party import

import { Container, Header, Left, Right, Body, Title, Button, Icon, Content, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import ProjectItem from './projectItem/projectItem';

// Header Config
// Footer Config

class ProjectsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Projects',
        drawerIcon: () => <Icon name='md-folder' style={{color: '#fff'}} />
    }

    render() {
        return (
            <Container>
                <Header
                    iosBarStyle='light-content'
                    androidStatusBarColor='#232323'
                    noShadow
                    style={{ backgroundColor: '#333' }}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.toggleDrawer()}>
                            <Icon name="menu" style={{ color: '#fff' }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff', textAlign: "center" }}>Projects</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Grid>
                        <Row>
                            <Text style={{marginTop: 10, paddingLeft: 10}}>Current 1 Projects To Show</Text>
                        </Row>
                        <Row style={{ marginTop: 20, paddingLeft: 10, paddingRight: 10}}>
                            <ProjectItem />
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

export default ProjectsScreen;
