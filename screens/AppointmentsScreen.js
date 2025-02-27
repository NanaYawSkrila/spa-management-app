import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AppointmentsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Appointments</Text>
      {/* Button to navigate to the BookAppointmentScreen */}
      <TouchableOpacity
        style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 10, marginTop: 20 }}
        onPress={() => navigation.navigate('BookAppointment')}
      >
        <Text style={{ color: 'white' }}>Book an Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppointmentsScreen;
