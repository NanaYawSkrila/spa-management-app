import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, TouchableOpacity, Alert, Platform } from 'react-native';

const BookAppointmentScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(true);

  const onChange = (event, selectedDate) => {
    // When the picker is cancelled, selectedDate will be undefined
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios'); // For Android, the picker closes automatically
    setDate(currentDate);
  };

  const showDatePicker = () => {
    console.log("Showing DateTimePicker");
    setShowPicker(true);
  };
  

  const confirmAppointment = () => {
    Alert.alert('Appointment Booked', `Your appointment is set for ${date.toLocaleString()}`);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Book an Appointment</Text>
      <TouchableOpacity 
        onPress={showDatePicker} 
        style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 10 }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Select Date & Time</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
       )} 
      <TouchableOpacity 
        onPress={confirmAppointment} 
        style={{ backgroundColor: 'green', padding: 10, borderRadius: 10, marginTop: 20 }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Confirm Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookAppointmentScreen;
