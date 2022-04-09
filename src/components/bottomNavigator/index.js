import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../../pages/mainPage/profile';
import Training from '../../pages/mainPage/training';
import Index from '../../pages/mainPage';
import Feeding from '../../pages/mainPage/feeding';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
            <Tab.Navigator
                initialRouteName="Feeding"
                screenOptions={{
                    tabBarLabel: 'Home',
                    tabBarActiveBackgroundColor: '#DCDCDC',
                    tabBarStyle: {
                        backgroundColor: '#1C1C1C',

                    },
                }}>

                <Tab.Screen name="Feeding" component={Feeding}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Alimentação',
                        tabBarIcon: ({ color }) => (
                            <Icon2 name="silverware-fork-knife" color={color} size={20} />
                        ),
                    }}
                />

                <Tab.Screen name="Training" component={Training}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Treino',
                        tabBarIcon: ({ color }) => (
                            <Icon name="barbell-outline" color={color} size={20} />
                        ),
                    }}
                />

                <Tab.Screen name="Index" component={Index}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Indíce',
                        tabBarIcon: ({ color }) => (
                            <Icon name="newspaper-outline" color={color} size={20} />
                        ),
                    }}
                />

                <Tab.Screen name="Profile" component={Profile}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Perfil',
                        tabBarIcon: ({ color }) => (
                            <Icon name="person-outline" color={color} size={20} />
                        ),
                    }}
                />
            </Tab.Navigator>
    );
}

export default MyTabs;