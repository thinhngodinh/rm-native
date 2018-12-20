import React from "react";
import { Form, Item, Input, Label, Icon, Button, Text } from 'native-base';
import { DoubleBounce, Pulse } from 'react-native-loader';

import { connect } from 'react-redux';

import { userActions } from '../../static/actionsIndex';
import pageStyle from './loginStyle';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this.state = {
            username: '',
            password: ''
        }
    }
    _handleUsernameChange(textInput) {
        this.setState({username: textInput})
    }

    _handlePasswordChange(textInput) {
        this.setState({password: textInput})
    }

    _handleSubmit() {
        const {dispatch} = this.props;
        dispatch(userActions.login.invoke(this.state));
    }

    render() {
        const { app } = this.props;
        return (
            <Form>
                <Item floatingLabel style={{marginRight: 15}}>
                    <Label>Username</Label>
                    <Input
                        onChangeText={this._handleUsernameChange}
                        editable={!app.fetchingApi}
                        autoCorrect={false}
                        keyboardType='email-address'
                        keyboardAppearance='dark'
                        style={{color: '#fff'}} />
                    <Icon active name='person' style={{color: '#fff'}}  />
                </Item>
                <Item floatingLabel style={{marginRight: 15}}>
                    <Label>Password</Label>
                    <Input
                        onChangeText={this._handlePasswordChange}
                        editable={!app.fetchingApi}
                        secureTextEntry={true} style={{color: '#fff'}} />
                    <Icon
                        active name='key' style={{color: '#fff'}}  />
                </Item>
                <Button
                    onPress={this._handleSubmit}
                    disabled={app.fetchingApi}
                    rounded danger style={pageStyle.loginButton}>
                    {app.fetchingApi && <DoubleBounce size={30} color="#ff6666" />}
                    {!app.fetchingApi && <Text style={pageStyle.loginButtonLabel}>SIGN IN</Text>}
                    
                </Button>
            </Form>
        );
    }
}

const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => ({
    app: state.app
});

export default connect(mapStateToProps)(LoginForm)