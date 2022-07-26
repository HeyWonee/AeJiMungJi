import React, {useState, useEffect, useLayoutEffect} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constants/styles';
import {SafeAreaView, ScrollView} from 'react-native';
import LikeButton from '../../components/Guide/LikeButton';
import Markdown from 'react-native-markdown-display';
import axios from '../../utils/index';

axios.defaults.withCredentials = true;
const url = 'http://i7d203.p.ssafy.io:8080/api/guide/';
const imageurl = 'http://i7d203.p.ssafy.io:8080/api/image/';

const GuideDetail = props => {
  const [GuideDetail, setGuideDetail] = useState([]);
  const guidenum = props.route.params.guideId;
  useLayoutEffect(() => {
    const fetchGuideDetail = async () => {
      const res = await axios(url + guidenum);
      if (res) {
        setGuideDetail(res.data);
      }
    };
    fetchGuideDetail();
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.imgBox}>
          <Image
            style={styles.runImg}
            source={{uri: imageurl + GuideDetail?.thumbnail}}
            resizeMode="contain"
          />
        </View>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: responsiveFontSize(4),
              fontFamily: '강원교육튼튼',
              marginBottom: responsiveHeight(3),
            }}>
            {GuideDetail.title}
          </Text>
          <View style={styles.contentBox}>
            <Markdown
              styles={{
                text: {
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'IBMPlexSansKR-Regular',
                },
              }}>
              {GuideDetail.content}
            </Markdown>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <LikeButton data={GuideDetail.guideId}></LikeButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.back100,
    padding: responsiveWidth(6),
  },
  footer: {
    backgroundColor: Colors.back200,
    paddingHorizontal: responsiveWidth(10),
  },
  imgBox: {
    backgroundColor: Colors.back100,
  },
  runImg: {
    maxWidth: '100%',
    height: responsiveHeight(40),
  },
  contentBox: {},
  contentImg: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(4),
    maxWidth: '100%',
    height: responsiveHeight(30),
  },
  Title: {},
  subTitle: {},
  content: {},
});

export default GuideDetail;
