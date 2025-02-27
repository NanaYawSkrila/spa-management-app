import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Adjust the path if necessary

const ProfileScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace('Login'); // Redirect to Login screen on logout
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Profile Screen</Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={{ marginTop: 20, backgroundColor: 'red', padding: 10, borderRadius: 10 }}
      >
        <Text style={{ color: 'white' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
