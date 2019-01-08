import React from "react";
import { FooterTab, Button, Icon, Badge, Text } from 'native-base';

const projectFooterTab = (props) => (
    <FooterTab>
        <Button active badge vertical>
            <Badge><Text>2</Text></Badge>
            <Icon name='md-code-working' />
            <Text>Working</Text>
        </Button>
        <Button vertical>
            <Icon name='md-clipboard' />
            <Text>Up Next</Text>
        </Button>
        <Button badge vertical>
            <Badge ><Text>10</Text></Badge>
            <Icon active name='md-done-all' />
            <Text>Done</Text>
        </Button>
    </FooterTab>
);

export default projectFooterTab;
