import React from 'react';
import { Footer } from 'native-base';

const LayoutFooter = ({FooterCmp}) => {
    return(
        <Footer>
            {FooterCmp && <FooterCmp />}
        </Footer>
    );
};

export default LayoutFooter
