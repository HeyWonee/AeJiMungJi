import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import ProfileInput from '../../components/Profile/ProfileInput';
import Button from '../../components/ui/Button';
import {Colors} from '../../constants/styles';
import {CheckBox, Icon} from '@rneui/themed';
import DatePicker from 'react-native-date-picker';
import {Button as Btn} from '@rneui/themed';
import DatePick from '../../components/Profile/DatePick';
import {useNavigation} from '@react-navigation/native';
import Weight from '../../components/Profile/Weight';
import {fetchDog, fetchDogImage} from '../../utils/profile';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ProfileHomeScreen2 = ({route}) => {
  const navigation = useNavigation();

  const [check, setCheck] = useState(false);
  const checkHandler = () => {
    setCheck(curValue => {
      return !curValue;
    });
  };

  const submitHandler = async () => {
    const {adoptionDay, birthday, weight} = inputValues;
    console.log(weight);

    if (adoptionDay < birthday) {
      Alert.alert('입양일은 태어난 날보다 빠를 수 없어요')
      return
    } else if (!weight || weight < 0) {
      Alert.alert('체중을 다시 확인해주세요.')
      return
    }


    const res = await fetchDog(inputValues);

    navigation.replace('ProfileChoice');
  };

  const [inputValues, setInputValues] = useState({
    name: route.params.name,
    adoptionDay: '',
    birthday: '',
    breed: route.params.breed,
    gender: route.params.gender,
    weight: '',
    neutering: check,
    gone: false,
    image: route.params.image,
  });

  const inputChangeHandler = (inputIdentifier, enterdValue) => {
    setInputValues(curValue => {
      return {
        ...curValue,
        [inputIdentifier]: enterdValue,
      };
    });
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>추가 정보 입력</Text>
        <Text style={styles.subTitle}>
          생일과 입양일은 꼭 정확하지 않아도 돼요!
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <DatePick
            inputChangeHandler={inputChangeHandler}
            inputValues={inputValues}
            title="반려견 생일"
            indentifier="birthday"
          />
          <View style={styles.inputSubContainer}>
            <DatePick
              inputChangeHandler={inputChangeHandler}
              inputValues={inputValues}
              title="반려견 입양일"
              indentifier="adoptionDay"
            />
          </View>
        </View>
        <View style={styles.weightBox}>
          <Text style={styles.subTitle}>몸무게</Text>
          <Weight
            weight={inputValues.weight}
            setWeight={inputChangeHandler.bind(this, 'weight')}
          />
        </View>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            center
            title="중성화 여부를 알려주세요."
            containerStyle={styles.checkBox}
            checked={check}
            onPress={checkHandler}
            textStyle={styles.checkBoxText}
            uncheckedColor={'#90560D'}
            checkedColor={'#90560D'}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={submitHandler} style={styles.button}>
          프로필 등록
        </Button>
      </View>
    </View>
  );
};

export default ProfileHomeScreen2;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.back100,
  },
  textContainer: {
    marginTop: responsiveHeight(10),
    paddingLeft: responsiveWidth(4),
  },
  title: {
    color: '#603500',
    // fontWeight: 'bold',
    fontSize: responsiveFontSize(4),
    marginBottom: responsiveHeight(1),
    fontFamily: '강원교육튼튼',
  },
  subTitle: {
    color: '#90560D',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'IBMPlexSansKR-Regular',
  },
  inputContainer: {
    height: responsiveHeight(60),
  },
  inputSubContainer: {
    alignItems: 'center',
    marginTop: responsiveHeight(4),
    height: responsiveHeight(20),
  },
  checkBoxContainer: {
    height: responsiveHeight(10),
  },
  checkBox: {
    backgroundColor: Colors.back100,
    color: '#90560D',
  },
  checkBoxText: {
    fontFamily: 'IBMPlexSansKR-Regular',
    color: '#90560D',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: responsiveWidth(50),
    height: responsiveHeight(8),
    borderRadius: responsiveWidth(10),
  },
  weightBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: responsiveHeight(20),
  },
});
