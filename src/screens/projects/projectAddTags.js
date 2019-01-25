import {compose} from 'redux';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import React from "react";
// third-party import
import { StyleSheet } from 'react-native';

import {
    Container,
    Header,
    Left,
    Right, Body, Title, Button, Icon, Content, Text, Form,
    View,
    Item
} from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { Field, reduxForm } from 'redux-form';

import { RenderInput } from './../_commonCmp/renderFormField';
import validateService from './../_commonCmp/validateFormField/validateField';

import { userActions } from './../../static/actions/userActions';

const addTagStyle = StyleSheet.create(
    {
        formWrapper: {
            marginTop: 20
        },
        wrapperBtn: {
            flex: 1,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
        tagLabel: {
            display: 'flex',
            width: '100%',
        },
        wrapperTag: {
            borderRadius: 20,
            paddingLeft: 10,
            paddingTop: 5,
            paddingRight: 7,
            paddingBottom: 7,
            borderBottomWidth: 0,
            backgroundColor: '#e0e0e0',
            marginLeft: 0,
            marginTop: 5,
            marginRight: 5,
            marginBottom: 5
        },
        tagItem: {
            fontSize: 14,
            marginRight: 10,
            marginLeft: 10,
            fontWeight: '300'
        },
        removeTag: {
            fontSize: 18,
            padding: 5
        }
    }
);

class ProjectsAddTagsScreen extends React.Component {

    componentWillMount() {
        this.setState({
            project: this.props.navigation.getParam('projectInfo')
        })
    }

    submitForm = values => {
        let tagSubmit = this.state.project.tags;
        tagValue = values.tagName.trim().split(',');
        tagSubmit.push(...tagValue)
        this.setState({
            project: {
                ...this.state.project,
                tags: tagSubmit
            }
        }, ()=> {
            this._updateTag();
        })

    }

    _updateTag() {
        const {dispatch} = this.props;
        dispatch(userActions.updateProjectTags.invoke({
            projectId: this.state.project.id, 
            tagData: this.state.project.tags}));
        
        dispatch(reset('projectAddTag'));
    }

    removeTagItem(index) {
        let listTags = this.state.project.tags;
        listTags.splice(index, 1);
        console.log('remove tag', listTags[index], listTags);
        this.setState({
            project: {
                ...this.state.project,
                tags: listTags
            }
        }),
        () => {
            this._updateTag();
        };
    }

    render() {
        const { project } = this.state;
        const { handleSubmit } = this.props;
        const listTags = project.tags;
        console.log('project info', project);
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
                    <Body>
                        <Title style={{ color: '#fff' }}>{project.name}</Title>
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
                    <Grid>
                        <Row>
                            <Text style={{ marginTop: 10 }}>Project Add Tags Form</Text>
                        </Row>
                        <Row>
                            <Form style={addTagStyle.formWrapper}>
                                <View style={{flex: 1}}>
                                    <Field
                                        label='Tag Name'
                                        name='tagName'
                                        placeholder='Input tag name'
                                        component={RenderInput}
                                        style={addTagStyle.wrapperIpt}
                                        />
                                </View>
                                <View style={addTagStyle.wrapperBtn}>
                                    <Button
                                        onPress={handleSubmit(this.submitForm)} 
                                        primary small>
                                        <Text>Add Tag</Text>
                                    </Button>
                                </View>
                            </Form>
                        </Row>
                        <Row style={{flexWrap: 'wrap'}}>
                            <Text style={addTagStyle.tagLabel}>List tags</Text>
                            {listTags.length && listTags.map((tagItems, index)=> (
                                <Item style={addTagStyle.wrapperTag} key={index}>
                                    <Text style={[addTagStyle.tagItem]}>{tagItems}</Text>
                                    <Icon 
                                        onPress={() => this.removeTagItem(index)}
                                        style={addTagStyle.removeTag}
                                        name='md-close'></Icon>
                                </Item>
                            ))}
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}


export default reduxForm({
    form: 'projectAddTag',
    fields: ['tagName'],
    validate: (values, props) => validateService(values, props, {
        required: ['tagName']
    })
})(ProjectsAddTagsScreen);
