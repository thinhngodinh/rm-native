import { StyleSheet } from 'react-native';

const dateRangeStyle = StyleSheet.create(
    {
        calendarField: {
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#aaa'
        },
        textDate: {
            color: '#141414'
        },
        wraperCalendarFilter: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: 10
        },
        cldFilterItem: {
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 5,
            paddingLeft: 5,
            minWidth: 60,
            height: 35,
            justifyContent: 'center'
        },
        activeWorkLoad: {
            backgroundColor: '#04b6fe',
            color: '#fff'
        },
        workloadTxt: {
            color: '#fff'
        }
    }
);
export default dateRangeStyle;