import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ILSignUp} from '../../assets';

const Register = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainer={styles.scrollview}>
        <Text style={styles.title}>Create Your Account</Text>
        <Text style={styles.subTitle}>
          Create your account to start journey
        </Text>
        <View style={styles.imgView}>
          <Image source={ILSignUp} style={styles.img} />
        </View>
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.formDouble}>
          <TextInput
            style={[styles.textInput, styles.textInputDouble]}
            placeholder="First name"
          />
          <View style={{width: 15}} />
          <TextInput
            style={[styles.textInput, styles.textInputDouble]}
            placeholder="Last name"
          />
        </View>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.textInput} placeholder="Enter Your Email" />
        <Text style={styles.label}>Pasword</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Password Here"
          secureTextEntry
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Create Account</Text>
        </TouchableOpacity>
        <View style={styles.viewHaveAccount}>
          <Text style={styles.haveAccount}>Already have account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUp}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  scrollview: {flexGrow: 1},
  container: {flex: 1, padding: 30, backgroundColor: '#FFFFFF'},
  title: {fontFamily: 'Poppins-Bold', fontSize: 18, color: '#404040'},
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#C7C9D9',
  },
  imgView: {alignItems: 'center'},
  img: {width: 221, height: 221, marginVertical: 40},
  label: {fontFamily: 'Poppins-Bold', fontSize: 12, color: '#404040'},
  textInput: {
    borderWidth: 1,
    borderColor: '#DDE5E9',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 11,
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  formDouble: {flexDirection: 'row', justifyContent: 'space-between'},
  textInputDouble: {
    flex: 1,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#6E5DE7',
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  viewHaveAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  haveAccount: {
    fontSize: 10,
    color: '#C7C9D9',
    marginRight: 5,
  },
  signUp: {
    fontSize: 10,
    color: '#6E5DE7',
  },
});
