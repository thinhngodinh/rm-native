import React from "react";
import { View, LayoutAnimation, NativeModules } from 'react-native'

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
import ConnectionStatus from '../_commonCmp/connectionStatus';

// Content Config
import ProjectListContent from './components/projectListContent';

// Footer Config
import ProjectFooterTab from './components/projectFooter';
import { userActions } from './../../static/actionsIndex';

import ProjectItem from './projectItem/projectItem';
import MasterLayout from '../_layout/layout';


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
        dispatch(userActions.getProjectList.invoke());
    }

    _handleViewMore = (e) => {
        const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
        const { project: { loadingData } } = this.props;

        if (
            !loadingData
            && Math.round(contentOffset.y) === Math.round(contentSize.height - layoutMeasurement.height)
            && contentSize.height > layoutMeasurement.height) {
            const { dispatch } = this.props;
            dispatch(userActions.loadMoreProjects.invoke());
        }
    };

    _handleCpllapsedFilter(isShow) {
        this.setState({
            isFilterCollapsed: isShow
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
            <MasterLayout
                headerProps={{
                    props: {},
                    title: `${this._getProjectTypeLabel(filter.status)} Projects`,
                    RightCmp: () => (
                        <React.Fragment>
                            <Button
                                onPress={() => {
                                    LayoutAnimation.easeInEaseOut();
                                    this._handleCpllapsedFilter(true);
                                }}
                                transparent>
                                <Icon name='md-search' style={{ color: '#fff' }} />
                            </Button>
                        </React.Fragment>
                    )
                }}
                contentProps={{
                    onScrollHandler: this._handleViewMore,
                    refreshControlHandler: this._onRefresh,
                    refreshing: refreshing,
                    ContentCmp: () =>
                        <React.Fragment>
                            {isFilterCollapsed &&
                                <ProjectFilter
                                    isFilterCollapsed={() => this._handleCpllapsedFilter(false)}
                                    filter={filter}
                                    dispatch={dispatch.bind(this)} />
                            }
                            <ProjectListContent
                                projectListData={projectListData}
                                loadingData={loadingData}
                            />
                        </React.Fragment>
                }}
                footerProps={{
                    FooterCmp: () => <React.Fragment>
                        <ProjectFooterTab
                            projectTypes={projectTypes}
                            status={filter.status} />
                    </React.Fragment>
                }}
            />
        );
    }
}

const mapStateToProps = state => ({
    project: state.project
});

export default connect(mapStateToProps)(ProjectsScreen);;
