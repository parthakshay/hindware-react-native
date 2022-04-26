import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';

const App = () => {
    const [selectedValue, setSelectedValue] = useState("Select District");
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 270 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Select District" value="Select" />
                <Picker.Item label="Nalgonda" value="TS" />
                <Picker.Item label="Karimnagar" value="TS" />
                <Picker.Item label="Nizamabad" value="TS" />
                <Picker.Item label="Medak" value="TS" />
                <Picker.Item label="Adilabad" value="TS" />
                <Picker.Item label="Khammam" value="TS" />
                <Picker.Item label="Warangal" value="TS" />
                <Picker.Item label="Hyderabad" value="TS" />
                <Picker.Item label="Ranga Reddy" value="TS" />
                <Picker.Item label="Mahabubnagar" value="TS" />
                <Picker.Item label="Siddipet" value="TS" />
                <Picker.Item label="Sangareddy" value="TS" />
                <Picker.Item label="Mahabubabad" value="TS" />
                <Picker.Item label="Nagarkurnool" value="TS" />
                <Picker.Item label="Yadadri Bhuvanagiri" value="TS" />
                <Picker.Item label="Mancherial" value="TS" />
                <Picker.Item label="Nirmal" value="TS" />
                <Picker.Item label="Jangaon" value="TS" />
                <Picker.Item label="Suryapet" value="TS" />
                <Picker.Item label="Jagtial" value="TS" />
                <Picker.Item label="Jogulamba Gadwal District" value="TS" />
                <Picker.Item label="Peddapalli" value="TS" />
                <Picker.Item label="Bhadradri Kothagudem District" value="TS" />
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