import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface InputFieldProps {
  label: string;
  inputType: 'text' | 'email' | 'password'; // Include password option
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  inputType,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={inputType === 'email' ? 'email-address' : 'default'}
        autoCapitalize="none"
        secureTextEntry={inputType === 'password'} // Make the input secure if it's a password
      />
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
  input: {
    height: 46,
    borderColor: '#09363B',
    borderWidth: 1,
    borderRadius: 28,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});

export default InputField;
