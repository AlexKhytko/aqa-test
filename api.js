// api.js
const axios = require('axios');

const fetchData = async (url, headers = {}, body = {}) => {
  try {
    const response = await axios.get(url, {
      headers: headers,    // кастомні заголовки
      body: body       // параметри запиту
    });
    return response.data;
  } catch (error) {
    throw new Error('Ошибка запроса: ' + error.message);
  }
};
module.exports = fetchData;
