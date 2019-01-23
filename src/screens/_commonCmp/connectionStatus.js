import React from 'react'
import { NetInfo, SafeAreaView } from 'react-native';

import { View } from 'react-native';
import { Button, Icon, Text  } from 'native-base';
import { connect } from 'react-redux';

import { appActions } from '../../static/actionsIndex';

const NETWORK_TYPE = {
    'NONE': 'none'
};

class NetworkStatus extends React.PureComponent {
    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
        this._networkChange = this._networkChange.bind(this);
        this._connectedStateChange = this._connectedStateChange.bind(this);
    }

    _networkChange (connectionInfo) {
        this.dispatch(appActions.setNetworkStatus.invoke(connectionInfo));
    }

    _connectedStateChange (isConnected) {
        this.dispatch(appActions.setNetworkStatus.invoke({isConnected: isConnected}));
    }

    componentWillMount() {

        NetInfo.getConnectionInfo().then(
            this._networkChange
        );

        NetInfo.isConnected.fetch().then(
            this._connectedStateChange
        )

        NetInfo.addEventListener('connectionChange', this._networkChange);
        NetInfo.isConnected.addEventListener('connectionChange', this._connectedStateChange)
    }
    componentWillUnmount() {
        NetInfo.removeEventListener('connectionChange', this._networkChange);
        NetInfo.isConnected.removeEventListener('connectionChange', this._connectedStateChange)
    }

    render() {
        console.log('>>>>> Network Information', this.props.network);
        const { type, isConnected} = this.props.network;
        return (
            <View style={{backgroundColor: 'red', alignContent: 'center'}}>
                {(type === NETWORK_TYPE.NONE || !isConnected) && 
                    <Button disabled iconLeft light transparent style={{alignSelf: 'center'}}>
                        <Icon name='md-wifi' />
                        <Text>Connecting to network ...</Text>
                    </Button>
                }
            </View>
        );
    }
}


const mapStateToProps = (state) => ({
    network: state.app.netInfo
})

export default connect(mapStateToProps, null)(NetworkStatus);
