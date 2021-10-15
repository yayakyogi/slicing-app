import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {ICArrowLeft} from '../../assets/icons';

const InputCode = () => {
  const Gap = ({width}) => {
    return <View style={{with: width}} />;
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <ICArrowLeft />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>Enter code sent to your phone number</Text>
          <Text style={styles.subtitle}>
            Already sent to number (+62) 081212345678
          </Text>
        </View>
        <View style={styles.inputNumber}>
          <TextInput style={styles.textInput} keyboardType="number-pad" />
          <TextInput style={styles.textInput} keyboardType="number-pad" />
          <TextInput style={styles.textInput} keyboardType="number-pad" />
          <TextInput style={styles.textInput} keyboardType="number-pad" />
        </View>
      </View>
      <View>
        <View style={styles.action}>
          <Text style={styles.actionText}>Didn’t receive code? </Text>
          <TouchableOpacity>
            <Text style={styles.actionBtnText}>Request again</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputCode;

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
    width: 209,
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
    justifyContent: 'space-between',
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
    fontFamily: 'Poppins-Medium',
    color: '#404040',
    fontSize: 18,
    width: 54,
    textAlign: 'center',
  },
  // button
  button: {
    backgroundColor: '#6E5DE7', //#2ECC71
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
  // action
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  actionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#C7C9D9',
  },
  actionBtnText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#6E5DE7',
  },
});
