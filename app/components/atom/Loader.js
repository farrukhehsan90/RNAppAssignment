import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import AppStyles from '../../config/styles';

export default function Loader() {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} color={AppStyles.color.COLOR_PRIMARY} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});