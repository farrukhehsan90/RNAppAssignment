import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, BackHandler, Alert, ActivityIndicator } from 'react-native';

//components
import JobCard from "../../components/atom/JobCard";

//redux
import { connect, useDispatch } from 'react-redux';
import * as jobsActions from 'app/actions/jobsActions';

//styles
import styles from './styles';

//navigation
import NavigationService from 'app/navigation/NavigationService';
import AsyncStorage from '@react-native-community/async-storage';

//utils
import en from '../../utils/en.json'
import Loader from '../../components/atom/Loader';


const Home = (props) => {
  const [jobs, setJobs] = useState(props?.jobs);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const token = props.route?.params?.params ? props.route.params.params : null;

  //REDUX
  const dispatch = useDispatch();
  const onFetchJobs = () => dispatch(jobsActions.getJobs({ pageCount, token }));

  useEffect(() => {
    setLoading(true);
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to exit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    onFetchJobs()

    return () => backHandler.remove();

  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    NavigationService.navigate("Login")
  }

  const onJobPressed = (job) => {
    NavigationService.navigate('JobsDetails', { job, token });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{en.JOBS}</Text>
      <ScrollView>
        {loading ? jobs && jobs.map((item, index) => {
          return (
            <JobCard
              key={index}
              job={item.Job}
              onJobPressed={() => onJobPressed(item)}
            />
          )
        }) : <Loader />}
      </ScrollView>
        <TouchableOpacity style={styles.showMoreButton} onPress={logout}>
          <Text style={styles.buttonText}>{en.LOGOUT}</Text>
        </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    jobs: state?.jobsReducer?.jobs,
  };
};

export default connect(mapStateToProps)(Home);
