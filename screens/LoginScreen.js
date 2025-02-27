import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home'); // Navigate to HomeScreen on success
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Spa Management Login</Text>
      <TextInput 
        placeholder="Email" 
        style={{ width: '100%', padding: 10, borderWidth: 1, borderRadius: 10, marginBottom: 10 }} 
        value={email} 
        onChangeText={setEmail} 
      />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={{ width: '100%', padding: 10, borderWidth: 1, borderRadius: 10, marginBottom: 20 }} 
        value={password} 
        onChangeText={setPassword} 
      />
      
      <TouchableOpacity 
        style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 10, width: '100%', alignItems: 'center' }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 10 }}>
        <Text style={{ color: '#007bff' }}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Go to Signup */}
      <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={{ marginTop: 10 }}>
  <Text style={{ color: '#007bff' }}>Don't have an account? Sign Up</Text>
</TouchableOpacity>

    </View>
  );
};

export default LoginScreen;
