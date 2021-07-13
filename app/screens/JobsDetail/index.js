import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

//styles
import styles from './styles';

//navigation
import NavigationService from 'app/navigation/NavigationService';

//custom hook
import fetchJobDetail from '../../api/methods/fetchJobDetail';

//react native paper table
import { DataTable } from 'react-native-paper';

//utils
import en from "../../utils/en.json"

const index = (props) => {
  const [jobDetail, setJobDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState(props?.route?.params?.job?.Job);
  const token = props?.route?.params?.token;

  useEffect(() => {
    setLoading(true);
    fetchDetail();
  }, []);


  const fetchDetail = async () => {
    if (selectedJob) {
      const jobId = selectedJob.Id;
      let response = await fetchJobDetail(jobId, token);
      console.log(response.Data)
      if (response && response.Data) {
        setJobDetail(response.Data)
        setLoading(false);
      }
    }
  }

  const JobDetailTable = () => {
    return (
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>{en.JOB_ID}</DataTable.Cell>
          <DataTable.Cell >{jobDetail.Id}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>{en.JOB_TITLE}</DataTable.Cell>
          <DataTable.Cell >{jobDetail.Title}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>{en.JOB_STATUS}</DataTable.Cell>
          <DataTable.Cell >{jobDetail.Status}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>{en.JOB_DATE}</DataTable.Cell>
          <DataTable.Cell >{jobDetail.JobDate}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>{en.CREATED_DATE}</DataTable.Cell>
          <DataTable.Cell >{jobDetail.CreatedOnUtc}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>{en.JOB_LOCATION}</DataTable.Cell>
          <DataTable.Cell >{jobDetail.Address}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    )
  }

  const CusomerDetailTable = () => {
    return (
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>{en.CUSTOMER_ID}</DataTable.Cell>
          <DataTable.Cell >{jobDetail.CustomerId}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>{en.CUSTOMER_NAME}</DataTable.Cell>
          <DataTable.Cell >{jobDetail.CustomerName}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>{en.CUSTOMER_URL}</DataTable.Cell>
          <DataTable.Cell >{jobDetail.CustomerUrl}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={{ paddingVertical: 20 }}>
          <DataTable.Cell>{en.CUSTOMER_THUMB}</DataTable.Cell>
          <DataTable.Cell >
            <Image style={styles.productImg} source={{ uri: jobDetail.CustomerThumb }} />
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    )
  }

  return (
    <View style={styles.container}>
      {jobDetail &&
        <ScrollView>
          {/* JOB DETAIL SESSION */}
          <View style={styles.jobDetailSession}>
            <Text style={styles.jobType}>{en.JOB_DETAILS}</Text>
          </View>
          <JobDetailTable />

          {/* CUSTOMER DETAIL SESSION */}
          <View style={styles.customerDetailSession}>
            <Text style={styles.jobType}>{en.CUSTOMER_DETAIL}</Text>
          </View>
          <CusomerDetailTable />

          {/* IMAGE LIST */}
          {jobDetail.ImageList.length !== 0 &&
            <View>
              <View style={styles.imageDetailSession}>
              </View>
              <View>
                {loading ? jobDetail.ImageList.map((item, i) => {
                  return (
                    <Image style={styles.listImage} source={{ uri: item }} />
                  )
                }) : <Loader />}
              </View>
            </View>
          }

          {/* BACK BUTTON CONTAINER */}
        </ScrollView>
      }
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => { NavigationService.goBack() }}>
          <Text style={styles.backButtonText}>{en.BACK}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
