import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  jobDetailSession: {
    alignItems: 'center',
    marginHorizontal: 30
  },
  customerDetailSession: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 20
  },
  imageDetailSession: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 20
  },
  productImg: {
    width: 150,
    height: 200,
  },
  listImage: {
    width: '95%',
    marginHorizontal: 10,
    height: 150,
    marginTop: 10,
  },
  jobType: {
    fontSize: 28,
    color: "#696969",
    fontWeight: 'bold',
    marginTop: 10
  },
  jobDate: {
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: 'bold'
  },
  backButton: {
    marginTop: 30,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#f4501c",
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  buttonContainer: {
    marginHorizontal: 30,
    marginBottom: 30
  }
});

export default styles;
