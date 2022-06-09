import React from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import {useState} from 'react';
import Header from '../components/Headers/Header';
import Input from '../components/Input/Input';
import ButtonComponent from '../components/Button/ButtonComponent';

const Login = () => {
  const [email, emailSet] = useState('');
  const [password, passwordSet] = useState('');
  const [submit, submitSet] = useState(false);

  const onChangeEmail = val => {
    emailSet(val);
  };
  const clickHandler = () => {
    submitSet(true);
  };
  return (
    <ScrollView>
      <Header text="Login Form" />

      <Text style={styles.label}>Email:</Text>
      <Input
        placeholder="Enter Email"
        value={email}
        onChangeText={onChangeEmail}
      />
      <Text style={styles.label}>Password:</Text>

      <Input
        placeholder="Enter Password"
        value={password}
        onChangeText={val => passwordSet(val)}
        secureTextEntry={true}
      />
      <ButtonComponent text="Submit" clickHandler={clickHandler} />

      {submit && (
        <>
          <Text style={styles.label}>Entered Email: {email}</Text>
          <Text style={styles.label}>Entered Password: {password}</Text>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    color: 'black',
    marginHorizontal: '5%',
  },
});

export default Login;
