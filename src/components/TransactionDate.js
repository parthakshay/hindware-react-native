import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { colors } from '../theme/colors';

const TransactionDate = () => {
    const [date, setDate] = useState(new Date());

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Date of Transaction:</Text>
                <DatePicker
                    style={styles.datePickerStyle}
                    date={date}
                    mode="date"
                    placeholder="select date"
                    format="DD/MM/YYYY"
                    minDate="01-01-1900"
                    maxDate="01-01-2100"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            right: 0,
                            top: 5,
                            marginLeft: 0,
                        },
                        dateInput: {
                            borderColor: '#343434',
                            alignItems: "flex-start",
                            borderWidth: 0,
                        },
                        placeholderText: {
                            fontSize: 20,
                            color: '#a1a1a1'
                        },
                        dateText: {
                            fontSize: 17,
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

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'left',
        fontSize: 30,
        fontWeight: 'bold',
    },
    datePickerStyle: {
        width: 300,
    },
    text: {
        textAlign: 'left',
        width: 300,
        fontSize: 20,
        color: '#a1a1a1'
    }
})

export default TransactionDate;