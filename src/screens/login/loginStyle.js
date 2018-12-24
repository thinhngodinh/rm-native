import { StyleSheet, Platform } from 'react-native';

const loginStyle = StyleSheet.create(
    {
        defaultTextColor: {
            color: '#ffffff70',
            padding: 10
        },
        error: {
            color: 'red',
            fontWeight: 'bold',
            fontSize: 11
        },
        appLogo: {
            width: '100%',
            height: 80,
            alignItems: 'center',
            marginTop: Platform.OS === 'ios' ? 50 : 20,
        },
        appFooter: {
            padding: 10,
            color: '#fff'
        },
        formContainer: {
            top: -15,
            padding: 5,
            paddingBottom: 75,
            minWidth: 320,
            borderWidth: 1,
            borderColor: '#ffffff30',
            borderStyle: 'solid',
            backgroundColor: '#00000080'
        },
        screen: {
            backgroundColor: '#000',
            flex: 1,
            minHeight: 400,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        loginButton: {
            borderRadius: 50,
            width: 80,
            height: 80,
            padding: 0,
            justifyContent: 'center',
            alignSelf: 'center',
            position: 'absolute',
            bottom: -115

        },
        loginButtonLabel: {
            fontSize: 11,
            fontWeight: '900',
            zIndex: 1,
            padding: 0
        }
    }
);
export default loginStyle;