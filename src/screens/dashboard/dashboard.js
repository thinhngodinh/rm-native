import React from 'react';
import { Platform } from 'react-native'
// third-party import
import { connect } from 'react-redux';
import { Container, Header, Left, Right, Body, Title, Button, Icon, Content, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

// src import
import { userActions } from '../../static/actionsIndex';
import { stacks } from '../screenConst';

const headerProps = Platform.select({
    ios: () => ({
        iosBarStyle: 'dark-content'
    }),
    android: () => ({
        androidStatusBarColor: '#232323'
    })
})

class DashboardScreen extends React.Component {
    constructor(props) {
        super(props);
        this._dispatchLogout = this._dispatchLogout.bind(this);
        Text.defaultProps = {
            uppercase: false
        };
    }

    static navigationOptions = {
        drawerLabel: 'Dashboard',
    }

    _dispatchLogout(e) {
        this.props.dispatch(userActions.logout.invoke());
    }

    componentDidUpdate() {
        const { app, navigation } = this.props;
        if (!app.session) {
            navigation.navigate(stacks.auth);
        }
    }

    render() {
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
                            onPress={() => this.props.navigation.toggleDrawer()}>
                            <Icon name="menu" style={{ color: '#fff' }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff', textAlign: "center" }}>Dashboard</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Grid>
                        <Row>
                            <Button onPress={this._dispatchLogout}>
                                <Icon name='md-log-out' />
                                <Text>Logout</Text>
                            </Button>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    app: state.app
});

export default connect(mapStateToProps)(DashboardScreen);
