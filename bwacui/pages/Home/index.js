import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {
  DMProfile,
  ICScan,
  ICTopUp,
  ICAir,
  ICBpjs,
  ICData,
  ICGame,
  ICInternet,
  ICListrik,
  ICPay,
  ICPln,
  ICPulsa,
} from '../../assets';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Hi,Felicia</Text>
          <Text style={styles.subTitle}>Welcome</Text>
        </View>
        <Image source={DMProfile} style={styles.img} />
      </View>
      {/* Balance Info */}
      <View style={styles.balanceInfo}>
        <View style={styles.rounded1} />
        <View style={styles.rounded2} />
        <View style={styles.balance}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceNominal}>Rp 560.000</Text>
        </View>
        <View style={styles.iconService}>
          {/* Pay */}
          <View style={styles.content}>
            <View style={[styles.boxIcon, {backgroundColor: '#FFFFFF'}]}>
              <ICPay />
            </View>
            <Text
              style={[
                styles.iconLabel,
                {fontFamily: 'Poppins-Light', color: '#FFFFFF'},
              ]}>
              Pay
            </Text>
          </View>
          {/* Top Up */}
          <View style={styles.content}>
            <View style={[styles.boxIcon, {backgroundColor: '#FFFFFF'}]}>
              <ICTopUp />
            </View>
            <Text
              style={[
                styles.iconLabel,
                {fontFamily: 'Poppins-Light', color: '#FFFFFF'},
              ]}>
              Top Up
            </Text>
          </View>
          {/* Scan */}
          <View style={styles.content}>
            <View style={[styles.boxIcon, {backgroundColor: '#FFFFFF'}]}>
              <ICScan />
            </View>
            <Text
              style={[
                styles.iconLabel,
                {fontFamily: 'Poppins-Light', color: '#FFFFFF'},
              ]}>
              Scan
            </Text>
          </View>
        </View>
      </View>
      {/* Pay Bill */}
      <View style={styles.payBill}>
        <Text style={styles.titlePayBill}>Pay Bill</Text>
        {/* Service list 1 */}
        <View style={styles.serviceList}>
          {/* Pulsa */}
          <View style={styles.content}>
            <View style={[styles.boxIcon, {backgroundColor: '#C9E7FF'}]}>
              <ICPulsa />
            </View>
            <Text
              style={[
                styles.iconLabel,
                {color: '#404040', fontFamily: 'Poppins-Regular'},
              ]}>
              Pulsa
            </Text>
          </View>
          {/* Data */}
          <View style={styles.content}>
            <View style={[styles.boxIcon, {backgroundColor: '#C9E7FF'}]}>
              <ICData />
            </View>
            <Text
              style={[
                styles.iconLabel,
                {color: '#404040', fontFamily: 'Poppins-Regular'},
              ]}>
              Data
            </Text>
          </View>
          {/* Internet */}
          <View style={styles.content}>
            <View style={[styles.boxIcon, {backgroundColor: '#C9E7FF'}]}>
              <ICListrik />
            </View>
            <Text
              style={[
                styles.iconLabel,
                {color: '#404040', fontFamily: 'Poppins-Regular'},
              ]}>
              Invest
            </Text>
          </View>
          {/* Game */}
          <View style={styles.content}>
            <View style={[styles.boxIcon, {backgroundColor: '#C9E7FF'}]}>
              <ICGame />
            </View>
            <Text
              style={[
                styles.iconLabel,
                {color: '#404040', fontFamily: 'Poppins-Regular'},
              ]}>
              Game
            </Text>
          </View>
        </View>
        {/* Service list 2 */}
        <View style={styles.serviceList}>
          {/* Pulsa */}
          <View style={styles.content}>
            <View style={[styles.boxIcon, {backgroundColor: '#C9E7FF'}]}>
              <ICInternet />
            </View>
            <Text
              style={[
                styles.iconLabel,
                {color: '#404040', fontFamily: 'Poppins-Regular'},
              ]}>
              Web
            </Text>
          </View>
          {/* Data */}
          <View style={styles.content}>
            <View style={[styles.boxIcon, {backgroundColor: '#C9E7FF'}]}>
              <ICPln />
            </View>
            <Text
              style={[
                styles.iconLabel,
                {color: '#404040', fontFamily: 'Poppins-Regular'},
              ]}>
              PLN
            </Text>
          </View>
          {/* Internet */}
          <View style={styles.content}>
            <View style={[styles.boxIcon, {backgroundColor: '#C9E7FF'}]}>
              <ICBpjs />
            </View>
            <Text
              style={[
                styles.iconLabel,
                {color: '#404040', fontFamily: 'Poppins-Regular'},
              ]}>
              BPJS
            </Text>
          </View>
          {/* Game */}
          <View style={styles.content}>
            <View style={[styles.boxIcon, {backgroundColor: '#C9E7FF'}]}>
              <ICAir />
            </View>
            <Text
              style={[
                styles.iconLabel,
                {color: '#404040', fontFamily: 'Poppins-Regular'},
              ]}>
              Water
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 30},
  // header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#404040',
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#C7C9D9',
  },
  img: {
    width: 50,
    height: 50,
  },
  // balanceInfo
  balanceInfo: {
    marginTop: 30,
    padding: 30,
    backgroundColor: '#6E5DE7',
    borderRadius: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  balance: {
    alignItems: 'center',
  },
  balanceLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
  balanceNominal: {
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    color: '#FFFFFF',
  },
  rounded1: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#7A67FF',
    position: 'absolute',
    top: -12,
    right: -12,
  },
  rounded2: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#7A67FF',
    position: 'absolute',
    bottom: -12,
    left: -12,
  },
  // iconService
  iconService: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  boxIcon: {
    borderRadius: 10,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  iconLabel: {
    fontSize: 12,
  },
  payBill: {
    marginTop: 30,
  },
  titlePayBill: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  // service list
  serviceList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
});
