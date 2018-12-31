import React from "react";

// third-party import
import { connect } from 'react-redux';
import { Button, Icon, Content, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

// src import
import { userActions } from '../../static/actionsIndex';
import { stacks } from '../screenConst';

class DashboardScreen extends React.Component {
    constructor(props) {
        super(props);
        this._dispatchLogout = this._dispatchLogout.bind(this);
    }

    static navigationOptions = {
        header: null,
    }

    _dispatchLogout(e) {
        this.props.dispatch(userActions.logout.invoke());
    }

    componentDidUpdate() {
        console.log(this.props);
        const { app, navigation } = this.props;
        if (!app.session) {
            navigation.navigate(stacks.auth);
        }
    }

    render() {
        return (
            <Content>
                <Grid>
                    <Row style={{justifyContent: 'center'}}>
                        <Text>Dashboard Screen</Text>
                    </Row>
                    <Row style={{justifyContent: 'center'}}>
                        <Button onPress={this._dispatchLogout}>
                            <Icon name='md-log-out' />
                            <Text>Logout</Text>
                        </Button>
                    </Row>
                </Grid>
            </Content>
        );
    }
}

const mapStateToProps = state => ({
    app: state.app
});

export default connect(mapStateToProps)(DashboardScreen);
