// axiosRequest.js
const axios = require('axios');

const makeRequest = async () => {
    
  try {
    const response = await axios.get(url); // неправильна URL
    return response.data;
  } catch (error) {
    throw new Error('Ошибка запроса: ' + error.message); // обробка помилки
  }
};
module.exports = makeRequest;

const makeRequestWithHeadersAndParams = async (url, headers, params) => {
   
       try {
      const response = await axios.get(url, {
        headers: headers,    // кастомні заголовки
        params: params       // параметри запиту
      });
      return response.data;
    } catch (error) {
      throw new Error('Ошибка запроса: ' + error.message);
    }
  };
module.exports = makeRequestWithHeadersAndParams

