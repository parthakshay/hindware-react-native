import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Pressable } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { colors } from '../theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
export default class EmpDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedin: '',
      tableHead: ['ID', 'Name', 'Zone', 'District', 'Sales'],
      tableData: [
        ['1', '2', '3', '4', '5'],
        ['a', 'b', 'c', 'd', 'e'],
        ['1', '2', '3', '4', '5'],
        ['a', 'b', 'c', 'd', 'e'],
        ['1', '2', '3', '4', '5'],
      ]
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
  componentDidMount() {
    AsyncStorage.getItem('loggedUser').then((value) => {
      this.setState({ signedin: value })
    });

  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Record</Text>
        </View>
      </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
          <Table borderStyle={{ borderColor: 'transparent' }}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
            {
              state.tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {
                    rowData.map((cellData, cellIndex) => (
                      <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text} />
                    ))
                  }
                </TableWrapper>
              ))
            }
          </Table>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fefefe' },
  head: { height: 40, backgroundColor: '#a1a1a1' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#fff1c1' },
  btn: { width: 58, height: 18, backgroundColor: '#ea4f5a', borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fefefe' },
  headbar: {
    marginTop: hp('6.02%'),
    height: hp('7.22%'),
    backgroundColor: colors.paleRed
  },
  plusButtonStyle: {
    height: hp('6.70%'),
    width: wp('11.94%'),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
  },
  plusButtonTextStyle: {
    color: colors.white,
    fontSize: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
});