import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig'; // Ensure correct path

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("Login"); // Navigate to Login after signup
    } catch (error) {
      Alert.alert("Signup Error", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Signup</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email}
        style={{ width: '100%', padding: 10, borderWidth: 1, borderRadius: 10, marginBottom: 10 }} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} value={password}
        style={{ width: '100%', padding: 10, borderWidth: 1, borderRadius: 10, marginBottom: 20 }} />
      <TouchableOpacity onPress={handleSignup} style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 10, width: '100%', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ marginTop: 10 }}>
        <Text style={{ color: '#007bff' }}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
