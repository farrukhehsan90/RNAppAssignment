import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';

//components
import Input from '../../components/atom/Input';
import Button from '../../components/atom/PrimaryButton';

//logo
import images from '../../config/images';

//redux
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';

//styles
import styles from './styles';
import { navigateToHome } from '../../actions/navigationActions';
import deviceStorage from '../../api/methods/deviceStorage';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin(userName, password));

  useEffect(() => {
    async function getToken() {
      const response = await deviceStorage.loadToken()
      if (response) {
        navigateToHome(response)
      }
    }

    getToken();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image source={images.icons.logo} style={styles.logo} />

        <Input
          mode="outlined"
          label="username"
          onChangeText={text => setUserName(text)}
        />
        <Input
          mode="outlined"
          label="Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <Button mode="contained" onPress={onLogin} style={styles.button} />
    </View>
  );
}
