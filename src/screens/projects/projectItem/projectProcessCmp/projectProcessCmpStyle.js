import { StyleSheet } from 'react-native';

const projectProcessCmpStyle = StyleSheet.create(
    {
        projectProcess: {
            position: 'relative',
            height: 5,
            width: '100%',
            backgroundColor: '#eeeeee',
            marginTop: 20,
            marginBottom: 20
        },
        labelPercentComplete: {
            position: 'absolute',
            left: 0,
            bottom: '100%',
            color: '#444444',
            fontSize: 14
        },
        labelProcessIssues: {
            position: 'absolute',
            right: 0,
            bottom: '100%',
            color: '#444444',
            fontSize: 14
        },
        itemProcess: {
            borderWidth: 1,
            borderColor: '#e0e0e0',
            borderRadius: 3,
            paddingTop: 3,
            paddingBottom: 3,
            paddingRight: 5,
            paddingLeft: 5,
            textAlign: 'center',
            marginRight: 5
        },
        itemProcessText: {
            fontSize: 12,
            color: '#444444'
        }
    }
);

export default projectProcessCmpStyle;
