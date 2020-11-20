import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddeefc',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: "column",
    alignItems: "center",
  },

  ccContainer: {
    height: '20%',
    aspectRatio: 1.586/1,
    position: "absolute",
    marginTop: '10%',
    borderRadius: 10,
    zIndex: 1,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10, 
  },
  ccImage: {
    position: "absolute",
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  ifContainer: {
    height: '45%',
    marginTop: '35%',
    margin: 20,
    padding: 20,
    alignSelf: "stretch", 
    alignContent: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5, 
  },
  ifText: {
    alignSelf: 'flex-start',
    fontSize: 10,
  },

  //Base styling for the inputfields containers
  ifFields: {
    alignSelf: 'stretch',
    height: 40,
    backgroundColor: 'white',
    borderColor: '#0055d4',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 3,
    padding: 5,
  },
  //Additional styling for the picker inputfield containers
  ifPickerContainer: {
    flex: 1, 
    padding: 0,
  },
  ifPicker: {
    borderWidth: 0, 
    padding: 0, 
    margin: 0,
  },

  ifButton: {
    width: '100%',  
    height: 40,
    backgroundColor: '#0055d4',
    borderRadius: 5,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  fieldActive: {
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2, 
    elevation: 5,
  },
});