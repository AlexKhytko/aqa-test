// api.test.js
const axios = require('axios');
const fetchData = require('./api');
jest.mock('axios');

describe('fetchData', () => {
  it('Успешный реквест', async () => {
   
    const mockData = { "userName": "string",  "password": "string" };
    axios.get.mockResolvedValue({ data: mockData });

    const url = 'https://demoqa.com/Account/v1/Authorized';
    const headers = { accept: "application/json"    };
    const body = {"code": "1207",  "message": "User not found!"};

    const result = await fetchData(url, headers, body);

    // Перевірка результату
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(url, {
      headers: headers,
      body: body
    });
  });

  it('Фейл', async () => {
   
    axios.get.mockRejectedValue(new Error('Network Error'));

    const url = 'https://demoqa.com/Account/v1/Authorized';
    const headers = {};
    const body = {"code": 0, "message": "string"};
   
    // Перевірка на те, що помилка буде кинута
    await expect(fetchData(url, headers, body)).rejects.toThrow('Ошибка запроса: Network Error');
  });
});

