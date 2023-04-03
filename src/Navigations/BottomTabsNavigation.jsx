import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../Screen/Home";
import ContFormRegister from "../Screen/ContFormRegister";
import Mangas from "../Screen/Mangas";
import Perfil from "../Screen/Perfil";
import LogOut from "../Screen/LogOut";
import { FontAwesome } from '@expo/vector-icons';
import Details from "../Screen/Details";
const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {
    let state = useSelector((store) => store.bottomTabsReducer.state);
    let [token, setToken] = useState("");
    const details = useSelector((store) => store.mangaClickReducer.state);
    useFocusEffect(
        React.useCallback(() => {
            async function getData() {
                try {
                    const value = await AsyncStorage.getItem("token");
                    setToken(value);
                } catch (error) {
                    console.log(error);
                }
            }
            getData();
        }, [state])
    );

    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {

                    borderTopColor: 'transparent',
                    height: 55,
                    paddingBottom: 5,
                    paddingTop: 5,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                labelStyle: {
                    fontSize: 11,
                    marginBottom: 3,
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#000',


            }}
        >

            <Tab.Screen

                name="Home"
                component={Home}
                options={{
                    tabBarStyle: {
                        backgroundColor: '#d71b7b',
                    },
                    activeTintColor: '#fff',
                    inactiveTintColor: '#9B9B9B',

                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    ),
                }}
            />

            {token ? (
                <>
                    {details ? (<Tab.Screen
                        name="Details"
                        component={Details}
                        options={{
                            tabBarStyle: {
                                backgroundColor: '#d71b7b',
                            },
                            activeTintColor: '#fff',
                            inactiveTintColor: '#9B9B9B',
                            headerShown: false,
                            tabBarLabel: 'Details',
                            tabBarIcon: ({ color }) => (
                                <FontAwesome name="info" size={24} color={color} />
                            ),
                        }}
                    />) : (<></>)}
                    <Tab.Screen
                        name="Mangas"
                        component={Mangas}
                        options={{
                            tabBarStyle: {
                                backgroundColor: '#d71b7b',
                            },
                            activeTintColor: '#fff',
                            inactiveTintColor: '#9B9B9B',
                            headerShown: false,
                            tabBarLabel: 'Mangas',
                            tabBarIcon: ({ color }) => (
                                <FontAwesome name="book" size={24} color={color} />
                            ),
                        }}
                    />
                    <Tab.Screen name="Perfil" options={{
                        tabBarStyle: {
                            backgroundColor: '#d71b7b',
                        },
                        activeTintColor: '#fff',
                        inactiveTintColor: '#9B9B9B',
                        headerShown: false,
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="user" size={24} color={color} />
                        ),
                    }}>
                        {() => (
                            <>
                                <Perfil />
                                <LogOut />
                            </>
                        )}
                    </Tab.Screen>
                </>
            ) : (
                <Tab.Screen
                    name="register"
                    component={ContFormRegister}
                    options={{
                        tabBarStyle: {
                            backgroundColor: '#d71b7b',
                        },
                        activeTintColor: '#fff',
                        inactiveTintColor: '#9B9B9B',
                        headerShown: false,
                        tabBarLabel: 'Register',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="user-circle-o" size={24} color={color} />
                        ),
                    }}
                />
            )}
        </Tab.Navigator>
    );
}

export default BottomTabsNavigation;
