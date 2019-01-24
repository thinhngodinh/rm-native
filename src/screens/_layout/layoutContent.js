import React from 'react';
import { RefreshControl } from 'react-native';
import { Content } from 'native-base';

const LayoutContent = ({
    ContentCmp, 
    padder = false, 
    onScrollHandler = () => {},
    refreshControlHandler = () => {},
    refreshing = false
}) => {
    return (
        <Content
            padder={padder}
            onScroll={onScrollHandler}
            refreshControl={<RefreshControl
                tintColor='#04b6fe'
                colors={['#04b6fe']}
                refreshing={refreshing}
                onRefresh={refreshControlHandler}
              />}
        >
            { ContentCmp && <ContentCmp /> }
        </Content>
    );
};

export default LayoutContent;
