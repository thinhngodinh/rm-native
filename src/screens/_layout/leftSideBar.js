import React from 'react';
import { ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button, Icon, Text, Thumbnail } from 'native-base';


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
        console.log(props.user)
        return (
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <SafeAreaView style={styles.container} forceInset={{ top: 'never', horizontal: 'never' }}>
                    <ImageBackground
                        source={require('../../assets/login_bg.jpg')}
                        blurRadius={1}
                        style={{ height: 160 }}>
                        <Row>
                        </Row>
                        <Row style={{ justifyContent: 'space-around' }}>
                            <Col size={7} style={{padding: 5}}>
                                {props.user && <Text style={{ color: '#ffffff' }}>{props.user.first_name} {props.user.last_name}</Text>}
                                {props.user && <Text style={{ color: '#d1d1d1', fontSize: 13, fontWeight: '100' }}>{props.user.email}</Text>}
                                {props.user && <Text style={{ color: '#d1d1d1', fontSize: 13 }}> ID #{props.user.id}</Text>}
                            </Col>
                            <Col size={3} style={{padding: 5}}>
                                {props.user && <Thumbnail size={15} square source={{ uri: props.user.avatar }} style={{ borderRadius: 3 }}></Thumbnail>}
                            </Col>
                        </Row>
                    </ImageBackground>
                    <DrawerItems
                        activeBackgroundColor='#ef2f16'
                        labelStyle={{ color: '#ffffff' }}
                        itemsContainerStyle={{ width: '100%' }}
                        {...props} />
                    <Button
                        bordered
                        block
                        danger
                        onPress={this._dispatchLogout}
                        style={{margin: 10, marginTop: 30}}>
                        <Icon name='md-power' />
                        <Text>Logout</Text>
                    </Button>
                    
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
