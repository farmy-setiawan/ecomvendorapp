import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import { THEME_COLOR } from '../utils/Colors';
import CustomTextInput from '../images/components/CustomTextInput';
import CustomButton from '../images/components/CustomButton';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/banner.jpg')} style={styles.banner} />
      <View style={styles.card}>
        <Text style={styles.title}>Sign Up</Text>
        <CustomTextInput placeholder={'Tulis Nama Anda'} />
        <CustomTextInput placeholder={'Tulis Email Anda'} />
        <CustomTextInput placeholder={'Tulis No. Hape Anda'} type={'number-pad'} />
        <CustomTextInput placeholder={'Tulis Password Anda'} />
        <CustomTextInput placeholder={'Tulis Confirm Password Anda'} />
        <CustomButton title={'Sign Up'} onClick={()=>{}}/>
      </View>
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner:{
    width: '100%',
    height: 230,
  },
  card :{
    width: '95%',
    alignSelf: 'center',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: 170,
    elevation: 5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title:{
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '500',
    color: THEME_COLOR,
    marginTop: 20,
  }
});
