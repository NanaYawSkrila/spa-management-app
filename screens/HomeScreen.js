import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Ensure correct path

const HomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    await signOut(auth);
    navigation.replace("Login"); // Redirect to login screen
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome to the Spa Management System</Text>
      <TouchableOpacity onPress={handleLogout} style={{ marginTop: 20, backgroundColor: "red", padding: 10, borderRadius: 10 }}>
        <Text style={{ color: "white" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
