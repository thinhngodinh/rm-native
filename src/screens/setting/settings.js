import React from "react";
// third-party import

import { Container, Header, Left, Right, Body, Title, Button, Icon, Content, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

// Header Config
// Footer Config

class SettingsScreen extends React.Component {
    
    static navigationOptions = {
        drawerLabel: 'Settings',
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
                        <Title style={{ color: '#fff', textAlign: "center" }}>Settings</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Grid>
                        <Row>
                            <Text>Settings Screen</Text>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

export default SettingsScreen;
