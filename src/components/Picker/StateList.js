import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';


const App = () => {
    const [selectedValue, setSelectedValue] = useState("Select Area");
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 270 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Select Area" value="Select" disabled />
                <Picker.Item label="Andhra Pradesh" value="AP" />
                <Picker.Item label="Karnataka" value="KA" />
                <Picker.Item label="Kerela" value="KL" />
                <Picker.Item label="Tamil Nadu" value="TN" />
                <Picker.Item label="Telangana" value="TS" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        alignItems: "center"
    }
});

export default App;