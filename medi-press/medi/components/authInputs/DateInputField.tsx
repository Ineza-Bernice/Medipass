import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Svg, Path } from 'react-native-svg'; // Icon for the button
import DateTimePicker from '@react-native-community/datetimepicker';

interface InputFieldProps {
  label: string;
  inputType: 'text' | 'email' | 'password' | 'date';
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
            {/* <Svg width="15" height="16" viewBox="0 0 15 16" fill="#000">
              <Path
                d="M6.61364 8.29545H7.79545V12.1364M1 5.63636H14M10.4545 3.27272V0.909088M4.54545 3.27272V0.909088M2.18182 15.0909H12.8182C13.1316 15.0909 13.4322 14.9664 13.6539 14.7448C13.8755 14.5231 14 14.2225 14 13.9091V3.27272C14 2.95929 13.8755 2.65869 13.6539 2.43705C13.4322 2.21542 13.1316 2.09091 12.8182 2.09091H2.18182C1.86838 2.09091 1.56778 2.21542 1.34615 2.43705C1.12451 2.65869 1 2.95929 1 3.27272V13.9091C1 14.2225 1.12451 14.5231 1.34615 14.7448C1.56778 14.9664 1.86838 15.0909 2.18182 15.0909Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg> */}
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
