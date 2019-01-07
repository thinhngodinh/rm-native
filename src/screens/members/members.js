import React from "react";
// third-party import

import { Container, Header, Left, Right, Body, Title, Button, Icon, Content, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

// Header Config
// Footer Config

class MembersScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Members',
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
                        <Title style={{ color: '#fff', textAlign: "center" }}>Members</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Grid>
                        <Row>
                            <Text>Members Screen</Text>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

export default MembersScreen;
