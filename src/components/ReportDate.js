import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { colors } from '../theme/colors';


const DatePickerApp = () => {
    const [date, setDate] = useState(new Date());

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Report Date:</Text>
                <DatePicker
                    style={styles.datePickerStyle}
                    date={date}
                    mode="date"
                    placeholder="select date"
                    format="DD/MM/YYYY"
                    minDate="01-09-2000"
                    maxDate="01-09-2100"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            right: -5,
                            top: 4,
                            marginLeft: 0,
                        },
                        dateInput: {
                            borderColor: '#343434',
                            alignItems: "flex-start",
                            borderWidth: 0,
                            borderBottomWidth: 0.5,
                        },
                        placeholderText: {
                            fontSize: 20,
                            color: '#a1a1a1'
                        },
                        dateText: {
                            fontSize: 20,
                        }
                    }}
                    onDateChange={(date) => {
                        setDate(date);
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default DatePickerApp;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },
    datePickerStyle: {
        width: 250,
    },
    text: {
        textAlign: 'left',
        width: 230,
        fontSize: 16,
        color: '#343434'
    }
})