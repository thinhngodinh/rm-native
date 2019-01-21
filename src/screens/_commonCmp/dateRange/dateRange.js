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
            startDate: props.from_date,
            endDate: props.to_date,
            maxDate: moment().format('YYYY-MM-DD')
        }
        this._handleChangeInitRange = this._handleChangeInitRange.bind(this);
        this._dismissDateSelected = this._dismissDateSelected.bind(this);
        this._confirmDateTime = this._confirmDateTime.bind(this);
    }

    _setModalVisible(visible) {
        this.setState({ modalVisible: visible })
    }

    _setDateSelected(startDateSelected, endDateSelected) {
        this.setState({
            startDate: startDateSelected,
            endDate: endDateSelected,
        })
    }

    _dismissDateSelected(){
        this.setState({
            startDate: this.props.from_date,
            endDate: this.props.to_date
        }, () => {
            this._confirmDateTime();
        })
    }
    
    _confirmDateTime() {
        this.props.updateFilter(this.props.dispatch, { from_date: this.state.startDate, to_date: this.state.endDate });
        this._setModalVisible(false);
    }

    _handleChangeInitRange(startDate, endDate) {
        this.setState({
            startDate: startDate,
            endDate: endDate
        })
    }

    _isActivePeriod(periodSelect) {
        let startDate = moment().subtract(1, periodSelect).format('YYYY-MM-DD');
        let endDate = moment().format('YYYY-MM-DD');
        return moment(this.props.from_date).isSame(startDate, 'day') && moment(this.props.to_date).isSame(endDate, 'day');
    }

    _filterCalendarPeriod(periodSelect) {
        let startDate = moment().subtract(1, periodSelect).format('YYYY-MM-DD');
        let endDate = moment().format('YYYY-MM-DD');
        this.setState({
            startDate: startDate,
            endDate: endDate
        })
        this._handleChangeInitRange(startDate, endDate);
        this.props.updateFilter(this.props.dispatch, { from_date: startDate, to_date: endDate });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Button
                    onPress={() => { this._setModalVisible(true) }}
                    block bordered transparent
                    style={dateRangeStyle.calendarField}
                >
                    <Text style={[dateRangeStyle.textDate]}>WORKLOAD</Text>
                    <Text style={dateRangeStyle.textDate}>From: {this.props.from_date}</Text>
                    <Text style={dateRangeStyle.textDate}>To: {this.props.to_date}</Text>
                </Button>

                <Modal
                    animationType="slide"
                    transparent={true}
                    hardwareAccelerated={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this._setModalVisible(false) }}
                >
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                        <DateRangePicker
                            initialRange={[this.state.startDate, this.state.endDate]}
                            onSuccess={(s, e) => { this._setDateSelected(s, e) }}
                            theme={{ markColor: '#f42c17', markTextColor: '#ffffff', todayTextColor: '#04b6fe', arrowColor: '#04b6fe' }}
                            maxDate={this.state.maxDate}
                        />
                        <View style={dateRangeStyle.wrapperBack}>
                            <Button
                                onPress={this._dismissDateSelected}
                                transparent bordered small info
                                style={dateRangeStyle.btnCalendar}
                            >
                                <Text>Cancel</Text>
                            </Button>
                            <Button
                                onPress={this._confirmDateTime}
                                transparent bordered small info
                                style={dateRangeStyle.btnCalendar}
                            >
                                <Text>Ok</Text>
                            </Button>
                        </View>
                    </SafeAreaView>
                </Modal>

                <View style={dateRangeStyle.wraperCalendarFilter}>
                    <Button
                        onPress={() => { this._filterCalendarPeriod('weeks') }}
                        transparent small info 
                        style={[dateRangeStyle.cldFilterItem, this._isActivePeriod('weeks') ? dateRangeStyle.activeWorkLoad : {}]}
                    >
                        <Text style={this._isActivePeriod('weeks') ? dateRangeStyle.activeWorkloadTxt: dateRangeStyle.workloadTxt}>Week</Text>
                    </Button>
                    <Button
                        onPress={() => { this._filterCalendarPeriod('months') }}
                        transparent small info
                        style={[dateRangeStyle.cldFilterItem, this._isActivePeriod('months') ? dateRangeStyle.activeWorkLoad : {}]}
                    >
                        <Text style={this._isActivePeriod('months') ? dateRangeStyle.activeWorkloadTxt: dateRangeStyle.workloadTxt}>Month</Text>
                    </Button>
                    <Button
                        onPress={() => { this._filterCalendarPeriod('quarters') }}
                        transparent small info
                        style={[dateRangeStyle.cldFilterItem, this._isActivePeriod('quarters') ? dateRangeStyle.activeWorkLoad : {}]}
                    >
                        <Text style={this._isActivePeriod('quarters') ? dateRangeStyle.activeWorkloadTxt: dateRangeStyle.workloadTxt}>Quarter</Text>
                    </Button>
                    <Button
                        onPress={() => { this._filterCalendarPeriod('years') }}
                        transparent small info
                        style={[dateRangeStyle.cldFilterItem, this._isActivePeriod('years') ? dateRangeStyle.activeWorkLoad : {}]}
                    >
                        <Text style={this._isActivePeriod('years') ? dateRangeStyle.activeWorkloadTxt: dateRangeStyle.workloadTxt}>Year</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default DateRange