import {SafeAreaView, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const Input = ({secureTextEntry, placeholder, value, onChangeText,type}) => {
  return (
    <TextInput
      style={styles.input}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      defaultValue={value}
      onChangeText={onChangeText}
      // autoFocus={true}
      placeholderTextColor="black"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 2,
    margin: '5%',
    color: 'black',
    borderRadius: 15,
    padding:7,
  },
});

export default Input;
