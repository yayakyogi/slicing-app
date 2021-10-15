import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {ICArrowLeft, ICArrowDown} from '../../assets/icons';

const InputPhone = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <ICArrowLeft />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>Enter your mobile number</Text>
          <Text style={styles.subtitle}>
            Insert your phone number to continue
          </Text>
        </View>
        <View style={styles.inputNumber}>
          <View style={styles.label}>
            <Text style={styles.labelText}>+62</Text>
            <ICArrowDown />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Phone Number"
            placeholderTextColor="#C7C9D9"
            keyboardType="number-pad"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 30,
  },
  header: {
    marginVertical: 30,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    width: 144,
    lineHeight: 27,
    color: '#404040',
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#C7C9D9',
    marginTop: 5,
  },
  inputNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#DDE5E9',
    marginRight: 16,
    paddingVertical: 10,
  },
  labelText: {
    fontFamily: 'Poppins-Medium',
    color: '#C7C9D9',
    fontSize: 18,
    marginRight: 18,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#DDE5E9',
    paddingVertical: 10,
    flex: 1,
    fontFamily: 'Poppins-Medium',
    color: '#404040',
    fontSize: 18,
  },
  // button
  button: {
    backgroundColor: '#6E5DE7',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
});
