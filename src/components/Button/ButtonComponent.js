import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonComponent = ({text, clickHandler}) => {
  return (
    <TouchableOpacity onPress={clickHandler}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    backgroundColor: 'green',
    margin: '5%',
    borderColor: 'green',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:50,
  },

  text: {
    padding: 10,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ButtonComponent;
