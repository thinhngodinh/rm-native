import {Toast} from 'native-base';

const _defautlToastConfig = {
    duration: 2000,
    position: 'bottom'
}

const _showToast = (message, typeConfig) => {
    Toast.show({
        text: message,
        ...typeConfig
    });
}

export const showToast = {
    error: (message) => {
        const toastConfig = {
            ..._defautlToastConfig,
            type: 'danger'
        };
        _showToast(message, toastConfig);
    },
    info: (message) => {
        const toastConfig = {
            ..._defautlToastConfig
        };
        _showToast(message, toastConfig);
    },
    warn: (message) => {
        const toastConfig = {
            ..._defautlToastConfig,
            type: 'danger'
        };
        _showToast(message, toastConfig);
    },
    sucess: (message) => {
        const toastConfig = {
            ..._defautlToastConfig,
            type: 'success'
        };
        _showToast(message, toastConfig)
    }
};
