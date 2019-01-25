import React from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';

const loadingModal = ({isLoading}) => {
    return (
        <Modal
            visible={isLoading}
            transparent
            onRequestClose={() => {}}
        >
            <View style={{flex: 1, alignContent: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                <ActivityIndicator size='large' color='#0000ff' />
            </View>    
        </Modal>
    );
}

export default loadingModal;
