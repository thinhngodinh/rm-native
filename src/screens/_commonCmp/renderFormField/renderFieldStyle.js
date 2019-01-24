import { StyleSheet } from 'react-native';

const fieldStye = StyleSheet.create(
    {
        fieldItem: {
            position: 'relative',
            minWidth: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            borderBottomWidth: 0,
            marginTop: 10,
            marginBottom: 10
        },
        fieldInput: {
            width: '100%',
            paddingLeft: 0,
            fontSize: 14
        },
        fieldInputNormal: {
            borderBottomWidth: 1,
            borderBottomColor: '#aaa'
        },
        fieldInputError: {
            borderBottomWidth: 1,
            borderBottomColor: '#f42c17'
        },
        fieldLabel: {
            color: '#a9a9a9',
            fontSize: 12,
            paddingRight: 0,
            position: 'absolute',
            left: 0,
            top: -8,
        },
        errorText: {
            display: 'flex',
            width: '100%',
            fontSize: 10,
            color: '#f42c17',
            position: 'absolute',
            bottom: -15,
            left: 0
        }
    }
);

export default fieldStye;