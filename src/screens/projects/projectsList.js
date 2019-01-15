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
import moment from 'moment';

// Header Config
import ProjectFilter from './components/projectFilter'

// Footer Config
import ProjectFooterTab from './components/projectFooter';
import { userActions } from './../../static/actionsIndex';

class ProjectsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initFilter: {
                status: 'working',
                order_by: 'percent_complete',
                order: 'DESC',
                from_date: moment().format('YYYY-MM-DD'),
                to_date: moment().subtract(1, 'month').format('YYYY-MM-DD'),
                page: 1,
                limit: 5,
            },
            projectTypes: [
                {
                    icon: 'md-code-working',
                    label: 'Working',
                    type: 'working'
                },
                {
                    icon: 'md-clipboard',
                    label: 'Up-Next',
                    type: 'upnext'
                },
                {
                    icon: 'md-done-all',
                    label: 'Done',
                    type: 'done'
                }

            ]
        }
    }

    _getProjectTypeLabel(status) {
        const foundType = this.state.projectTypes.filter(pType => pType.type === status);
        return foundType ? foundType[0].label : '';
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(userActions.changeProjectFilter.invoke(
            this.state.initFilter
        ));
    }


    render() {
        const {
            dispatch,
            project: { 
                filter,
                projectList: projectListData
            } 
        } = this.props;
        const { projectTypes} = this.state;
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
                    <Body style={{flex: 2}}>
                        <Title style={{ color: '#fff' }}>{this._getProjectTypeLabel(filter.status)} Projects</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='md-search' style={{ color: '#fff' }} />
                        </Button>
                        <Button transparent>
                            <Icon name='md-notifications-outline' style={{ color: '#fff' }} />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <ProjectFilter dispatch={dispatch.bind(this)} />
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
                    <ProjectFooterTab
                        projectTypes={projectTypes}
                        status={filter.status} />
                </Footer>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    project: state.project
});

export default connect(mapStateToProps)(ProjectsScreen);;
