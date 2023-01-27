import axios from 'axios';

const apiUrl = 'https://openmarket.weniv.co.kr/';

const instance = axios.create({
  baseUrl: apiUrl,
});

export const getProductData = async () => {
  try {
    const response = await instance.get('mail');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
