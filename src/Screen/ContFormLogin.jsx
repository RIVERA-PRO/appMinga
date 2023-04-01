import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import BienvenidaRegister from '../Components/BienvenidaRegister';
import FormLogin from '../Components/FormLogin';
import { LinearGradient } from 'expo-linear-gradient';
export default function ContFormLogin() {
    return (

        <LinearGradient colors={['#fff', '#d71b7b', '#d71b7b']} style={styles.container}>
            <BienvenidaRegister text="Welcome!" />
            <FormLogin />
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        gap: 30,
        height: "100%",
        backgroundColor: '#FFFFFF',
    },
});