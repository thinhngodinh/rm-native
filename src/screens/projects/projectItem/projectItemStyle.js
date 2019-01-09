import { StyleSheet } from 'react-native';

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
        cardTag: {
            marginTop: 10
        },
        cardTagItem: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row'
        },
        cardTagTextLabel: {
            fontSize: 13,
            color: '#444444',
            fontWeight: '400'
        },
        cardTagTextItem: {
            fontSize: 13,
            fontWeight: '400',
            color: '#009bd7'
        },
        memberJoined: {
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#cccccc',
            paddingTop: 17
        },
        actionWrapper: {
            flex: 1,
            justifyContent: 'space-around',
            alignSelf: 'stretch',
            flexDirection: 'row'
        }
    }
);
export default projectItemStyle;