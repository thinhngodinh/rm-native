import React from "react";
import {compose} from 'redux';
import {connect} from 'react-redux';
// third-party import
import {
   Button, Icon,Text,
    SwipeRow, View
} from 'native-base';
import { StyleSheet, ListView } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import { reduxForm } from 'redux-form';
import { userActions } from './../../static/actions/userActions';
// Header Config
// Footer Config
import MasterLayout from '../_layout/layout';

import LoadingModal from '../_commonCmp/loadingModal';

const addTaskStyle = StyleSheet.create(
    {
        swipeRowWrap: {
            display: 'flex',
            width: '100%',
            paddingTop: 0,
            paddingBottom: 0
        },
        rowTaskContainer: {
            flexWrap: 'wrap',
            paddingLeft: 5,
            paddingRight: 5
        },
        wrapperTaskAction: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
        taskItem: {
            flexWrap: 'wrap',
            paddingTop: 10,
            paddingBottom: 10,
            flex: 1
        },
        statusTag: {
            fontSize: 10,
            width: '100%',
            color: '#04b6fe',
            flex: 1
        },
        btnAction: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: 70,
            height: 50,
            marginLeft: 2
        },
        btnText: {
            fontSize: 10,
            width: 70,
            paddingLeft: 0,
            paddingRight: 0,
            textAlign: 'center'
        }
    }
);

const STATUS = {
    NEW: {
        id: 1,
        name: 'New'
    },
    INPROGRESS: {
        id: 2,
        name: 'In Progress'
    },
    RESOLVED: {
        id: 3,
        name: 'Resolved'
    },
    FEEDBACK: {
        id: 4,
        name: 'Feedback'    
    },
    CLOSED: {
        id: 5,
        name: 'Closed'    
    }
};

class ProjectsAddTasksScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.setState({
            project: this.props.navigation.getParam('projectInfo')
        }, () =>{
            const projectId = this.state.project.id;
            this.props.dispatch(userActions.getProjectIssues.invoke({projectId}))
        })
    }

    _handleViewMoreIssues = (e) => {
        const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
        if (
            Math.round(contentOffset.y) === Math.round(contentSize.height - layoutMeasurement.height)
            && contentSize.height > layoutMeasurement.height) {
            const { dispatch } = this.props;
            const projectId = this.state.project.id;
            dispatch(userActions.loadMoreIssues.invoke({projectId}));
        }
    };


    render() {
        console.log('this data', this);
        const { project } = this.state;
        const issuesArr = this.props.issuesList;
        const loadingData= this.props.loadingData;
        return (
            <MasterLayout
                headerProps={{
                    props: {},
                    isBack: true,
                    title: project.name,
                    RightCmp: () => (
                        <Button transparent>
                            <Icon name='md-add' style={{ color: '#fff' }} />
                        </Button>
                    )
                }}
                contentProps={{
                    onScrollHandler: this._handleViewMoreIssues,
                    ContentCmp: () =>
                    <React.Fragment>
                        <Grid>
                            <Row>
                                <Text style={{ marginTop: 10, paddingLeft: 10 }}>Project Add Task Form</Text>
                            </Row>
                            <Row style={addTaskStyle.rowTaskContainer}>
                                <LoadingModal
                                    isLoading={loadingData} />
                                {issuesArr.length > 0 && issuesArr.map((issuesItem, index) => (
                                    <SwipeRow
                                        key={index}
                                        leftOpenValue={75}
                                        disableRightSwipe={true}
                                        rightOpenValue={-200}
                                        style={addTaskStyle.swipeRowWrap}
                                        body={
                                            <View style={addTaskStyle.taskItem}>
                                                <Text style={{fontSize: 14, width: '100%'}} numberOfLines={1}>{issuesItem.subject}</Text>
                                                {issuesItem.status_id == STATUS.NEW.id &&
                                                    <Text style={addTaskStyle.statusTag}>{STATUS.NEW.name} - {issuesItem.closed_on}</Text>
                                                }
                                                {issuesItem.status_id == STATUS.INPROGRESS.id &&
                                                    <Text style={addTaskStyle.statusTag}>{STATUS.INPROGRESS.name} - {issuesItem.closed_on}</Text>
                                                }
                                                {issuesItem.status_id == STATUS.CLOSED.id &&
                                                    <Text style={addTaskStyle.statusTag}>{STATUS.CLOSED.name} - {issuesItem.closed_on}</Text>
                                                }
                                            </View>
                                        }
                                        right={
                                            <View style={addTaskStyle.wrapperTaskAction}>
                                                {issuesItem.status_id === STATUS.INPROGRESS.id || issuesItem.status_id === STATUS.CLOSED.id &&
                                                <Button style={addTaskStyle.btnAction} full danger onPress={() => alert("Update status task to New")}>
                                                    <Icon style={{width: 20}} active name="md-snow" />
                                                    <Text style={addTaskStyle.btnText}>{STATUS.NEW.name}</Text>
                                                </Button>
                                                }
                                                {issuesItem.status_id === STATUS.NEW.id || issuesItem.status_id === STATUS.CLOSED.id &&
                                                <Button style={addTaskStyle.btnAction} full danger onPress={() => alert("Update status task to In Progress")}>
                                                    <Icon style={{width: 20}} active name="md-settings" />
                                                    <Text style={addTaskStyle.btnText}>{STATUS.INPROGRESS.name}</Text>
                                                </Button>
                                                }
                                                {issuesItem.status_id === STATUS.INPROGRESS.id || issuesItem.status_id === STATUS.NEW.id &&
                                                <Button style={addTaskStyle.btnAction} full danger onPress={() => alert("Update status task to Closed")}>
                                                    <Icon style={{width: 20}} active name="md-checkmark" />
                                                    <Text style={addTaskStyle.btnText}>{STATUS.CLOSED.name}</Text>
                                                </Button>
                                                }
                                            </View>
                                        }
                                    />
                                ))}
                            </Row>
                        </Grid>
                    </React.Fragment>
                }}             
            />
        )
    }
}

const mapStateToProps = (state) => ({
    issuesList: state.project.projectIssues.issues,
    loadingData: state.project.loadingData
})

export default compose(
    reduxForm({
        form: 'projectAddTask'
    }),
    connect(mapStateToProps)
)(ProjectsAddTasksScreen);
