import React from "react";
// third-party import

import { Container, Header, Left, Right, Body, Title, Footer, FooterTab, Button, Icon, Content, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

// Header Config
// Footer Config

class MasterLayout extends React.Component {
    
    render() {
        return (
            <Container>
                <Header
                    iosBarStyle='light-content'
                    androidStatusBarColor='#232323'
                    noShadow
                    style={{backgroundColor: '#333'}}>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" style={{color: '#fff'}} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: '#fff', textAlign: "center"}}>Dashboard</Title>
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

export default MasterLayout;
