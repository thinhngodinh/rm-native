import React from 'react';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

const LayoutHeader = ({title = '', isBack = false, CenterCmp = null, RightCmp = null, navigation}) => {
    return (
        <Header
            iosBarStyle='light-content'
            androidStatusBarColor='#232323'
            style={{backgroundColor: '#333'}}>
            <Left>
                {!isBack && <Button transparent onPress={() => navigation.toggleDrawer()}>
                    <Icon name="menu" style={{color: '#fff'}} />
                </Button>}
                {isBack && <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name='ios-arrow-back' style={{ color: '#fff' }} />
                </Button>}
            </Left>
            <Body style={{ flex: 2 }}>
                <Title style={{color: '#fff', textAlign: "center"}}>{title}</Title>
                { CenterCmp && <CenterCmp /> }
            </Body>
            <Right>
                { RightCmp && <RightCmp /> }
                <Button transparent>
                    <Icon name='md-notifications-outline' style={{ color: '#fff' }} />
                </Button>
            </Right>
        </Header>
    );
}

export default withNavigation(LayoutHeader);