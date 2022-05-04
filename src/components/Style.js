import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    
buttonStyle: {
        alignContent: 'center',
        alignSelf:'center',
        height: 60,
        width: '60%',
        marginTop: 160,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222222',
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowColor: '#f03d44',
        shadowOffset: {
                width: 0,
                height: 3,
        },
},
container: {
    flex: 1,
    
},
screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
image: {
    width: 177,
    height: 60,
    marginTop: 70,
    marginLeft: 30
},
login: {
    color: "#121212",
    fontSize: 30,
    marginTop: 55,
    marginLeft: 30,
    fontWeight: '800',
},
loremIpsum: {
    color: '#b5b5b5',
    fontSize: 20,
    marginLeft: 30,
    fontWeight: '400',
    marginBottom: 20,
    marginRight:30,
},
  title: {
    fontSize: 32,
  },
  buttonTextStyle: {
    color: '#f0ebee',
    fontWeight: '700',
  },
  tinyLogo: {
    width: 150,
    resizeMode: "contain",
  },
  plusButtonStyle: {
    height: 54,
    width: 54,
    marginTop: 250,
    marginLeft: 270,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f03d44',
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  plusButtonTextStyle: {
    color: '#f0ebee',
    fontWeight: '900',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
    alignContent: 'center',
  },
  labelTextbox: {
    height: 50,
    width: 300,
    marginTop: 20,
    fontSize: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#a4a4a4',
    padding: 5
},
inputLayout: {
    paddingBottom: 20,
},
textDanger: {
    color: "#dc3545"
},
error: {
    borderWidth: 3,
    borderColor: 'red',
},
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
},
plusButton: {
    marginTop: 30,
    marginLeft:30,
},
report:{
    color: '#b5b5b5',
    fontSize: 20,
    marginLeft: 30,
    fontWeight: '400',
    marginBottom: 20,
    marginRight:30,
},

});
