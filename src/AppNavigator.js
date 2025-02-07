import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OverviewScreen from "./Screens/OverviewScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import CategoriesScreen from "./Screens/CategoriesScreen"
import CompletedTasks from "./Screens/CompletedTasks"

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Overview">
                <Stack.Screen name="Overview"  options={{ headerShown: false }} component={OverviewScreen} />
                {/*<Stack.Screen name="Add New Tasks" component={CategoriesScreen} />*/}
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                <Stack.Screen name="Completed Tasks" component={CompletedTasks} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
