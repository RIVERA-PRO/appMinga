import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Screen/Home'
import ContFormRegister from "../Screen/ContFormRegister";
import Mangas from "../Screen/Mangas";

const Tab = createBottomTabNavigator()

function BottomTabsNavigation() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name='Home' component={Home} options={{
                tabBarStyle: {
                    backgroundColor: '#d71b7b',
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    fontWeight: 'bold',
                    padding: 16,
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#000',
                headerShown: false,
            }} />
            <Tab.Screen
                name='Register'
                component={ContFormRegister}
                options={{
                    tabBarStyle: {
                        backgroundColor: '#d71b7b',
                    },
                    tabBarLabelStyle: {
                        fontSize: 13,
                        fontWeight: 'bold',
                        borderRadius: 5,
                        padding: 16,
                    },
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#000',
                    headerShown: false,
                }}
            />

            <Tab.Screen name='Mangas' component={Mangas} options={{
                tabBarStyle: {
                    backgroundColor: '#d71b7b',
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    fontWeight: 'bold',
                    padding: 16,
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#000',
                headerShown: false,
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigation
