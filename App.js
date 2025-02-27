import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { Ionicons } from "@expo/vector-icons";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import AppointmentsScreen from "./screens/AppointmentsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BookAppointmentScreen from "./screens/BookAppointmentScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Dashboard = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="home" size={size} color={color} />) }} 
    />
    <Tab.Screen 
      name="Appointments" 
      component={AppointmentsScreen} 
      options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="calendar" size={size} color={color} />) }} 
    />
    <Tab.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="person" size={size} color={color} />) }} 
    />
  </Tab.Navigator>
);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="BookAppointment" component={BookAppointmentScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
