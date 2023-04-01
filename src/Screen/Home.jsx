import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';

import bg from '../../assets/fondom.jpg';
import TituloSeccion1Hero1 from '../Components/TituloSeccion1Hero';
import Parrafo1Seccion1Hero1 from '../Components/Parrafo1Seccion1Hero';
import BotonSeccion1Hero1 from '../Components/BotonSeccion1Hero';
import ContFormLogin from './ContFormLogin';

export default function Seccion1Hero1() {
    return (
        <ImageBackground source={bg} style={styles.backgroundImage}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.seccion}>
                    <View style={styles.texto}>
                        <TituloSeccion1Hero1 text='Best Manga Reader' />
                        <Parrafo1Seccion1Hero1 text='Find the perfect manga for you' />
                        <BotonSeccion1Hero1 text="Read" />
                    </View>
                </View>
                <View style={styles.seccion2}>
                    <ContFormLogin />
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        height: "200%"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    seccion: {
        height: "50%",
        padding: 20,
        justifyContent: 'center',
    },
    seccion2: {
        height: "100%",
    },
    texto: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 35,
    },
});