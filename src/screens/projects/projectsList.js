import React from "react";
// third-party import
import { connect } from 'react-redux';

import {
    Container,
    Header,
    Footer,
    Left,
    Right, Body, Title, Button, Icon, Content, Text,
    Spinner
} from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import ProjectItem from './projectItem/projectItem';
// Header Config
// Footer Config
import ProjectFooterTab from './components/projectFooter';
import { projectActions } from './../../static/actionsIndex';

class ProjectsScreen extends React.Component {
    // static navigationOptions = {
    //     drawerLabel: 'Projects',
    //     drawerIcon: () => <Icon name='md-folder' style={{ color: '#fff' }} />
    // }

    componentWillMount() {
        this.props.dispatch(projectActions.fetchApiProjects.invoke())
    }

    render() {
        const projectListData = this.props.project.projectList;
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
                    {!projectListData &&
                        <Spinner color='#04b6fe'/>
                    }
                    <Grid>
                        {projectListData &&
                            <Row>
                                <Text style={{ marginTop: 10, paddingLeft: 10 }}>Total {projectListData.total_items} Projects</Text>
                            </Row>
                        }
                        {projectListData && projectListData.projects.map((project, index) =>
                            <Row style={{ marginTop: 20 }} key={index}>
                                <ProjectItem
                                    projectInfo={project}
                                />
                            </Row>
                        )}
                    </Grid>
                </Content>
                <Footer>
                    <ProjectFooterTab />
                </Footer>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    project: state.project
});

export default connect(mapStateToProps)(ProjectsScreen);;
