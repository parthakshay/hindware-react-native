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
                <Picker.Item label="Nalgonda" value="Nalgonda" />
                <Picker.Item label="Karimnagar" value="Karimnagar" />
                <Picker.Item label="Nizamabad" value="Nizamabad" />
                <Picker.Item label="Medak" value="Medak" />
                <Picker.Item label="Adilabad" value="Adilabad" />
                <Picker.Item label="Khammam" value="Khammam" />
                <Picker.Item label="Warangal" value="Warangal" />
                <Picker.Item label="Hyderabad" value="Hyderabad" />
                <Picker.Item label="Ranga Reddy" value="Ranga Reddy" />
                <Picker.Item label="Mahabubnagar" value="Mahabubnagar" />
                <Picker.Item label="Siddipet" value="Siddipet" />
                <Picker.Item label="Sangareddy" value="Sangareddy" />
                <Picker.Item label="Mahabubabad" value="Mahabubabad" />
                <Picker.Item label="Nagarkurnool" value="Nagarkurnool" />
                <Picker.Item label="Yadadri Bhuvanagiri" value="Yadadri Bhuvanagiri" />
                <Picker.Item label="Mancherial" value="Mancherial" />
                <Picker.Item label="Nirmal" value="Nirmal" />
                <Picker.Item label="Jangaon" value="Jangaon" />
                <Picker.Item label="Suryapet" value="Suryapet" />
                <Picker.Item label="Jagtial" value="Jagtial" />
                <Picker.Item label="Jogulamba Gadwal District" value="Jogulamba Gadwal District" />
                <Picker.Item label="Peddapalli" value="Peddapalli" />
                <Picker.Item label="Bhadradri Kothagudem District" value="Bhadradri Kothagudem District" />
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