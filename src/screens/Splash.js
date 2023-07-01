import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {THEME_COLOR} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signup');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={THEME_COLOR} barStyle={'light-content'} />
      <Text style={styles.logo}>E-Com</Text>
      <Text style={styles.logo}>Vendor App | Farmy Setiawan</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_COLOR,
  },
  logo: {
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
  },
});
