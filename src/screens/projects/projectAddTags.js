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
import LoadingModal from '../_commonCmp/loadingModal';

import { userActions, projectActions } from './../../static/actionsIndex';

const addTagStyle = StyleSheet.create(
    {
        formWrapper: {
            paddingTop: 20
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
        noTag: {
            color: '#00000030'
        },
        removeTag: {
            fontSize: 18,
            padding: 5
        }
    }
);

class ProjectsAddTagsScreen extends React.Component {

    componentWillMount() {
        const project = this.props.navigation.getParam('projectInfo');
        this._project = project;
        this.props.dispatch(projectActions.updateTag.invoke({
            projectId: project.id,
            tagData: project.tags
        }))
    }

    submitForm = values => {
        if(!values.tagName) {
            return;
        }
        const tagSubmit = Array.from(this.props.projectTag);
        // tagSubmit.concat(this.props.projectTag)
        tagValue = values.tagName.trim().split(',');
        tagSubmit.push(...tagValue);
        this._updateTag(tagSubmit);
    }

    removeTagItem(index) {
        const listTags = Array.from(this.props.projectTag);
        listTags.splice(index, 1);
        this._updateTag(listTags)
    }

    _updateTag(tagSubmit) {
        const {dispatch} = this.props;
        dispatch(userActions.updateProjectTags.invoke({
            projectId: this._project.id, 
            tagData: tagSubmit}));
        
        dispatch(reset('projectAddTag'));
    }

    render() {
        const { handleSubmit, loadingData, projectTag } = this.props;
        console.log('render', projectTag)
        return (
            <Container>
                <LoadingModal
                    isLoading={loadingData} />
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
                        <Title style={{ color: '#fff' }}>{this._project.name}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='md-notifications-outline' style={{ color: '#fff' }} />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Grid>
                        <Row>
                            <Text style={{ marginTop: 10 }}>Add Tags To {this._project.name}</Text>
                        </Row>
                        <Row>
                            <Form style={addTagStyle.formWrapper}>
                                <View style={{flex: 1}}>
                                    <Field
                                        label='Tag Name'
                                        name='tagName'
                                        placeholder='Input tag name'
                                        component={RenderInput}
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
                            {projectTag && projectTag.length > 0 && projectTag.map((tagItems, index)=> (
                                <Item style={addTagStyle.wrapperTag} key={index}>
                                    <Text style={[addTagStyle.tagItem]}>{tagItems}</Text>
                                    <Icon 
                                        onPress={() => this.removeTagItem(index)}
                                        style={addTagStyle.removeTag}
                                        name='md-close'></Icon>
                                </Item>
                            ))}
                            {projectTag && projectTag.length === 0 && <Text style={[addTagStyle.noTag, addTagStyle.tagItem]}>There's no tag in {this._project.name} Project yet.</Text> }
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}


export default compose(
    reduxForm({
        form: 'projectAddTag',
        fields: ['tagName'],
        validate: (values, props) => validateService(
            values, props, 
            {
                required: ['tagName']
            })
    }),
    connect(state => ({
        loadingData: state.project.loadingData,
        projectTag: state.project.projectTag
    }))
)(ProjectsAddTagsScreen);

