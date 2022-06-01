import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../theme/colors'


const DatePickerApp = () => {
    const [date, setDate] = useState(new Date());

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Date of Joining:</Text>
                <DatePicker
                    style={styles.datePickerStyle}
                    date={date}
                    mode="date"
                    placeholder="select date"
                    format="DD/MM/YYYY"
                    minDate="01-01-1975"
                    maxDate="01-01-2025"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    useNativeDriver="true"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            right: 0,
                            top: 5,
                            marginLeft: 0,
                        },
                        dateInput: {
                            borderColor: "gray",
                            alignItems: "flex-start",
                            borderWidth: 0,
                        },
                        placeholderText: {
                            fontSize: 20,
                            color: "gray"
                        },
                        dateText: {
                            fontSize: 18,
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
        alignItems: 'flex-start',
    },
    title: {
        textAlign: 'left',
        fontSize: 30,
        fontWeight: 'bold',
    },
    datePickerStyle: {
        
    },
    text: {
        textAlign: 'left',
        width: wp('80%'),
        fontSize: 20,
        color: "gray"
    }
})