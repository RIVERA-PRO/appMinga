import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import FormRegister from '../Components/FormRegister';
import { LinearGradient } from 'expo-linear-gradient';
import Logomr from '../../assets/Logo2.png';
export default function ContFormRegister({ handleRender }) {
    return (
        <LinearGradient colors={['#fff', '#d71b7b']} style={styles.container}>
            <View style={styles.bienvenida}>
                <Image source={Logomr} style={styles.logo} />
                <Text style={styles.welcomeH2}>Welcome!</Text>
            </View>
            <FormRegister handleRender={handleRender} />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 900,
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: "200%"
    },
    logo: {
        width: 150,
        height: 35,
        resizeMode: 'contain',
    },
    welcomeH2: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        color: '#000',
    },
    bienvenida: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: "flex-start",
    },
});