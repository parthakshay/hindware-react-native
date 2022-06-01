import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

export default Picker = () => {
  const [value, setValue] = React.useState('');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View>
        <Text>SIH</Text>
        <RadioButton value="SIH" />
      </View>
      <View>
        <Text>Zonal Manager</Text>
        <RadioButton value="Zonal Manager" />
      </View>
      <View>
        <Text>ASM</Text>
        <RadioButton value="ASM" />
      </View>
      <View>
        <Text>Sales Man</Text>
        <RadioButton value="Sales Man" />
      </View>
    </RadioButton.Group>
  );

}
