import React from 'react';
import DateRangePicker from './DateRangePicker';
import { Modal, View} from 'react-native';
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
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible})
    }

    setDateSelected(startDateSelected, endDateSelected){
        this.setState({
            startDate: startDateSelected,
            endDate: endDateSelected
        })

        this.props.updateFilter(this.props.dispatch, {from_date: startDateSelected, to_date: endDateSelected})
    }

    handleChangeInitRange(startDate, endDate) {
        this.setState({
            startInitRange: startDate,
            endInitRange: endDate
        })
    }

    filterCalendarPeriod(periodSelect) {
        let startDate = moment().subtract(1, periodSelect).format('YYYY-MM-DD');
        let endDate = moment().format('YYYY-MM-DD');
        this.setState({
            startDate: startDate,
            endDate: endDate
        })
        this.handleChangeInitRange(startDate, endDate);
        this.props.updateFilter(this.props.dispatch, {from_date: startDate, to_date: endDate})
    }

    render(){
        return(
            <View>
                <Button
                    onPress={() => {this.setModalVisible(true)}}
                    block bordered transparent
                    style={dateRangeStyle.calendarField}
                >
                    <Text style={dateRangeStyle.textDate}>WORKLOAD</Text>
                    <Text style={dateRangeStyle.textDate}>From: {this.state.startDate}</Text>
                    <Text style={dateRangeStyle.textDate}>To: {this.state.endDate}</Text>
                </Button>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {this.setModalVisible(false)}}
                >
                    <DateRangePicker
                        initialRange={[this.state.startInitRange, this.state.endInitRange]}
                        onSuccess={(s, e) => {this.setDateSelected(s, e)}}
                        theme={{markColor: '#f42c17', markTextColor: '#ffffff', todayTextColor: '#04b6fe', arrowColor: '#04b6fe'}}
                        maxDate={this.state.maxDate}
                        />
                </Modal>
                <View style={dateRangeStyle.wraperCalendarFilter}>
                    <Button
                        onPress={() => {this.filterCalendarPeriod('weeks')}}
                        style={dateRangeStyle.cldFilterItem}
                        light
                    >
                        <Text>Week</Text>
                    </Button>
                    <Button
                        onPress={() => {this.filterCalendarPeriod('months')}}
                        style={dateRangeStyle.cldFilterItem}
                        light
                    >
                        <Text>Month</Text>
                    </Button>
                    <Button
                        onPress={() => {this.filterCalendarPeriod('quarters')}}
                        style={dateRangeStyle.cldFilterItem}
                        light
                    >
                        <Text>Quarter</Text>
                    </Button>
                    <Button
                        onPress={() => {this.filterCalendarPeriod('years')}}
                        style={dateRangeStyle.cldFilterItem}
                        light
                    >
                        <Text>Year</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default DateRange