import React from "react";
// third-party import

import {
    Container,
    Header,
    Footer,
    Left,
    Right, Body, Title, Button, Icon, Content, Text
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import ProjectItem from './projectItem/projectItem';

// Header Config
// Footer Config
import ProjectFooterTab from './components/projectFooter';


class ProjectsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Projects',
        drawerIcon: () => <Icon name='md-folder' style={{ color: '#fff' }} />
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
                            <Icon name="md-menu" style={{ color: '#fff' }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff' }}>Projects</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='md-search' style={{ color: '#fff' }} />
                        </Button>
                        <Button transparent>
                            <Icon name='ios-notifications-outline' style={{ color: '#fff' }} />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Grid>
                        <Row>
                            <Text style={{ marginTop: 10, paddingLeft: 10 }}>Current 4 Projects To Show</Text>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <ProjectItem key={1} />
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <ProjectItem key={2} />
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <ProjectItem key={3} />
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <ProjectItem key={4} />
                        </Row>
                    </Grid>
                </Content>
                <Footer>
                    <ProjectFooterTab />
                </Footer>
            </Container>
        );
    }
}

export default ProjectsScreen;
