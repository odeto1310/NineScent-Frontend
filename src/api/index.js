import axios from 'axios';
// import router from '@/router';

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: '/api', // 프록시 경로와 일치
  headers: {
    'Content-Type': 'application/json', // JSON 데이터를 처리하기 위한 기본 헤더
  },
});
export default instance; // 인터셉터가 적용된 Axios 인스턴스
