import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {roundToNearestPixel} from 'react-native/Libraries/Utilities/PixelRatio';
import Login from '../screens/Login';

const screens = [
  {
    name: 'Login',
    component: Login,
  },
];

export default screens;
