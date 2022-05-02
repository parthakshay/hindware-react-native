import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';


const EmpDataTable = () => {

    return (
        <View style={styles.container}>
            <DataTable style={{ backgroundColor: '#f3f3f3', fontColor: '#000', fontSize: 10, }}>
                <DataTable.Header>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title>Employee ID</DataTable.Title>
                    <DataTable.Title numeric>Sales(2019-20)</DataTable.Title>
                    <DataTable.Title numeric>Sales(2018-19)</DataTable.Title>
                    <DataTable.Title numeric>Sales(2020-21)</DataTable.Title>
                    <DataTable.Title numeric>Sales (2021-22)</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>Harry</DataTable.Cell>
                    <DataTable.Cell>HIS024</DataTable.Cell>
                    <DataTable.Cell numeric>85</DataTable.Cell>
                    <DataTable.Cell numeric>91</DataTable.Cell>
                    <DataTable.Cell numeric>74</DataTable.Cell>
                    <DataTable.Cell numeric>87</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>iam</DataTable.Cell>
                    <DataTable.Cell>HIS025</DataTable.Cell>
                    <DataTable.Cell numeric>50</DataTable.Cell>
                    <DataTable.Cell numeric>75</DataTable.Cell>
                    <DataTable.Cell numeric>54</DataTable.Cell>
                    <DataTable.Cell numeric>55</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Zayn</DataTable.Cell>
                    <DataTable.Cell>HIS026</DataTable.Cell>
                    <DataTable.Cell numeric>72</DataTable.Cell>
                    <DataTable.Cell numeric>48</DataTable.Cell>
                    <DataTable.Cell numeric>67</DataTable.Cell>
                    <DataTable.Cell numeric>73</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>ouis</DataTable.Cell>
                    <DataTable.Cell>HIS027</DataTable.Cell>
                    <DataTable.Cell numeric>84</DataTable.Cell>
                    <DataTable.Cell numeric>78</DataTable.Cell>
                    <DataTable.Cell numeric>25</DataTable.Cell>
                    <DataTable.Cell numeric>65</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Niall</DataTable.Cell>
                    <DataTable.Cell>HIS028</DataTable.Cell>
                    <DataTable.Cell numeric>62</DataTable.Cell>
                    <DataTable.Cell numeric>47</DataTable.Cell>
                    <DataTable.Cell numeric>45</DataTable.Cell>
                    <DataTable.Cell numeric>51</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        paddingHorizontal: 30,
    },
});
export default EmpDataTable;