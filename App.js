import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {colors} from './src/constants/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from './src/routes/route';
import { Provider } from "react-redux";
import { store } from './src/store/store';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map(screen => (
          <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
        ))}
      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
};

const styles = StyleSheet.create({
  globalStyle: {
    color: colors.black,
    backgroundColor: 'white',
  },
});

export default App;
