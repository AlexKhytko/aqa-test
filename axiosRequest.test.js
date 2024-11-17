const makeRequest = require('./axiosRequest');
const makeRequestWithHeadersAndParams = require('./axiosRequest');
const axios = require('axios');

jest.mock('axios'); // Мокаємо Axios

describe('Задание 1: Неправильный url', () => {
    const url = 'https://incorrect-url.com'; 
  it('ошибка URL неправильный', async () => {
    axios.get.mockRejectedValue(new Error('Network Error')); 
    await expect(makeRequest()).rejects.toThrow('Ошибка запроса: Network Error');
  });
});

describe('Задание 2: заголовки и параметры', () => {
    const url = 'https://demoqa.com/Account/v1/User';
    it('правильно включено', async () => {
      const mockResponse = { data: 'success' };
      axios.get.mockResolvedValue(mockResponse);
      
      const headers = {
        'Authorization': 'Bearer my-token',
        'Content-Type': 'application/json'
      };
      const params = {
        id: 123,
        search: 'test'
      };
  
      const result = await makeRequestWithHeadersAndParams(url, headers, params);
      
      expect(axios.get).toHaveBeenCalledWith(url, expect.objectContaining({
        headers: headers,
        params: params

      }));
  
      expect(result).toEqual(mockResponse.data);
    });
  });
  