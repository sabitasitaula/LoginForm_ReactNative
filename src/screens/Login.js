import React, { useEffect,useRef } from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useState} from 'react';
import Header from '../components/Headers/Header';
import Input from '../components/Input/Input';
import ButtonComponent from '../components/Button/ButtonComponent';
import { login } from '../store/slices/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import { useGetLoginMutation } from '../services/loginApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, emailSet] = useState('');
  const [password, passwordSet] = useState('');
  const [submit, submitSet] = useState(false);
  const [addUser, response] = useGetLoginMutation();
  const dispatch = useDispatch();
  // const { isLoggedIn, user } = useSelector(state => state.userDetails);
  const executed = useRef(false);

  const onChangeEmail = val => {
    emailSet(val);
  };

  const retrieveData = async () => {
      try {
        const value = JSON.parse(await AsyncStorage.getItem('user'));
        if (value !== null) {
          console.log(value);
          return value;
        }
      } catch (error) {
        console.log(error);
        return null;
      }
    };
  const storeData = async (data) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
  const clickHandler = async () => {
    const details = await addUser({email, password});
    console.log('response', details.data.payload.data);
    details.data && dispatch(login({...details.data.payload.data}));
    details.data && (await storeData({...details.data.payload.data}));

    navigation.navigate('Dashboard');
  };
  useEffect(() => {
    if (executed.current) {
      dispatch(login({ user: JSON.parse(retrieveData) }));
      executed.current = true;
    }
  })
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
      <ButtonComponent text="Login" clickHandler={clickHandler} />
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
