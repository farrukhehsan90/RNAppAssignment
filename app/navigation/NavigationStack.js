import React, { Fragment, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import JobDetails from 'app/screens/JobsDetail/index';
import deviceStorage from '../api/methods/deviceStorage';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

function App() {
  const updater = useSelector(state => state.loginReducer.updater)
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    async function getToken() {
      const response = await deviceStorage.loadToken()
      setAccessToken(response)
    }

    getToken();
  }, [updater])

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Fragment>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitleAlign: 'center',
              title: 'Login',
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerLeft: null,
              title: 'Home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="JobsDetails"
            component={JobDetails}
            options={{
              headerLeft: null,
              title: 'Job Details',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Fragment>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
