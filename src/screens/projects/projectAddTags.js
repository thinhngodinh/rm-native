import {compose} from 'redux';
import {connect} from 'react-redux';
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
            paddingLeft: 7,
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
            fontSize: 12,
            marginRight: 10,
            fontWeight: '300'
        },
        removeTag: {
            fontSize: 16,
            paddingRight: 0
        }
    }
);

class ProjectsAddTagsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.removeTagItem = this.removeTagItem.bind(this);
    }

    componentWillMount() {
        this.setState({
            project: this.props.navigation.getParam('projectInfo')
        })
    }

    submitForm = values => {
        let tagSubmit = {
            tags: this.state.project.tags
        }

        let tagValue = values.tagName.trim();

        tagSubmit.tags.push(tagValue)

        this.setState({
            project: {
                ...this.state.project,
                tags: tagSubmit.tags
            }
        }, ()=> {
            const projectId = this.state.project.id;
            const tagData   = this.state.project.tags;
            const updateTagInforData = {projectId, tagData};
            this.props.dispatch(userActions.updateProjectTags.invoke(updateTagInforData));
        })

    }

    removeTagItem() {
        console.log('remove tag');
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
                            {listTags.length > 0 && listTags.map((tagItems, index)=> (
                                <Item style={addTagStyle.wrapperTag} key={index}>
                                    <Text style={[addTagStyle.tagItem]}>{tagItems}</Text>
                                    <Icon 
                                        onPress={this.removeTagItem}
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


export default compose(
    reduxForm({
        form: 'projectAddTag',
        fields: ['tagName'],
        validate: (values, props) => validateService(values, props, {
            required: ['tagName']
        })
    }),
    connect(state => ({
        project: state.projects
    }))
)(ProjectsAddTagsScreen);
