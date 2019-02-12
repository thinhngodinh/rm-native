import React from "react";
import {compose} from 'redux';
import {connect} from 'react-redux';
// third-party import
import {
    Button, Icon,Text,
    SwipeRow, View, Form
} from 'native-base';
import { StyleSheet, Modal } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import { reduxForm, Field } from 'redux-form';
import { userActions } from './../../static/actions/userActions';
// Header Config
// Footer Config
import MasterLayout from '../_layout/layout';

import LoadingModal from '../_commonCmp/loadingModal';

import { RenderInput } from './../_commonCmp/renderFormField';

import validateService from './../_commonCmp/validateFormField/validateField';

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
        },
        formItem: {
            display: 'flex',
            width: '100%'
        },
        btnTask: {
            minWidth: 75,
            justifyContent: 'center'
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
        this.state = {
            addTaskForm: false
        };
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
            !this.props.loadingData &&
            Math.round(contentOffset.y) === Math.round(contentSize.height - layoutMeasurement.height)
            && contentSize.height > layoutMeasurement.height) {
            const { dispatch } = this.props;
            const projectId = this.state.project.id;
            dispatch(userActions.loadMoreIssues.invoke({projectId}));
        }
    };

    _onRefresh = () => {
        const projectId = this.state.project.id;
        this.props.dispatch(userActions.refreshProjectsIssues.invoke({projectId, isRefresh: true}));
    }

    showAddTaskForm(isShow) {
        this.setState({
            addTaskForm: isShow
        })
    }

    submitForm = values => {
        alert('Submit form add task');
        if(!values.taskTitle) {
            return;
        }
        console.log('value submit', values);
        this.showAddTaskForm(false)
    }

    render() {
        const { project } = this.state;
        const issuesArr = this.props.issuesList;
        const loadingData= this.props.loadingData;
        const handleSubmit = this.props.handleSubmit;
        return (
            <MasterLayout
                headerProps={{
                    props: {},
                    isBack: true,
                    title: project.name,
                    RightCmp: () => (
                        <Button 
                            onPress={() => this.showAddTaskForm(true)}
                            transparent>
                            <Icon name='md-add' style={{ color: '#fff' }} />
                        </Button>
                    )
                }}
                contentProps={{
                    onScrollHandler: this._handleViewMoreIssues,
                    refreshControlHandler: this._onRefresh,
                    ContentCmp: () =>
                    <React.Fragment>
                        <Grid>
                            {this.state.addTaskForm &&
                                <Modal
                                    transparent={false}
                                    visible={this.state.addTaskForm}
                                    onRequestClose={() => this.showAddTaskForm(false)}
                                >
                                    <View style={{paddingLeft: 5, paddingRight: 10}}>
                                        <View style={addTaskStyle.formItem}>
                                            <Text style={{ marginTop: 10 }}>Add Task For {project.name}</Text>
                                        </View>
                                        <View style={[addTaskStyle.formItem, {marginTop: 20, flexDirection: 'row'}]}>
                                            <Form>
                                                <View style={addTaskStyle.formItem}>
                                                    <Field
                                                        label='Task Title'
                                                        name='taskTitle'
                                                        placeholder='Input task title'
                                                        component={RenderInput}
                                                        />
                                                </View>
                                                <View style={[addTaskStyle.formItem, {marginTop: 10, flexDirection: 'row', justifyContent: 'flex-end'}]}>
                                                    <Button
                                                        onPress={() => this.showAddTaskForm(false)}
                                                        style={[addTaskStyle.btnTask]}
                                                        primary small>
                                                        <Text>Cancel</Text>
                                                    </Button>
                                                    <Button
                                                        onPress={handleSubmit(this.submitForm)}
                                                        style={[addTaskStyle.btnTask, {marginLeft: 10}]}
                                                        primary small>
                                                        <Text>Save</Text>
                                                    </Button>
                                                </View>
                                            </Form>
                                        </View>
                                    </View>
                                </Modal>
                            }
                            <Row>
                                <Text style={{ marginTop: 10, paddingLeft: 5 }}>List Issues On Project</Text>
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
        form: 'projectAddTask',
        fields: ['taskTitle'],
        validate: (values, props) => validateService(
            values, props, 
            {
                required: ['taskTitle']
            }
        )
    }),
    connect(mapStateToProps)
)(ProjectsAddTasksScreen);
