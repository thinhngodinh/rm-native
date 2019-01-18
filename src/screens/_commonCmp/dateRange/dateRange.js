import React from 'react';
import DateRangePicker from './DateRangePicker';
import { Modal, View, SafeAreaView } from 'react-native';
import { Button, Text } from 'native-base';
import moment from 'moment';
import dateRangeStyle from './DateRangeStyle';

class DateRange extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            startDate: moment().format('YYYY-MM-DD'),
            endDate: moment().format('YYYY-MM-DD'),
            startInitRange: '',
            endInitRange: '',
            maxDate: moment().format('YYYY-MM-DD')
        }
        this.handleChangeInitRange = this.handleChangeInitRange.bind(this)
        // this.isActivePeriod = this.isActivePeriod.bind(this)
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible })
    }

    setDateSelected(startDateSelected, endDateSelected) {
        this.setState({
            startDate: startDateSelected,
            endDate: endDateSelected
        })

        this.props.updateFilter(this.props.dispatch, { from_date: startDateSelected, to_date: endDateSelected })
    }

    handleChangeInitRange(startDate, endDate) {
        this.setState({
            startInitRange: startDate,
            endInitRange: endDate
        })
    }

    isActivePeriod(periodSelect) {
        let startDate = moment().subtract(1, periodSelect).format('YYYY-MM-DD');
        let endDate = moment().format('YYYY-MM-DD');
        console.log('isActivePeriod', moment(this.state.startDate).isSame(startDate, 'day'), moment(this.state.endDate).isSame(endDate, 'day'));
        return moment(this.state.startDate).isSame(startDate, 'day') && moment(this.state.endDate).isSame(endDate, 'day')
    }

    filterCalendarPeriod(periodSelect) {
        let startDate = moment().subtract(1, periodSelect).format('YYYY-MM-DD');
        let endDate = moment().format('YYYY-MM-DD');
        this.setState({
            startDate: startDate,
            endDate: endDate
        })
        this.handleChangeInitRange(startDate, endDate);
        this.props.updateFilter(this.props.dispatch, { from_date: startDate, to_date: endDate })
    }

    render() {
        return (

            <View style={{ flex: 1 }}>
                <Button
                    onPress={() => { this.setModalVisible(true) }}
                    block bordered transparent
                    style={dateRangeStyle.calendarField}
                >
                    <Text style={dateRangeStyle.textDate}>WORKLOAD</Text>
                    <Text style={dateRangeStyle.textDate}>From: {this.state.startDate}</Text>
                    <Text style={dateRangeStyle.textDate}>To: {this.state.endDate}</Text>
                </Button>

                <Modal
                    animationType="slide"
                    transparent={true}
                    hardwareAccelerated={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setModalVisible(false) }}
                >
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                        <DateRangePicker
                            initialRange={[this.state.startInitRange, this.state.endInitRange]}
                            onSuccess={(s, e) => { this.setDateSelected(s, e) }}
                            theme={{ markColor: '#f42c17', markTextColor: '#ffffff', todayTextColor: '#04b6fe', arrowColor: '#04b6fe' }}
                            maxDate={this.state.maxDate}
                        />
                    </SafeAreaView>
                </Modal>

                <View style={dateRangeStyle.wraperCalendarFilter}>
                    <Button
                        onPress={() => { this.filterCalendarPeriod('weeks') }}
                        transparent bordered small info 
                        style={[dateRangeStyle.cldFilterItem, this.isActivePeriod('weeks') ? dateRangeStyle.activeWorkLoad : '']}
                    >
                        <Text style={this.isActivePeriod('weeks') ? dateRangeStyle.workloadTxt: ''}>Week</Text>
                    </Button>
                    <Button
                        onPress={() => { this.filterCalendarPeriod('months') }}
                        transparent bordered small info
                        style={[dateRangeStyle.cldFilterItem, this.isActivePeriod('months') ? dateRangeStyle.activeWorkLoad : '']}
                    >
                        <Text style={this.isActivePeriod('months') ? dateRangeStyle.workloadTxt: ''}>Month</Text>
                    </Button>
                    <Button
                        onPress={() => { this.filterCalendarPeriod('quarters') }}
                        transparent bordered small info
                        style={[dateRangeStyle.cldFilterItem, this.isActivePeriod('quarters') ? dateRangeStyle.activeWorkLoad : '']}
                    >
                        <Text style={this.isActivePeriod('quarters') ? dateRangeStyle.workloadTxt: ''}>Quarter</Text>
                    </Button>
                    <Button
                        onPress={() => { this.filterCalendarPeriod('years') }}
                        transparent bordered small info
                        style={[dateRangeStyle.cldFilterItem, this.isActivePeriod('years') ? dateRangeStyle.activeWorkLoad : '']}
                    >
                        <Text style={this.isActivePeriod('years') ? dateRangeStyle.workloadTxt: ''}>Year</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default DateRange