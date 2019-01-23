import React from "react";
// third-party import

import { Container, Footer, Button, Icon, Content } from 'native-base';

// Header Import
import LayoutHeader from './layoutHeader';
import ConnectionStatus from '../_commonCmp/connectionStatus';

// Content Import
import LayoutContent from './layoutContent';

// Footer Import
import LayoutFooter from './layoutFooter';

class MasterLayout extends React.Component {
    render() {
        const { headerProps, contentProps, footerProps } = this.props;
        return (
            <Container>
                <LayoutHeader {...headerProps} />
                <ConnectionStatus />
                <LayoutContent {...contentProps} />
                <LayoutFooter {...footerProps} />
            </Container>
        );
    }
}

export default MasterLayout;
