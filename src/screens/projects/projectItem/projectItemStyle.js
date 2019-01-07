import { StyleSheet, Platform } from 'react-native';
import { Right } from 'native-base';

const projectItemStyle = StyleSheet.create(
    {
        mainCard: {
            width: '100%'
        },

        cardHdr: {
            position: 'relative'
        },
        cardTextHdr: {
            paddingLeft: 40,
            paddingRight: 40,
        },  
        labelHdr: {
            width: 40,
            height: 20,
            lineHeight: 20,
            textAlign: 'center',
            position: 'absolute',
            left: 0,
            top: 17,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 10,
            backgroundColor: '#04b6fe',
            color: '#ffffff',
            fontSize: 14
        },
        actHdr: {
            position: 'absolute',
            right: 0,
            top: 17,
            fontSize: 20
        },
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
            color: '#000',
            fontSize: 14
        },
        labelProcessIssues: {
            position: 'absolute',
            right: 0,
            bottom: '100%',
            color: '#000',
            fontSize: 14
        },
        itemProcess: {
            borderWidth: 1,
            borderColor: '#e0e0e0',
            borderRadius: 3,
            paddingTop: 3,
            paddingBottom: 3,
            paddingRight: 10,
            paddingLeft: 10,
            textAlign: 'center',
            marginRight: 5
        },
        itemProcessText: {
            fontSize: 13,
            color: '#232323'
        },
        cardTag: {
            marginTop: 10
        },
        cardTagItem: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row'
        },
        cardTagTextItem: {
            fontSize: 13,
            color: '#232323',
            fontWeight: '400'
        },
        memberJoined: {
            borderTopWidth: 1,
            borderColor: '#232323',
            paddingTop: 17
        },
        memberList: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center'
        },
        memberItem: {
            marginLeft: 0,
            marginRight: 10,
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
            right: -2,
            top: 5,
            width: 20,
            height: 20,
            lineHeight: 20,
            borderRadius: 10,
            backgroundColor: '#ddce01',
            color: '#000000',
            fontSize: 14,
            textAlign: 'center'
        },
        viewMore: {
            fontSize: 20,
            color: '#000000',
            marginBottom: 10
        }
    }
);
export default projectItemStyle;