import React from "react";
import { View, Text, Image, ImageBackground, StatusBar } from "react-native";
import { connect } from 'react-redux';

import { stacks } from '../screenConst';
import LoginForm from './loginForm';
import VerifyToken from './loginVerifyToken';
import pageStyle from './loginStyle';

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
        headerTintColor: '#000'
    }

    render() {
        const {app, user, navigation} = this.props;
        if (user.info){
            setTimeout(() => navigation.navigate(stacks.app), 1500);
        }
        return (
            <ImageBackground
                source={require('./assets/login_bg.jpg')}
                blurRadius={1}
                style={pageStyle.screen}>
                <StatusBar
                    barStyle='light-content' />
                <View style={pageStyle.appLogo}>
                    <Image
                        resizeMode='contain' 
                        style={{maxWidth: 250, width: '80%'}}
                        source={require('./assets/logo-rm.png')} />
                </View>
                <View style={pageStyle.formContainer}>
                    {!app.renderLoginForm && <VerifyToken />}
                    {app.renderLoginForm &&<LoginForm />}
                </View>
                <View style={pageStyle.appFooter}>
                    <Text style={pageStyle.defaultTextColor}>Copyright 2015 © Elinext Group ™</Text>
                </View>
            </ImageBackground>
        );
    }
}
const mapStateToProps = state => ({
    app: state.app,
    user: state.user
});
export default connect(mapStateToProps)(LoginScreen)