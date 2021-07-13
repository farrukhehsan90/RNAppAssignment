/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import Login from '../app/screens/Login/index';
import Home from '../app/screens/Home/index';
import JobDetails from '../app/screens/JobsDetail/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
  // renderer.create(<Login />);

});
