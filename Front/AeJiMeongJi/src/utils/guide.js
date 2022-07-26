import axios from 'axios';

const url = 'http://i7d203.p.ssafy.io:8080';

export const fetchGuideList = async categoryName => {
  // axios 함수를 써야됨
  console.log('axios들어옴');
  const path = `/api/guide?category=${categoryName}`;

  try {
    const res = await axios({
      method: 'get',
      url: url + path,
    });

    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }

  // axios({
  //     method: 'get',
  //     url: 'http://bit.ly/2mTM3nY',
  //     responseType: 'stream'
  //   })
  //     .then(function (response) {
  //       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  //     });
};

export const isGuideLiked = async (memberId, guideId) => {
  const path = `/api/member/${memberId}/guide/${guideId}/like`;
  console.log(memberId, guideId);

  try {
    const res = await axios({
      method: 'get',
      url: url + path,
    });
    console.log(res.data, 'axios안');
    return res.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchMoreGuide = async (category, curLastIdx, limit) => {
  const path = `/api/guide?category=${category}&curLastIdx=${curLastIdx}&limit=${limit}`;

  try {
    const res = await axios({
      method: 'get',
      url: url + path,
    });

    return res;
  } catch (error) {}
};

export const fetchRunningData = async (walkingDistance, walkingTime) => {
  const path = '/api/walking';
  const curr = new Date();
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000; //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
  const walkingDate = new Date(utc + KR_TIME_DIFF); //UTC 시간을 한국 시간으로 변환하기 위해 utc 밀리초 값에 9시간을 더함.
  try {
    const res = await axios({
      method: 'post',
      url: url + path,
      data: {
        walkingDate,
        walkingDistance,
        walkingTime,
      },
    });
    console.log(res.data, '이거?');
    return res.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchCalData = async (calories, dogId, walkingId) => {
  const path = '/api/walkingdog';
  console.log(dogId);
  console.log(calories, dogId, walkingId);
  try {
    const res = await axios({
      method: 'post',
      url: url + path,
      data: {
        calories,
        dogId,
        walkingId,
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error.response);
  }
};

// {
//   "calories": 0,
//   "dogId": 0,
//   "walkingId": 0
// }
