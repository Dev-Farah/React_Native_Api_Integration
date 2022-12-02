import React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  header:{
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#008080',
  },
  mainContainer: {
    // margin: 10,
    padding: 20,
    // alignItems: 'center',
    alignContent: 'center',
  },
  card: {
    borderWidth: 0.5,
    marginVertical: 15,
    borderRadius: 20,
    boxShadow: 20,
    padding: 15,
    // alignContent: 'center',
    alignItems: 'center',
  },
  cardDetails: {
    textAlign: 'flex-start',
    width: '100%',
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 5,
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000'
  },

  // ----------------------------- Auth Styles -----------------------------

  container: {
    padding: 20,
    height: '100%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  div: {
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  inputBox: {
    width: '100%',
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    marginVertical: 10,
    borderWidth: 0.1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  input: {
    fontSize: 17,
    width: '90%',
  },
  link: {
    textAlign: 'right',
    // textDecorationLine: 'underline',
    fontStyle: 'italic',
  },
  button: {
    marginVertical: 15,
    padding: 13,
    backgroundColor: '#008080',
    borderWidth: 0.1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  btnText: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center'
  },
  authLink: {
    fontSize: 16,
    alignSelf: 'center',
  },

});


export default styles;