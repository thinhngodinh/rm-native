import { StyleSheet } from 'react-native';

const projectTagCmpStyle = StyleSheet.create(
    {
        cardTag: {
            marginTop: 10
        },
        cardTagItem: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            paddingRight: 60
        },
        cardTagTextLabel: {
            fontSize: 13,
            color: '#444444',
            fontWeight: '400'
        },
        cardTagTextItem: {
            fontSize: 13,
            fontWeight: '300',
            color: '#009bd7'
        },
        noCardTagItem: {
            fontSize: 13,
            fontWeight: '300',
            color: '#cccccc',
            fontStyle: 'italic'
        },
        memberJoined: {
            borderTopWidth: 1,
            borderColor: '#cccccc',
            paddingTop: 17
        }
    }
);
export default projectTagCmpStyle;