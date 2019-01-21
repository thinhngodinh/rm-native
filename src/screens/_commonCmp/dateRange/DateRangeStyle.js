import { StyleSheet } from 'react-native';

const dateRangeStyle = StyleSheet.create(
    {
        calendarField: {
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#ddd',
            padding: 0
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
            justifyContent: 'center',
            flex: 1
        },
        activeWorkLoad: {
            backgroundColor: '#fff',
            color: '#000',
            borderColor: '#ddd',
            borderWidth: 1
        },
        activeWorkloadTxt: {
            color: '#000',
        },
        workloadTxt: {
            color: '#bbb',
        },
        wrapperBack: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            paddingLeft: 16,
            paddingRight: 16
        },
        btnCalendar: {
            justifyContent: 'center',
            minWidth: 100,
            marginLeft: 10
        }
    }
);
export default dateRangeStyle;