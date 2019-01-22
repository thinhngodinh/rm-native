import React from "react";
import { RefreshControl, View, LayoutAnimation, NativeModules } from 'react-native'

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
import moment, { duration } from 'moment';

// Header Config
import ProjectFilter from './components/projectFilter'

// Footer Config
import ProjectFooterTab from './components/projectFooter';
import { userActions } from './../../static/actionsIndex';

import ProjectItem from './projectItem/projectItem';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const initFilter = {
    status: 'working',
    order_by: 'percent_complete',
    order: 'desc',
    from_date: moment().subtract(1, 'month').format('YYYY-MM-DD'),
    to_date: moment().format('YYYY-MM-DD'),
    page: 1,
    tags: '',
    limit: 5
};

const configProjectTypes = [
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
];

class ProjectsScreen extends React.Component {
    constructor(props) {
        super(props);
        this._contentScroll = null;
        this.state = {
            initFilter: { ...initFilter },
            projectTypes: configProjectTypes,
            refreshing: false,
            isFilterCollapsed: false
        };
    }

    _onRefresh = () => {
        this.props.dispatch(userActions.refreshProjectsList.invoke());
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

    _handleViewMore = (e) => {
        const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
        const { project: { loadingData } } = this.props;

        if (
            !loadingData
            && Math.round(contentOffset.y) === Math.round(contentSize.height - layoutMeasurement.height)
            && contentSize.height > layoutMeasurement.height) {
            const { dispatch } = this.props;
            console.log('invoke load more action');
            dispatch(userActions.loadMoreProjects.invoke());
        }
    };

    _handleCpllapsedFilter(isShow) {
        this.setState({
            isFilterCollapsed:  isShow
        })
    }

    render() {
        const {
            dispatch,
            project: {
                filter,
                projectList: projectListData,
                loadingData,
                refreshing,
            }
        } = this.props;

        const { projectTypes, isFilterCollapsed } = this.state;
        return (
            <Container>
                <Header
                    iosBarStyle='light-content'
                    androidStatusBarColor='#232323'
                    style={{ backgroundColor: '#333' }}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.toggleDrawer()}>
                            <Icon name="md-menu" style={{ color: '#fff' }} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 2 }}>
                        <Title style={{ color: '#fff' }}>{this._getProjectTypeLabel(filter.status)} Projects</Title>
                    </Body>
                    <Right>
                        <Button
                            onPress={() => {
                                LayoutAnimation.easeInEaseOut();
                                this._handleCpllapsedFilter(true);
                            }}
                            transparent>
                            <Icon name='md-search' style={{ color: '#fff' }} />
                        </Button>
                        <Button transparent>
                            <Icon name='md-notifications-outline' style={{ color: '#fff' }} />
                        </Button>
                    </Right>
                </Header>
                <Content
                    innerRef={(ref) => { this._contentScroll = ref }}
                    onScroll={this._handleViewMore}
                    refreshControl={
                        <RefreshControl
                            tintColor='#04b6fe'
                            colors={['#04b6fe']}
                            refreshing={refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }>
                    {isFilterCollapsed &&
                        <ProjectFilter
                            isFilterCollapsed = {() => this._handleCpllapsedFilter(false)}
                            filter={filter}
                            dispatch={dispatch.bind(this)} />
                    }
                    <View style={{ marginTop: 5, minHeight: 350 }}>
                        {projectListData && projectListData.projects.map((project, index) =>
                            <ProjectItem
                                key={index}
                                projectInfo={project}
                            />
                        )}
                        {(loadingData || (projectListData && projectListData.total_pages > 0 && (projectListData.paged < projectListData.total_pages))) &&
                            <Spinner
                                color={loadingData ? '#04b6fe' : '#fff'} />
                        }
                        {projectListData && projectListData.total_pages > 0 && (projectListData.paged === projectListData.total_pages) &&
                            <Text style={{ color: '#00000050', paddingLeft: 16, paddingRight: 16 }}>All Projects are loaded.</Text>
                        }
                        {projectListData && projectListData.projects.length == 0 && !loadingData &&
                            <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Icon name='md-folder-open' style={{fontSize: 50, color: '#77777770'}}></Icon>
                                <Text style={{display: 'flex', width: '100%', textAlign: 'center', color: '#77777770'}}>No Project Found</Text>
                            </View>
                        }
                    </View>
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
