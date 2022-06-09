import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

const Header = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    textAlign: 'center',
    color: 'black',
    marginBottom: 15,
    fontWeight: 'bold',
    marginVertical:10
  },
});

export default Header;
