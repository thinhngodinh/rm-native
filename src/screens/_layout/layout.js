import React from "react";
// third-party import

import { Container } from 'native-base';

// Header Import
import LayoutHeader from './layoutHeader';
import ConnectionStatus from '../_commonCmp/connectionStatus';

// Content Import
import LayoutContent from './layoutContent';

// Footer Import
import LayoutFooter from './layoutFooter';

const MasterLayout = ({headerProps, contentProps, footerProps}) => {
    return (
        <Container>
            <LayoutHeader {...headerProps} />
            <ConnectionStatus />
            <LayoutContent {...contentProps} />
            { footerProps && <LayoutFooter {...footerProps} /> }
        </Container>
    );
};

export default MasterLayout;
