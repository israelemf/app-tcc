import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Feed from '../../pages/mainPage/feed';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (

        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }}>
            <Tab.Screen name="Feed" component={Feed}
                options={{
                    title: '',
                    headerStyle: { backgroundColor: '#1C1C1C' },
                    headerTintColor: 'white'
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;