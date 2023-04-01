import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Screen/Home'
import ContFormRegister from "../Screen/ContFormRegister";


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
                    fontSize: 10,
                    fontWeight: 'bold',
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#000',
            }} />
            <Tab.Screen
                name='Register'
                component={ContFormRegister}
                options={{
                    tabBarStyle: {
                        backgroundColor: '#d71b7b',
                    },
                    tabBarLabelStyle: {
                        fontSize: 10,
                        fontWeight: 'bold',
                    },
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#000',
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomTabsNavigation
