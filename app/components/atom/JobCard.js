import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

//utils
import en from "../../utils/en.json";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const JobCard = ({ job, onJobPressed }) => (
    <Card style={{
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        shadowOffset: {
            width: 0,
            height: 4,
        },
    }}>
        <Card.Title title={job.JobType} subtitle={job.JobDate} left={LeftContent} />
        <Card.Content>
            <Text>{en.TITLE} :- {job.Title}</Text>
            <Text>{en.DATE}  :- {job.JobDate}</Text>
            <Text>{en.CUSTOMER}  :- {job.CustomerName}</Text>
            <Text>{en.STATUS}  :- {job.Status}</Text>
        </Card.Content>
        <Card.Actions style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => { onJobPressed() }}>
                <Button>{en.VIEW}</Button>
            </TouchableOpacity>
        </Card.Actions>
    </Card>
);

export default JobCard;