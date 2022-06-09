import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Header from '../components/Headers/Header';
import empImg from '../assets/empImage.jpg';
import {useSelector} from 'react-redux';
import ButtonComponent from '../components/Button/ButtonComponent';
import {logout} from '../store/slices/userSlice';
import {useDispatch} from 'react-redux';

const Dashboard = ({navigation}) => {
  console.log(empImg);
  const user = useSelector(state => state.userDetails.user);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigation.push('Login');
  };
  return (
    <ScrollView>
      <Header text={` Welcome ${user && user.name} to Dashboard`} />
      <View style={styles.image}>
        <Image source={empImg} />
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.text}>Name: {user.name}</Text>
        <Text style={styles.text}>Email: {user.email}</Text>
        <Text style={styles.text}>Designation: {user.designation}</Text>
        <Text style={styles.text}>Contact number: {user.contact}</Text>
        <Text style={styles.text}>DOB: {new Date(user.dob).toDateString() }</Text>
      </ScrollView>
      <View style={styles.logout}>
        <ButtonComponent text="Logout" clickHandler={logoutHandler} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    color: 'black',
    marginHorizontal: '5%',
  },
  content: {
    backgroundColor: 'gray',
    padding: 10,
    height: 150,
    margin:'4%'
  },
  text: {
    color: 'white',
    lineHeight: 25,
    fontSize: 20,
    
  },
  image: {
    width: 200,
    overflow: 'hidden',
    height: 200,
    borderRadius: 100,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: '23%',
    marginVertical: '10%',
  },
  logout: {
    marginTop: '11%',
  },
});

export default Dashboard;
