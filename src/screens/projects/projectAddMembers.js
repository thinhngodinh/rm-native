import React from "react";
// third-party import

import {
    Container,
    Header,
    Footer,
    Left,
    Right, Body, Title, Button, Icon, Content, Text
} from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';

// Header Config
// Footer Config
import MemberList from './components/memberList';


class ProjectsAddMembersScreen extends React.Component {

    componentWillMount() {
        this.setState({
            project: this.props.navigation.getParam('projectInfo')
        })
    }

    render() {
        const { project } = this.state;
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
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name='ios-arrow-back' style={{ color: '#fff' }} />
                        </Button>
                    </Left>
                    <Body style={{flexGrow: 1}}>
                        <Title style={{ color: '#fff' }}>{project.name}</Title>
                    </Body>
                    <Right style={{flexShrink: 0}}>
                        <Button transparent>
                            <Icon name='md-search' style={{ color: '#fff' }} />
                        </Button>
                        <Button transparent>
                            <Icon name='md-notifications-outline' style={{ color: '#fff' }} />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Grid>
                        <Row>
                            <Text style={{ marginTop: 10, paddingLeft: 10 }}>Project Add Members Form</Text>
                        </Row>
                    </Grid>
                    <MemberList members={project.members} />
                </Content>
            </Container>
        );
    }
}

export default ProjectsAddMembersScreen;
