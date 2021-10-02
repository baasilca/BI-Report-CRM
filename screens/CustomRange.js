import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import moment from "moment";
import DateRangePicker from '../Components/dateRangePicker/DateRangePicker'

const CustomRange = (props) => {
    const { route } = props;
    const [startDate, SetStartDate] = useState(null)
    const [endDate, SetEndDate] = useState(null)
    const [displayedDate, SetDisplayedDate] = useState(moment())
    const [openModel, setOpenModel] = useState(false)

    useEffect(() => {
        setOpenModel(true)
    }, [])


    const setDates = (dates) => {
        if (dates.startDate) {
            SetStartDate(dates.startDate)
        }
        if (dates.endDate) {
            SetEndDate(dates.endDate)
        }
        if (dates.displayedDate) {
            SetDisplayedDate(dates.displayedDate)
        }
        if (dates.endDate) {
            route.params.callback({ startDate, endDate: dates.endDate });
            props.navigation.goBack();
            setOpenModel(false)

        }
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <DateRangePicker
                onChange={setDates}
                endDate={endDate}
                startDate={startDate}
                displayedDate={displayedDate}
                range
                open={openModel}
            >

            </DateRangePicker>
        </View>
    );
}

export default CustomRange;