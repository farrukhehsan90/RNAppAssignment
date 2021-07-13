import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    width: screenWidth * 0.9,
    alignSelf: 'center',
    marginTop: screenHeight * 0.1,
  },
  input: {
    marginTop: screenHeight * 0.02,
  },
  button: {
    marginTop: screenHeight * 0.02,
    width: screenWidth * 0.9,
    alignSelf: 'center',
    backgroundColor: '#f4501c',
    borderRadius: 10
  },
  logo: {
    width: screenWidth * 0.5,
    height: screenHeight * 0.2,
    alignSelf: 'center',
  },
});

export default styles;
