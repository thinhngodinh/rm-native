import React from "react";
import { connect } from 'react-redux';
import { FooterTab, Button, Icon, Badge, Text } from 'native-base';

const projectFooterTab = (props) => {
    const { init_number } = props.user;
    return (
        <FooterTab>
            <Button active badge vertical>
                <Badge><Text>{init_number ? init_number.total_working_projects : '--'}</Text></Badge>
                <Icon name='md-code-working' />
                <Text>Working</Text>
            </Button>
            <Button badge vertical>
                <Badge ><Text>{init_number ? init_number.total_upnext_projects : '--'}</Text></Badge>
                <Icon name='md-clipboard' />
                <Text>Up Next</Text>
            </Button>
            <Button badge vertical>
                <Badge ><Text>{init_number ? init_number.total_done_projects : '--'}</Text></Badge>
                <Icon active name='md-done-all' />
                <Text>Done</Text>
            </Button>
        </FooterTab>
    );
};

const mapStateToProp = (state) => ({
    user: state.user.info,
    project: state.project
});

export default connect(mapStateToProp)(projectFooterTab);
