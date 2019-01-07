import React from 'react';
import { ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button, Icon, Text } from 'native-base';


import { connect } from 'react-redux';

// src import
import { userActions } from '../../static/actionsIndex';
import { stacks } from '../screenConst';


class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this._dispatchLogout = this._dispatchLogout.bind(this);
        Text.defaultProps = {
            uppercase: false
        };
    }

    _dispatchLogout(e) {
        this.props.dispatch(userActions.logout.invoke());
        setTimeout(() => this.props.navigation.navigate(stacks.auth), 1500);
    }

    render() {
        const { props } = this;

        return (
            <ScrollView contentContainerStyle={{flex: 1}}>
                <SafeAreaView style={styles.container} forceInset={{ top: 'never', horizontal: 'never' }}>
                    <Grid style={{justifyContent: 'space-around'}}>
                        <ImageBackground
                            source={require('../../assets/login_bg.jpg')}
                            blurRadius={1}
                            style={{height: 150}}>
                            <Row>
                            </Row>
                            <Row style={{justifyContent: 'space-around'}}>
                                {props.user && <Text style={{color: '#ffffff'}}>{props.user.first_name} {props.user.last_name}</Text>}
                                <Button 
                                    onPress={this._dispatchLogout} >
                                    <Icon name='md-power' />
                                </Button>
                            </Row>
                        </ImageBackground>
                        <Row style={{flexGrow: 9}}>
                            <DrawerItems
                                activeBackgroundColor='#ef2f16'
                                labelStyle={{color: '#ffffff'}}
                                itemsContainerStyle={{width: '100%'}}
                                { ...props} />
                        </Row>
                    </Grid>
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = state => ({
    user: state.user.info
});

export default connect(mapStateToProps)(SideBar);
