import React from 'react';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';

const LayoutHeader = ({title = '', isBack = false, centerCmp, rightCmp}) => {
    return (
        <Header
            iosBarStyle='light-content'
            androidStatusBarColor='#232323'
            style={{backgroundColor: '#333'}}>
            <Left>
                {!isBack && <Button transparent>
                    <Icon name="menu" style={{color: '#fff'}} />
                </Button>}
                {isBack && <Button transparent>
                    <Icon name='ios-arrow-back' style={{ color: '#fff' }} />
                </Button>}
            </Left>
            <Body>
                <Title style={{color: '#fff', textAlign: "center"}}>{title}</Title>
                <centerCmp />
            </Body>
            <Right>
                <rightCmp />
            </Right>
        </Header>
    );
}

export default LayoutHeader