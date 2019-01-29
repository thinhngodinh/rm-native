import React from "react";
import {compose} from 'redux';
import {connect} from 'react-redux';
// third-party import
import {
    Container,
    Header,
    Left,
    Right, Body, Title, Button, Icon, Content, Text,
    SwipeRow, View,
    Spinner, List, ListItem
} from 'native-base';
import { StyleSheet, ListView } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import { reduxForm } from 'redux-form';
import { userActions } from './../../static/actions/userActions';
// Header Config
// Footer Config
import MasterLayout from '../_layout/layout';

const addTaskStyle = StyleSheet.create(
    {
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
            paddingLeft: 5,
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
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => {
            console.log(r1, r1)
            return r1 !== r2 
        }
        });
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
        console.log('issuesArr', issuesArr.length);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => {
            console.log('r1, r1', r1, r2)
            return r1 !== r2 }});
        
        return (
            <MasterLayout
                headerProps={{
                    props: {},
                    isBack: true,
                    title: project.name,
                    RightCmp: () => (
                        <Button
                            onPress={() => {
                                LayoutAnimation.easeInEaseOut();
                                this._handleCpllapsedFilter(true);
                            }}
                            transparent>
                            <Icon name='md-search' style={{ color: '#fff' }} />
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
                                {issuesArr.length <= 0 &&
                                    <Spinner
                                        color={!issuesArr ? '#04b6fe' : '#fff'} />
                                }
                                {issuesArr.length > 0 &&
                                    <List
                                        leftOpenValue={75}
                                        disableRightSwipe={true}
                                        rightOpenValue={-200}
                                        dataSource={this.ds.cloneWithRows(issuesArr)}
                                        renderRow={issuesItem =>
                                        <ListItem style={addTaskStyle.taskItem}>
                                            <Text>{issuesItem.status_id}</Text>
                                            <Text style={{fontSize: 14, width: '100%'}} numberOfLines={1}> {issuesItem.subject} </Text>
                                            {issuesItem.status_id == STATUS.NEW.id &&
                                            <Text style={addTaskStyle.statusTag}>{STATUS.NEW.name}</Text>
                                            }
                                            {issuesItem.status_id == STATUS.INPROGRESS.id &&
                                            <Text style={addTaskStyle.statusTag}>{STATUS.INPROGRESS.name}</Text>
                                            }
                                            {issuesItem.status_id == STATUS.CLOSED.id &&
                                            <Text style={addTaskStyle.statusTag}>{STATUS.CLOSED.name}</Text>
                                            }
                                        </ListItem>}
                                        renderRightHiddenRow={(issuesItem, secId, rowId, rowMap) =>
                                            <View style={addTaskStyle.wrapperTaskAction}>
                                                {issuesItem.status_id === STATUS.INPROGRESS.id || issuesItem.status_id === STATUS.CLOSED.id &&
                                                <Button style={addTaskStyle.btnAction} full danger onPress={() => alert(secId, rowId, rowMap)}>
                                                    <Icon style={{width: 20}} active name="md-snow" />
                                                    <Text style={addTaskStyle.btnText}>{STATUS.NEW.name}</Text>
                                                </Button>
                                                }
                                                {issuesItem.status_id === STATUS.NEW.id || issuesItem.status_id === STATUS.CLOSED.id &&
                                                <Button style={addTaskStyle.btnAction} full danger onPress={() => alert(secId, rowId, rowMap)}>
                                                    <Icon style={{width: 20}} active name="md-settings" />
                                                    <Text style={addTaskStyle.btnText}>{STATUS.INPROGRESS.name}</Text>
                                                </Button>
                                                }
                                                {issuesItem.status_id === STATUS.INPROGRESS.id || issuesItem.status_id === STATUS.NEW.id &&
                                                <Button style={addTaskStyle.btnAction} full danger onPress={() => alert(secId, rowId, rowMap)}>
                                                    <Icon style={{width: 20}} active name="md-checkmark" />
                                                    <Text style={addTaskStyle.btnText}>{STATUS.CLOSED.name}</Text>
                                                </Button>
                                                }
                                            </View>
                                        }
                                    />
                                }
                            </Row>
                        </Grid>
                    </React.Fragment>
                }}             
            />
        )
    }
}

const mapStateToProps = (state) => ({
    issuesList: state.project.projectIssues.issues
})

export default compose(
    reduxForm({
        form: 'projectAddTask'
    }),
    connect(mapStateToProps)
)(ProjectsAddTasksScreen);
