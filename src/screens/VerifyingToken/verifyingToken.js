import React from "react";
import { View, Text } from "react-native";
import { Container, Header, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';

import { DoubleBounce } from 'react-native-loader';

import { appActions } from '../../static/actionsIndex';

class VerifyingToken extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(appActions.verifyCurrentToken.invoke());
    }

    render () {
        return(
            <Container style={{backgroundColor: '#D9d9d9'}}>
                <Header transparent />
                <Content>
                    <Grid>
                        <Row style={{alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
                            <DoubleBounce size={20} color="#ff4d4d" />
                        </Row>
                        <Row style={{paddingTop: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Validating User Info</Text>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

export default connect(null, null)(VerifyingToken);
