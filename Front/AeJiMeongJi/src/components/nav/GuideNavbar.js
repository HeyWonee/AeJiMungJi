import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constants/styles';

const GuideNavbar = ({source, children}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <Pressable
        onPress={() => {
          navigation.navigate('ProfileChoice');
        }}>
        <Image
          style={styles.profilelogo}
          resizeMode="contain"
          source={{uri: source}}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('GuideHome');
        }}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../Assets/image/guidelogo.png')}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('CalendarHome');
        }}
        style={styles.calendarContainer}>
        <Image
          style={styles.calendarLogo}
          resizeMode="contain"
          source={require('../../Assets/image/calendarLogo.png')}
          title="Calendar"
        />
      </Pressable>
    </View>
  );
};

export default GuideNavbar;

const styles = StyleSheet.create({
  //글꼴
  font: {
    fontFamily: 'ONE Mobile POP',
    letterSpacing: 4,
    color: Colors.contentText,
  },
  contentFont: {
    fontFamily: 'ONE Mobile Regular',
    fontWeight: 'bold',
  },
  nav: {
    height: responsiveHeight(7),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.back100,
  },
  // imageContainer: {
  //   height: responsiveHeight(20),
  //   width: responsiveHeight(20)
  // },
  contentbox: {
    justifyContent: 'center',
    backgroundColor: Colors.back100,
  },
  profilelogo: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(12),
    marginLeft: responsiveWidth(4),
  },
  logo: {
    marginTop: 5,
    maxWidth: responsiveWidth(24),
    maxHeight: responsiveHeight(7),
  },
  calendarLogo: {
    width: responsiveWidth(8),
    height: responsiveHeight(8),
  },
  text: {
    alignItems: 'center',
    flex: 1,
  },
  calendarContainer: {
    marginRight: responsiveWidth(4),
    height: responsiveHeight(8),
  },
});
