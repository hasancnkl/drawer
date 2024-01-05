import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator(); 

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = "home";
          } else if (route.name === "UsersTab") {
            iconName = "people";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
  >
    <Tab.Screen 
      name="HomeTab" 
      component={HomeStackNavigator}
      options={{ title: "Anasayfa" }}  
    />
    <Tab.Screen 
      name="UsersTab" 
      component={UserStackNavigator}
      options={{ tabBarBadge: 3, title: "Kullanıcılar" }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
