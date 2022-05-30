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
    fontSize: hp('3.61%'),
    marginLeft: wp('7.63%')
  },
  buttonTextStyle: {
    color: colors.white,
    fontWeight: '500',
    fontSize: hp('2.40%')
  },
  plusButtonStyle: {
    height: hp('6.70%'),
    width: wp('11.94%'),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
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
    textAlignVertical: 'center'
  },
  labelUsername: {
    top: 30,
    borderWidth: 1,
    borderRadius: 10,
    height: hp('6.02%'),
    width: wp('80.33%'),
    alignItems: 'center',
    textAlign: 'left',
    display: 'flex'

  },
  labelTextbox: {
    top: 30,
    borderWidth: 1,
    borderRadius: 10,
    height: hp('6.02%'),
    width: wp('80.33%'),
    textAlign: 'left',
    alignItems: 'center',
    display: 'flex'

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
  }

});