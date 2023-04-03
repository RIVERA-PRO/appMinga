import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
export default function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const userData = await AsyncStorage.getItem('user');
            setUser(JSON.parse(userData));
        };
        getUser();
    }, []);

    return (
        <LinearGradient colors={['#000', '#d71b7b', '#d71b7b']} style={styles.background}>
            <View style={styles.container}>
                {user ? (
                    <View style={styles.userContainer}>
                        <Text style={styles.userTitle}>Your Profile</Text>
                        <Image style={styles.userPhoto} source={{ uri: user.photo }} />
                        <Text style={styles.userText}>{user.name}</Text>
                        <Text style={styles.userText}>{user.email}</Text>
                    </View>
                ) : (
                    <View style={styles.loggedOutContainer}>
                        <Text style={styles.loggedOutText}>You are not logged in</Text>
                        <TouchableOpacity style={styles.button} onPress={() => alert('login')}>
                            <Text style={styles.buttonText}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userContainer: {
        alignItems: 'center',
        gap: 15
    },
    userTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    userText: {
        textAlign: 'center',
        height: 30,
        width: 290,
        backgroundColor: 'rgba(245,245,245,0.1)',
        fontSize: 20,
        color: '#fff',
        marginBottom: 5,
        borderRadius: 15
    },
    userPhoto: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#fff',
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#e74c3c',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loggedOutContainer: {
        alignItems: 'center',
    },
    loggedOutText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
});