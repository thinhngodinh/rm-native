import React from "react";
// third-party import

import { Container, Header, Left, Right, Body, Title, Button, Icon, Content, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import MasterLayout from '../_layout/layout';

class SettingsScreen extends React.Component {
    
    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon: () => <Icon name='md-settings' style={{color: '#fff'}} />
    }

    renderHeaderRightCmp () {
        return (
            <React.Fragment>
                <Button transparent>
                    <Icon name='md-search' style={{ color: '#fff' }} />
                </Button>
            </React.Fragment>
        );
    }

    renderContentCmp() {
        return (
            <React.Fragment>
                <Text>Settings Screen</Text>
            </React.Fragment>
        );
    }

    render() {        
        return(
            <MasterLayout
                headerProps={{
                        title:'Settings',
                        isBack: false, //defautl value is false
                        CenterCmp: null,
                        RightCmp: this.renderHeaderRightCmp
                    }}
                contentProps={{ 
                        padder: true,
                        ContentCmp: this.renderContentCmp
                    }}
            />
        );
    }
}

export default SettingsScreen;
