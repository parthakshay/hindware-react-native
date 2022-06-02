import {
  StyleSheet
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import {
  colors
} from '../theme/colors';

export default StyleSheet.create({

  buttonStyle: {
    alignContent: 'center',
    alignSelf: 'center',
    height: hp('8%'),
    width: wp('80%'),
    marginTop: hp('5%'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
  },
  image: {
    width: wp('45.03%'),
    height: hp('7.22%'),
    marginTop: hp('8.43%'),
    marginLeft: wp('7.63%')
  },

  title: {
    padding: 20,
    fontSize: 20,
    fontSize: hp('3.61%'),
    marginLeft: wp('7.63%'),

  },
  buttonTextStyle: {
    color: colors.white,
    fontWeight: '500',
    fontSize: hp('2.40%')
  },
  plusButtonStyle: {
    height: hp('6.70%'),
    width: wp('11.94%'),
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
    marginRight: wp('7.63%')
  },
  textDanger: {
    color: colors.paleRed
  },
  plusButtonTextStyle: {
    color: colors.white,
    fontSize: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  labelUsername: {
    top: 30,
    borderWidth: 1,
    borderRadius: 10,
    height: hp('6.02%'),
    width: wp('80.33%'),
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',


  },
  labelTextbox: {
    top: 30,
    borderWidth: 1,
    borderRadius: 10,
    height: hp('6.02%'),
    width: wp('80.33%'),
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: hp('2.40%'),

  },

  reportScreenText: {
    color: colors.gray,
    fontSize: hp('2.40%'),
    marginLeft: wp('7.63%'),
    fontWeight: '400',
    marginBottom: hp('2.40%'),
    marginRight: wp('7.63%'),
    marginTop: hp('2.40%')
  },
  headbar: {
    marginTop: hp('6.02%'),
    height: hp('7.22%'),
    backgroundColor: colors.paleRed,
  },
  logOutButtonTextStyle: {
    color: colors.white,
    fontSize: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  logOutButton: {
    height: hp('6.70%'),
    width: wp('11.94%'),
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: colors.red,
    marginRight: wp('7.63%'),
    marginTop: hp('40.00%'),
  },
  
  plusButton:{
    paddingRight: wp('7.63%'),
    marginRight: wp('7.63%'),

  },

  homePageIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
        
  },
  containerTable: {
    
      flex: 1,
    },
});