import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Svg, Path } from 'react-native-svg'; // Icon for the button
import DateTimePicker from '@react-native-community/datetimepicker';

interface InputFieldProps {
  label: string;
  inputType: 'text' | 'email' | 'password' | 'date';
  value:string;
  onChangeText: (text: string) => void;
}

const DateInputField: React.FC<InputFieldProps> = ({
  label,
  inputType,
}) => {
  const [date, setDate] = useState(new Date()); // Defaulting to current date
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputType === 'date' ? date.toLocaleDateString() : ''}
          editable={false} // Prevent editing directly, we use the button to pick the date
          placeholder={inputType === 'date' ? 'Select Date' : ''}
        />
        {inputType === 'date' && (
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.dateButton}
          >
            <Image source={require('@/assets/images/Calendar.png')}  />

          </TouchableOpacity>
        )}
      </View>

      {/* Date Picker */}
      {showDatePicker && inputType === 'date' && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 46,
    flex: 1,
    borderColor: '#09363B',
    borderWidth: 1,
    borderRadius: 28,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  dateButton: {
    padding: 10,
    position: 'absolute',
    right: 10,
  },
});

export default DateInputField;
