import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { connect } from 'react-redux';

import { stacks } from '../screenConst';
import LoginForm from './loginForm';
import pageStyle from './loginStyle';

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }
    
    componentDidUpdate() {
        if (this.props.user.info){
            setTimeout(() => this.props.navigation.navigate(stacks.app), 1500);
        }
    }

    render() {
        const {app} = this.props;
        return (
            <ImageBackground
                source={require('./assets/login_bg.jpg')}
                blurRadius={1}
                style={pageStyle.screen}>
                <View style={pageStyle.appLogo}>
                    <Image
                        resizeMode='contain' 
                        style={{maxWidth: 250, width: '80%'}}
                        source={require('./assets/logo-rm.png')} />
                </View>
                <View style={pageStyle.formContainer}>
                    <LoginForm />
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