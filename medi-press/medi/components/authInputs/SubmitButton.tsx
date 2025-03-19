import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface CustomSubmitButtonProps {
  buttonText: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
}

const CustomSubmitButton: React.FC<CustomSubmitButtonProps> = ({
  buttonText,
  onPress,
  backgroundColor = '#09363B',
  textColor = '#FFF',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1, // Each button takes up equal space
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomSubmitButton;
