import { StyleSheet } from 'react-native';

const memberCmpStyle = StyleSheet.create(
    {

        memberList: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            alignContent: 'flex-start'
        },
        memberItem: {
            marginLeft: 0,
            marginRight: 20,
            width: 46,
            paddingLeft: 0,
            paddingRight: 0,
            borderBottomWidth: 0,
            position: 'relative',
            marginBottom: 10
        },
        memberImage: {
            width: 46,
            height: 46,
            borderRadius: 23
        },
        statusMemberProcess: {
            position: 'absolute',
            right: 0,
            top: -10,
            backgroundColor: '#ddce01',
            color: '#ffffff',
            fontSize: 14,
            textAlign: 'center'
        },
        statusYellow: {
            backgroundColor: '#ddce01',
            color: '#000000'
        },
        statusBlue: {
            backgroundColor: '#04b6fe'
        },
        statusGreen: {
            backgroundColor: '#38b64b'
        },
        statusOrange: {
            backgroundColor: '#f36523'
        },
        statusRed: {
            backgroundColor: '#f42c17'
        },
        viewMore: {
            fontSize: 20,
            color: '#000000',
            marginRight: 0,
            marginLeft: 0,
            paddingLeft: 0,
            paddingRight: 0,
            marginTop: 3
        },
        btnViewMore: {
            width: 46,
            height: 46,
            borderRadius: 23,
            paddingTop: 0,
            paddingBottom: 0,
            justifyContent: 'center',
            alignItems: 'flex-start'
        },
        totalMemberLabel: {
            fontSize: 14,
            color: '#666666',
            fontWeight: '300',
            marginBottom: 15
        }
    }
);

export default memberCmpStyle;
